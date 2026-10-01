#!/usr/bin/env bash
# Публикация всех приложений Меотиды на поддоменах salamashkina.ru (nginx + бесплатный сертификат Let's Encrypt).
# Запускать на сервере от root. Можно запускать повторно: скрипт обновит код и дойдёт до конца с того места, где остановился.
#
# Что делает:
#   1. ставит nginx и certbot, если их нет (если 80/443 занял не nginx — останавливается и ничего не ломает);
#   2. забирает/обновляет репозитории и копирует index.html каждого приложения в /var/www/<поддомен>/;
#   3. создаёт конфиг nginx /etc/nginx/conf.d/<поддомен>.salamashkina.ru.conf — на каждое приложение свой;
#   4. выпускает сертификат для каждого поддомена, у которого DNS уже указывает на этот сервер, и включает редирект на https.
set -euo pipefail

DOMAIN="salamashkina.ru"
SRC_DIR="/opt/sites-src"           # куда клонируются репозитории
WEB_DIR="/var/www"                 # отсюда nginx раздаёт сайты
GH="https://github.com/Salamashko"

# поддомен | репозиторий | существующая папка с клоном (если репозиторий уже лежит на сервере, иначе -)
SITES=(
  "meotida|meotida_2|-"            # «Заявка в IT отдел» (актуальная версия)
  "meotida-old|meotida|-"          # «Заявка в IT отдел» v0.29 (предшественник)
  "markirovka|meotida_3|-"         # «МЕОТИДА · Маркировочный стол»
  "shk|meotida-shk|-"              # «Генератор линейных ШК GS1-128»
  "pisma|new-test|/root/new-test"  # каталог писем IT-поддержки
)

log()  { printf '\n==> %s\n' "$*"; }
warn() { printf '!!  %s\n' "$*" >&2; }

[ "$(id -u)" -eq 0 ] || { warn "Запустите от root"; exit 1; }

# --- 1. Пакеты и проверка портов ---------------------------------------------------------
log "1. nginx и certbot"
if ! command -v nginx >/dev/null; then
  # 80/443 должны быть свободны или заняты nginx — чужой сервис не трогаем
  if ss -tlnp 2>/dev/null | grep -E ':(80|443)\b' | grep -v nginx; then
    warn "Порт 80/443 занят другой программой (см. выше). Остановка: пришлите этот вывод в чат."
    exit 1
  fi
  apt-get update -y
  apt-get install -y nginx
fi
command -v certbot >/dev/null || apt-get install -y certbot python3-certbot-nginx
command -v git >/dev/null || apt-get install -y git
if ss -tlnp 2>/dev/null | grep -E ':(80|443)\b' | grep -vq nginx; then
  warn "Порт 80/443 занят не nginx. Остановка: пришлите вывод 'ss -tlnp | grep -E \":(80|443)\\b\"' в чат."
  exit 1
fi
systemctl enable --now nginx

# --- 2. Код ------------------------------------------------------------------------------
log "2. Код приложений"
mkdir -p "$SRC_DIR"
for row in "${SITES[@]}"; do
  IFS='|' read -r sub repo existing <<<"$row"
  dir="$SRC_DIR/$repo"
  [ "$existing" != "-" ] && [ -d "$existing/.git" ] && dir="$existing"
  if [ -d "$dir/.git" ]; then
    git -C "$dir" fetch origin main && git -C "$dir" checkout main && git -C "$dir" pull --ff-only origin main
  else
    GIT_TERMINAL_PROMPT=0 git clone "$GH/$repo.git" "$dir" || { warn "Не удалось клонировать $repo (приватный?) — пропускаю $sub"; continue; }
  fi
  mkdir -p "$WEB_DIR/$sub"
  install -m 644 "$dir/index.html" "$WEB_DIR/$sub/index.html"
  echo "$sub: $(stat -c %s "$WEB_DIR/$sub/index.html") байт <- $dir"
done

# --- 3. Конфиги nginx --------------------------------------------------------------------
log "3. Конфиги nginx (по файлу на поддомен)"
# Файл создаётся один раз; дальше его правит certbot (добавляет 443 ssl и редирект), поэтому существующие не перезаписываем.
for row in "${SITES[@]}"; do
  IFS='|' read -r sub repo existing <<<"$row"
  host="$sub.$DOMAIN"
  [ -d "$WEB_DIR/$sub" ] || continue
  f="/etc/nginx/conf.d/$host.conf"
  if [ -f "$f" ]; then echo "$host: конфиг уже есть ($f)"; continue; fi
  cat >"$f" <<NGINX
server {
    listen 80;
    listen [::]:80;
    server_name $host;
    root $WEB_DIR/$sub;
    index index.html;
    charset utf-8;
    gzip on;
    gzip_types text/html text/css application/javascript application/json;
    location / {
        try_files \$uri \$uri/ =404;
        add_header Cache-Control "no-cache";   # чтобы у сотрудников не оседали старые копии
    }
}
NGINX
  echo "$host: создан $f"
done
nginx -t
systemctl reload nginx

# --- 4. Сертификаты ----------------------------------------------------------------------
log "4. Сертификаты Let's Encrypt"
my_ip="$(curl -4 -fsS --max-time 10 https://api.ipify.org || true)"
echo "IP этого сервера: ${my_ip:-не определён}"
for row in "${SITES[@]}"; do
  IFS='|' read -r sub repo existing <<<"$row"
  host="$sub.$DOMAIN"
  [ -d "$WEB_DIR/$sub" ] || continue
  if [ -d "/etc/letsencrypt/live/$host" ]; then echo "$host: сертификат уже есть"; continue; fi
  dns_ip="$(getent ahostsv4 "$host" | awk 'NR==1{print $1}')"
  if [ -z "$dns_ip" ] || { [ -n "$my_ip" ] && [ "$dns_ip" != "$my_ip" ]; }; then
    warn "$host: DNS указывает на '${dns_ip:-ничего}', а сервер — $my_ip. Добавьте A-запись в панели Timeweb и запустите скрипт снова."
    continue
  fi
  certbot --nginx -d "$host" --non-interactive --agree-tos --register-unsafely-without-email --redirect \
    || warn "$host: certbot не выпустил сертификат (см. вывод выше)"
done
nginx -t && systemctl reload nginx

# --- 5. Итог -----------------------------------------------------------------------------
log "5. Проверка"
systemctl list-timers --no-pager 2>/dev/null | grep -i certbot || warn "Таймер автопродления certbot не найден — проверьте 'certbot renew --dry-run'"
for row in "${SITES[@]}"; do
  IFS='|' read -r sub repo existing <<<"$row"
  host="$sub.$DOMAIN"
  [ -d "$WEB_DIR/$sub" ] || continue
  printf '%-34s %s\n' "https://$host" "$(curl -sS -o /dev/null -m 10 -w '%{http_code}' --resolve "$host:443:127.0.0.1" "https://$host" 2>&1 || true)"
done
