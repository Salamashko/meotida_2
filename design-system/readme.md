# Миллениум Design System

Design system for **ГК «Миллениум»** (Millennium Group of Companies) — extracted
from the group's internal browser tool **«Заявка в IT отдел»** ("IT Department
Request"), an autonomous single-file HTML application that helps employees across
18 affiliated companies file correct, well-structured IT support requests and find
matching Wiki instructions.

This system captures that tool's visual language so any new ГК Миллениум interface,
mock, or document can be built on-brand.

## Company & product context

ГК «Миллениум» is a multi-company commercial group operating across Russia, the CIS,
and neighbouring markets. The member companies served by this tool are:
**СЛК, BASTION IMPORT, ГелиосПлюс, Глобус, Диалог, ДТФ, ИТК, Карамат Торг, Кварц,
Лига, Меотида, Миллениум Регионы, Миллениум-Элиста, Партнер, Сатурн, Северная
оптовая компания, Сигма, ТК Континент.**

The flagship surface is a **utility-first internal tool**, not a marketing site:
its job is to take a stressed, non-technical employee with a broken cash register or
a stuck document and get them to a correct IT email in a minute. Everything about the
brand follows from that: high contrast, large touch targets, plain Russian, generous
help text, full accessibility (dark theme, high-contrast theme, large-font mode, and
a pared-back "Simple mode" with a pastel palette).

It runs fully offline — no server, no API keys, no fonts to download — so the
foundations deliberately use platform fonts and self-contained CSS variables.

### Sources used to build this system
- **GitHub:** <https://github.com/Salamashko/meotida_2> — the production tool. The
  `:root` palette, component CSS, copy, logo (embedded base64), and the
  city/org/program/problem data all come from its `index.html`. Explore this repo
  to recreate any screen with higher fidelity.
- Related repos by the same author you can explore for more product context:
  <https://github.com/Salamashko/meotida>, <https://github.com/Salamashko/SmolovaSite>.

---

## Content fundamentals

How ГК Миллениум writes UI copy:

- **Language:** Russian throughout. No English except product names (ЭДО, ОФД, 1С,
  Wiki) and tech terms that have no common Russian form.
- **Address form:** the user is addressed with formal **«вы»** (lowercase, mid-text),
  warm and respectful, never condescending. Instruction blocks are explicitly framed
  **«Для пользователя:»** vs **«IT:»** so each audience knows what's for them.
- **Tone:** plain, reassuring, hand-holding. Reduces anxiety. Examples (verbatim):
  - «Помогает собрать нормальное письмо: с темой, описанием, файлами и подсказками.»
  - «Если не знаете точное название города, начните писать первые буквы — приложение подскажет.»
  - «Приложение само ничего не отправляет.» (sets expectations, removes fear)
  - «Сначала загляните сюда 👇» (gentle nudge, not a command)
- **Casing:** sentence case everywhere. Headings are numbered steps
  («1. Кто пишет заявку», «2. Что случилось», «3. Файлы и скриншоты»). Buttons are
  imperative verbs («Сформировать письмо», «Скопировать тему», «Открыть в почте»).
- **Required fields** are marked with a bold red asterisk `*`; errors name the exact
  empty field rather than a generic «заполните форму».
- **Emoji:** used, but sparingly and functionally — as wayfinding/status icons, not
  decoration. 🔒 (works locally), 🌙 (dark theme), 🔴🟠🟢 (urgency), 📋 (copy),
  📧 (mail), 👇 (look here), 🔧 (IT section), ✓ (done). Never emoji as bullet lists.
- **Microcopy does the teaching:** hints under fields, ⓘ explainer tooltips on jargon
  («Юрлицо — официальное название организации…»), and inline «Не знаю / пропустить»
  shortcuts on optional fields.

---

## Visual foundations

- **Palette:** a calm, clinical **teal-blue** is the signature accent
  (`--accent #0086bb`, hover `--accent-dark #006e99`) over cool near-white surfaces
  (`--bg #f3f8fa`, cards pure `#ffffff`). Ink is a desaturated near-black
  (`--text #17242a`); secondary text is slate (`--muted #60717a`); hairlines are a
  soft blue-grey (`--line #c7d9e0`). The logo adds **red `#d8232a`** and
  **yellow `#f2c511`** but these are reserved for the mark itself.
- **Status colors:** red `#b91c1c`, green `#15803d`, amber ink `#b45309` — each paired
  with a very pale soft fill (`--red-soft`, `--green-soft`, `--yellow`) for banners.
- **Backgrounds:** no photography, no illustration. The page wears a subtle two-layer
  wash — a faint teal radial glow from the top-left corner over a near-white vertical
  gradient. Surfaces are flat white. Hero CTAs and a few accent banners use **diagonal
  135° gradients** (orange→red for "open in mail", blue for "copy all", green for
  download/save); these are the only gradients in the system.
- **Type:** platform **Arial / Helvetica** sans for everything; **system monospace**
  for the generated email/result blocks (rendered light-on-dark slate `#0f172a`).
  Headings tighten tracking (h1 `-.03em`, h2/h3 `-.02em`); labels and buttons are
  heavy (800). Title is fluid `clamp(26–46px)`. Base body 16px (17px+ in Simple mode,
  user-scalable via the large-font toggle).
- **Spacing & shape:** roomy. Corner radii are large and friendly — controls 14px,
  cards 22px, the header shell 30px, pills/chips fully round (999px). Spacing clusters
  on 8 / 12 / 14 / 20 / 26 px. Controls are tall (≥42px; ≥48px Simple; 66px hero CTA).
- **Cards:** white surface, 1px `--line` border, 22px radius, and a soft far-throw
  shadow `0 18px 50px rgba(15,23,42,.10)`. No heavy borders, no left-accent stripes.
- **Borders & shadows:** hairline 1px borders everywhere; shadows are large, soft,
  low-opacity floats (never hard drop shadows). High-contrast theme removes all
  shadows and switches to 2px solid black borders.
- **Buttons:** solid accent fill, white text, 14px radius, weight 800. Hover lifts
  1px (`translateY(-1px)`) and adds a colored glow; disabled drops to 45% opacity;
  a "clicked/done" state flips to green with a ✓. Secondary = pale blue tint, Ghost =
  grey, Danger = red-soft.
- **Inputs:** white, 1px `#cbd5e1` border, 14px radius; focus turns the border to
  accent and adds a 4px translucent accent ring. City/legal-entity use a **custom
  combo box** (visible ▾ caret, highlighted frequent options starred at the top).
- **Focus & accessibility:** keyboard focus is a 3px **amber** outline app-wide.
  Four runtime modes re-map the tokens via body classes: `theme-dark`,
  `theme-contrast`, `mode-simple` (pastel sage `#7fae9e`, larger type), and the
  violet mode-switch accent `#7c3aed`. A separate **"Champagne & graphite"** palette
  (gold `#b08d57` on `#f7f1e8`) skins the IT-admin Wiki section.
- **Motion:** restrained and quick. Buttons transition `.15s`. A small `popIn`
  (scale .96→1) for toasts/success banners, a `wizFadeIn` (6px rise) per wizard step,
  a gentle looping arrow on the screenshot hint. All gated behind
  `prefers-reduced-motion`. No parallax, no big entrance animations.
- **Transparency/blur:** minimal. A `--glass` translucent surface token exists but the
  system favours solid fills; toasts and modal scrims use simple rgba overlays.

---

## Iconography

- **No icon font, no SVG icon set, no PNG icon sprite** ships in the product — and the
  system intentionally keeps it that way for offline reliability.
- Icons are **emoji and Unicode glyphs** used functionally as status/wayfinding marks:
  🔒 🌙 ◐ А+ ↩ 🖨 (toolbar), 🔴 🟠 🟢 (urgency), 📋 📧 💾 (actions), 👇 ⚠️ 📎 🏙 (section
  cues), ✓ (success), ▾ ▸ ▾ (carets/disclosure), ★ (pinned/frequent), ⓘ (explainer).
- The only raster brand asset is the **logo** (`assets/logo-millenium.png`) — the
  red/yellow mountain "М" with the «группа компаний МИЛЛЕНИУМ» wordmark. Always sit it
  on a white rounded plate (16px radius, ~7px padding, hairline border).
- **When building new screens:** match this — prefer a clean Unicode glyph or emoji
  used sparingly as a label cue. If a richer icon is genuinely needed, a CDN line-icon
  set (e.g. Lucide/Heroicons at ~1.75px stroke) is the closest substitute — **flag any
  such addition as a substitution**, since it is not in the source product.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import-only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `themes.css`, `base.css`.
- `assets/logo-millenium.png` — the group logo.
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

**Components** (`window.DesignSystem_56ba0f.*`)
- `components/core/` — `Button`, `Card`, `Pill`, `Badge`
- `components/forms/` — `TextField`, `Select`, `UrgencyPicker`
- `components/feedback/` — `Banner`, `ProgressBar`, `Toast`

**UI kits**
- `ui_kits/it-request/` — interactive recreation of «Заявка в IT отдел»
  (`index.html` + `Header.jsx`, `RequestForm.jsx`, `ResultView.jsx`, `WikiSearch.jsx`).

**Foundation cards** (Design System tab) — `guidelines/*.html`, grouped Colors / Type
/ Spacing / Brand.

---

*Built from the production source at github.com/Salamashko/meotida_2. The tool itself
was developed by Виктория Саламашко.*
