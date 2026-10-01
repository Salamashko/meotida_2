# Tech Context
Браузер, без сервера. Деплой — Vercel (автодеплой; давать всем один URL: **`https://meotida-it.vercel.app`** — домен проекта meotida-2; `meotida-2.vercel.app` в РФ без VPN не открывается, IP Vercel фильтруются). Локально: открыть `index.html`. Историю версий читать в `README.md` (раздел «Что нового»).

## Команды на сервере (проверенные; писать владелице блоком `# 1. …`, см. CLAUDE.md п. 7)

Сервер: root@8314715-nw871204 (Timeweb). Здесь фиксируем реальные пути репозитория, имя службы, пользователя, логи и команды деплоя/диагностики этого проекта. Вносить только то, что подтверждено успешным выводом или взято из `deploy/`; на каждый новый путь или команду, которые оказались верными, — сразу запись сюда. Секреты не записывать.

Этот репозиторий на сервер не выкладывается: это офлайн HTML-приложение (`index.html`); рекомендованная раздача — Vercel (`vercel.json`). Команд для сервера пока нет. Как только появится деплой или служба — сразу записать сюда блоком в формате:

```bash
# 1. Забрать код
cd /opt/<репозиторий> && git pull
# 2. Перезапуск и проверка
systemctl restart <служба>
systemctl status <служба> --no-pager
journalctl -u <служба> -n 50 --no-pager
```

(имена в `<…>` подставить реальными при первой записи; в ответах владелице плейсхолдеры не оставлять).

### Раздача с сервера Timeweb: `https://meotida.salamashkina.ru/<путь>/` (запущен на сервере 2026-10-01, ПРОВЕРЕНО: все пути отвечают 200, сертификат выпущен)
Зачем: Vercel часто недоступен из-за РКН. Решение владелицы: ОДИН адрес `meotida.salamashkina.ru`, приложения — по путям; **корень `/` не трогать** (владелица ещё будет что-то туда добавлять). Схема: nginx, один сертификат Let's Encrypt (certbot, HTTP-01, автопродление — таймер certbot), приложения — отдельные `location` в `/etc/nginx/snippets/meotida-apps.conf`, файлы в `/var/www/apps/<путь>/index.html`, корень сайта `/var/www/meotida` (пустой). Если для этого адреса в nginx уже есть свой `server{}`, скрипт его не меняет и просит добавить одну строку `include /etc/nginx/snippets/meotida-apps.conf;`. Скрипт `deploy/publish-sites.sh` (в этом репозитории) безопасно перезапускается: ставит nginx/certbot, если нет; не трогает порты 80/443, если их занял не nginx; клонирует репозитории в `/opt/sites-src/<репо>` (`new-test` — из существующего `/root/new-test`); сертификат выпускает только если DNS адреса указывает на этот сервер. Конфиг проверен локально реальным nginx 1.24 (корень, редирект `/путь` → `/путь/`, 404).

| Адрес | Репозиторий | Приложение |
|---|---|---|
| `meotida.salamashkina.ru/zayavka/` | `meotida_2` | «Заявка в IT отдел» (актуальная) |
| `meotida.salamashkina.ru/zayavka-old/` | `meotida` | то же, v0.29 (предшественник) |
| `meotida.salamashkina.ru/markirovka/` | `meotida_3` | «Маркировочный стол» |
| `meotida.salamashkina.ru/shk/` | `meotida-shk` | «Генератор ШК GS1-128» |
| `meotida.salamashkina.ru/pisma/` | `new-test` | каталог писем IT-поддержки |

Новое приложение = строка в массиве `SITES` скрипта + повторный запуск. DNS (панель Timeweb Cloud → `salamashkina.ru` → DNS): есть одна запись `A meotida` → `186.246.27.248` (TTL 600) — этого достаточно, других записей не нужно (нужно подтвердить, что это IP сервера `8314715-nw871204`: скрипт сам сверяет с `curl api.ipify.org`). Учесть: localStorage привязан к адресу и пути — «Сохранённые сессии» на новом адресе пустые. 
**Проверенные команды** (вывод владелицы 2026-10-01, сервер `8314715-nw871204`, root):

```bash
# 1. Скачать скрипт публикации
curl -fsSL https://raw.githubusercontent.com/Salamashko/meotida_2/claude/hopeful-pascal-of0uxl/deploy/publish-sites.sh -o /root/publish-sites.sh   # ожидается: файл /root/publish-sites.sh
# 2. Запустить: код, конфиг nginx, сертификат, проверка
bash /root/publish-sites.sh   # ожидается: в конце https://meotida.salamashkina.ru/<путь>/ → 200, корень → 403
# 3. Проверить сертификат
certbot certificates | grep -E "Domains|Expiry"
# 4. Проверить одно приложение
curl -sI https://meotida.salamashkina.ru/markirovka/ | head -3   # ожидается: HTTP/1.1 200 OK
```
Повторный запуск шага 2 подтягивает свежий `main` всех репозиториев и копирует `index.html` заново (конфиг и сертификат не трогает) — повторный запуск после первого ещё не проверялся.

## Версии и факты сервера
- IP сервера `186.246.27.248` совпадает с DNS-записью `A meotida.salamashkina.ru` (скрипт сверил по `api.ipify.org`).
- Веб-сервер: nginx 1.18.0 (Ubuntu). certbot — snap, автопродление: таймер `snap.certbot.renew.timer`. На сервере уже были сертификаты Let's Encrypt для других сайтов (14 штук в `certbot certificates`) — на сервере живут и другие проекты; их конфиги не трогали.
- Сертификат `meotida.salamashkina.ru`: выпущен 2026-10-01, срок до 2026-12-30, путь `/etc/letsencrypt/live/meotida.salamashkina.ru/`; certbot сам добавил редирект http → https в `/etc/nginx/conf.d/meotida.salamashkina.ru.conf`.
- Файлы: код приложений — `/opt/sites-src/<репозиторий>` (для `new-test` — `/root/new-test`, подтянут до `7c8abfe`), опубликованные страницы — `/var/www/apps/<путь>/index.html`, сниппет `/etc/nginx/snippets/meotida-apps.conf`, пустой корень сайта `/var/www/meotida`, скрипт — `/root/publish-sites.sh`.
- Размеры: `/zayavka/` 4008206 Б, `/zayavka-old/` 3775163 Б, `/markirovka/` 3945284 Б, `/shk/` 31686 Б, `/pisma/` 797800 Б.
- Корень `https://meotida.salamashkina.ru/` отвечает 403 (пустая папка) — так и задумано, владелица наполнит позже.
- Скрипт скачивается с ветки `claude/hopeful-pascal-of0uxl`, а не с `main` (PR не создавался); пока ветку не влили в `main`, ссылку менять нельзя.
