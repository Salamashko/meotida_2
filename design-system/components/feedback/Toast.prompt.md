Transient bottom-right notification — dark slate card with a colored left accent bar. Replaces `alert()` across the app.

```jsx
<Toast tone="ok">Тема письма скопирована</Toast>
<Toast tone="err">Заполните город</Toast>
<Toast tone="info">Черновик сохранён</Toast>
```

Tones: `ok` (green), `err` (red), `info` (sky). In a real app, stack these fixed at bottom-right and auto-dismiss; this renders one toast card.
