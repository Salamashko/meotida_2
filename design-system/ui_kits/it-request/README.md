# UI Kit — Заявка в IT отдел (IT Request Builder)

Interactive recreation of ГК Миллениум's single-file internal tool that helps
non-technical staff compose a correct IT support email: pick city → legal entity
→ program → problem, set urgency, attach screenshots, and get a ready-made subject
line + body, plus matched Wiki instructions.

## Screens / parts
- **`Header.jsx`** — brand plate + title, metadata pills, the display toolbar
  (Simple/Pro mode switch, dark theme, font, "like last time", print), completion
  progress bar, and the tab row.
- **`RequestForm.jsx`** — the three-card wizard (1. who is writing → custom
  city/org combo boxes + program select; 2. what happened → problem select +
  urgency picker + description; 3. files → paste/drop zone). Composes `Card`,
  `Banner`, `Select`, `TextField`, `UrgencyPicker`, `Button`.
- **`ResultView.jsx`** — generated subject (`Город · Юрлицо · Программа — суть
  [КАТЕГОРИЯ][P2]`), the dark mono body block, copy actions, and matched instructions.
- **`WikiSearch.jsx`** — keyword search, quick chips, instruction result cards with
  public/internal badges.

## Interaction
`index.html` holds the app state and wires it together: filling required fields
advances the progress bar; "Сформировать письмо" jumps to the result tab and renders
the live subject/body; the dark-theme and Simple/Pro toggles re-skin the whole shell
via the `theme-dark` / `mode-simple` token scopes.

## Source
Recreated from the real app code: `index.html` in
<https://github.com/Salamashko/meotida_2> (the production tool is one autonomous
HTML file; colors, layout, copy, and the city/org/program/problem data were lifted
from its `:root` palette and embedded `APP` config). Functional shortcuts: file
upload, draft autosave, and the password-gated IT/Wiki-update tab are omitted; the
Wiki search returns a small fixed sample instead of the full 539-record base.
