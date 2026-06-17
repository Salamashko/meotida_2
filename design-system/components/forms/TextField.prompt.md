Labelled text input (or textarea) — the workhorse form control. Bold label, optional required asterisk, accent focus ring, muted hint line.

```jsx
<TextField label="ФИО и должность" placeholder="Иванов И.И., бухгалтер" />
<TextField label="Описание проблемы" required multiline
  hint="Что именно не работает? Приложите скрин, если можете." />
```

Pass `required` for the red asterisk, `hint` for help text, `multiline` for a textarea. Pair with `Select` for dropdowns.
