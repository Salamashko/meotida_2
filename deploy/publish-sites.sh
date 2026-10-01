#!/usr/bin/env bash
# Публикация приложений Меотиды на ОДНОМ адресе по путям: https://meotida.salamashkina.ru/<путь>/
# (nginx + бесплатный сертификат Let's Encrypt). Запускать на сервере от root; можно запускать повторно.
#
# Корень https://meotida.salamashkina.ru/ скрипт НЕ ТРОГАЕТ: приложения добавляются отдельными location-ами
# из файла /etc/nginx/snippets/meotida-apps.conf. Если для этого адреса в nginx уже есть свой server{},
# скрипт его не меняет — просит добавить одну строку include и подсказывает куда.
#
# Что делает:
#   1. ставит nginx и certbot, если их нет (если 80/443 занял не nginx — останавливается, ничего не ломая);
#   2. забирает/обновляет репозитории и копирует index.html каждого приложения в /var/www/apps/<путь>/;
#   3. пишет snippets/meotida-apps.conf и (только если адреса ещё нет в nginx) server{} с include на него;
#   4. выпускает сертификат для meotida.salamashkina.ru и включает редирект http -> https.
set -euo pipefail

HOST="meotida.salamashkina.ru"
SRC_DIR="/opt/sites-src"           # куда клонируются репозитории
APPS_DIR="/var/www/apps"           # здесь лежат файлы приложений (по папке на путь)
ROOT_DIR="/var/www/meotida"        # корень сайта (его скрипт не наполняет)
SNIPPET="/etc/nginx/snippets/meotida-apps.conf"
SERVER_CONF="/etc/nginx/conf.d/$HOST.conf"
GH="https://github.com/Salamashko"

# путь | репозиторий | существующая папка с клоном (если репозиторий уже лежит на сервере, иначе -)
SITES=(
  "zayavka|meotida_2|-"            # «Заявка в IT отдел» (актуальная версия)
  "zayavka-old|meotida|-"          # «Заявка в IT отдел» v0.29 (предшественник)
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
mkdir -p "$SRC_DIR" "$APPS_DIR"
published=()
for row in "${SITES[@]}"; do
  IFS='|' read -r path repo existing <<<"$row"
  dir="$SRC_DIR/$repo"
  [ "$existing" != "-" ] && [ -d "$existing/.git" ] && dir="$existing"
  if [ -d "$dir/.git" ]; then
    git -C "$dir" fetch origin main && git -C "$dir" checkout main && git -C "$dir" pull --ff-only origin main \
      || warn "$repo: не удалось обновить, беру то, что лежит в $dir"
  else
    GIT_TERMINAL_PROMPT=0 git clone "$GH/$repo.git" "$dir" || { warn "Не удалось клонировать $repo (приватный?) — пропускаю /$path/"; continue; }
  fi
  [ -f "$dir/index.html" ] || { warn "$repo: нет index.html — пропускаю /$path/"; continue; }
  mkdir -p "$APPS_DIR/$path"
  install -m 644 "$dir/index.html" "$APPS_DIR/$path/index.html"
  published+=("$path")
  echo "/$path/: $(stat -c %s "$APPS_DIR/$path/index.html") байт <- $dir"
done
[ "${#published[@]}" -gt 0 ] || { warn "Ни одно приложение не опубликовано"; exit 1; }

# --- 3. Конфиг nginx ---------------------------------------------------------------------
log "3. Конфиг nginx"
mkdir -p /etc/nginx/snippets "$ROOT_DIR"
{
  echo "# Создано deploy/publish-sites.sh (репозиторий meotida_2). Не править вручную — файл перезаписывается."
  for path in "${published[@]}"; do
    cat <<NGINX
location = /$path { return 301 /$path/; }
location ^~ /$path/ {
    alias $APPS_DIR/$path/;
    index index.html;
    charset utf-8;
    gzip on;
    gzip_types text/css application/javascript application/json;
    add_header Cache-Control "no-cache";   # чтобы у сотрудников не оседали старые копии
}
NGINX
  done
} >"$SNIPPET"

# Есть ли уже server{} для этого адреса (кроме нашего файла)?
existing_cfg="$(grep -rlE "server_name[^;]*[[:space:]]$HOST([[:space:];])" /etc/nginx --include='*' 2>/dev/null | grep -v "^$SERVER_CONF$" || true)"
if [ -n "$existing_cfg" ]; then
  if grep -q "include $SNIPPET;" $existing_cfg; then
    echo "$HOST: в $existing_cfg строка include уже есть"
  else
    warn "Для $HOST в nginx уже есть конфиг: $existing_cfg"
    warn "Корень я не трогаю. Добавьте внутрь его server { ... } строку:   include $SNIPPET;"
    warn "затем выполните: nginx -t && systemctl reload nginx — и запустите этот скрипт ещё раз (для сертификата)."
    exit 2
  fi
elif [ ! -f "$SERVER_CONF" ]; then
  cat >"$SERVER_CONF" <<NGINX
# Создано deploy/publish-sites.sh. Корень сайта — $ROOT_DIR (наполнять можно свободно); приложения — через include.
server {
    listen 80;
    listen [::]:80;
    server_name $HOST;
    root $ROOT_DIR;
    index index.html;
    include $SNIPPET;
}
NGINX
  echo "создан $SERVER_CONF"
else
  echo "$SERVER_CONF уже есть — не меняю (certbot правит его сам)"
fi
nginx -t
systemctl reload nginx

# --- 4. Сертификат -----------------------------------------------------------------------
log "4. Сертификат Let's Encrypt"
if [ -d "/etc/letsencrypt/live/$HOST" ]; then
  echo "$HOST: сертификат уже есть"
else
  my_ip="$(curl -4 -fsS --max-time 10 https://api.ipify.org || true)"
  dns_ip="$(getent ahostsv4 "$HOST" | awk 'NR==1{print $1}')"
  echo "IP сервера: ${my_ip:-не определён}; DNS $HOST -> ${dns_ip:-ничего}"
  if [ -z "$dns_ip" ] || { [ -n "$my_ip" ] && [ "$dns_ip" != "$my_ip" ]; }; then
    warn "DNS $HOST указывает не на этот сервер. Проверьте A-запись в панели Timeweb и запустите скрипт снова."
    exit 3
  fi
  certbot --nginx -d "$HOST" --non-interactive --agree-tos --register-unsafely-without-email --redirect
fi
nginx -t && systemctl reload nginx

# --- 5. Итог -----------------------------------------------------------------------------
log "5. Проверка"
systemctl list-timers --no-pager 2>/dev/null | grep -i certbot || warn "Таймер автопродления certbot не найден — проверьте 'certbot renew --dry-run'"
for path in "${published[@]}"; do
  printf '%-48s %s\n' "https://$HOST/$path/" "$(curl -sS -o /dev/null -m 10 -w '%{http_code}' --resolve "$HOST:443:127.0.0.1" "https://$HOST/$path/" 2>&1 || true)"
done
printf '%-48s %s  (корень, не трогали)\n' "https://$HOST/" "$(curl -sS -o /dev/null -m 10 -w '%{http_code}' --resolve "$HOST:443:127.0.0.1" "https://$HOST/" 2>&1 || true)"
