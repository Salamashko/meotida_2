---
name: millenium-design
description: Use this skill to generate well-branded interfaces and assets for ГК «Миллениум» (Millennium Group), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — full brand guide: company context, content fundamentals (tone, casing, «вы», emoji use), visual foundations (color, type, spacing, motion), and iconography. Read this first.
- `styles.css` — link this one file to inherit every token. It `@import`s `tokens/*.css` (colors, typography, spacing, themes, base reset).
- `tokens/` — CSS custom properties. Base palette on `:root`; runtime modes (`theme-dark`, `theme-contrast`, `mode-simple`) are class scopes you toggle on `<body>`.
- `components/` — React primitives (Button, Card, Pill, Badge, TextField, Select, UrgencyPicker, Banner, ProgressBar, Toast). Each has a `.prompt.md` with usage.
- `ui_kits/it-request/` — full interactive recreation of the flagship «Заявка в IT отдел» tool; the reference for composing a real screen.
- `assets/logo-millenium.png` — the group logo (white rounded plate).

## Essentials
- Russian UI copy, formal «вы», plain and reassuring tone. Sentence case. Imperative verb buttons. Numbered step headings.
- Signature accent teal-blue `#0086bb` on cool near-white surfaces; flat white cards with 22px radius and soft far-throw shadows; 14px-radius controls; bold (800) labels/buttons.
- Platform Arial/Helvetica sans + system monospace (offline-first — no webfonts). Large touch targets, full accessibility.
- Emoji only as functional status/wayfinding glyphs, never decoration. No icon font/SVG set in the product.
