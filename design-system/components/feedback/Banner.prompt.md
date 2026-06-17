Colored inline notice block — the app uses these constantly to invite the user, warn about a quirk, or confirm a copy/save. Soft gradient/tint fill, rounded 16px.

```jsx
<Banner tone="info" icon="👇" title="Сначала загляните сюда">
  Возможно, проблема решается готовой инструкцией без обращения в IT.
</Banner>
<Banner tone="success">Готово — заявка скопирована.</Banner>
<Banner tone="warning">Приложение само ничего не отправляет.</Banner>
<Banner tone="tip"><b>Для пользователя:</b> сначала заполните город и юрлицо.</Banner>
```

Tones: `info` (blue gradient invite), `success` (green), `warning` (amber), `tip` (teal step-help). `title` renders a bold lead line.
