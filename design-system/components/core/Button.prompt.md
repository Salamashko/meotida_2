Primary call-to-action button for Миллениум interfaces — bold label, 14px radius, lifts on hover. Use for any clickable action; reach for the gradient variants only for the page's single most important CTA.

```jsx
<Button variant="primary" icon="✉️" onClick={send}>Сформировать письмо</Button>
<Button variant="secondary">Скопировать тему</Button>
<Button variant="ghost">Очистить файлы</Button>
<Button variant="mail" size="lg">Открыть в почте</Button>
```

Variants: `primary` (accent fill, default), `secondary` (pale blue), `ghost` (grey), `danger` (red-soft), and the hero gradients `mail` (orange→red), `copyAll` (blue), `zip` (green). Sizes: `md` (42px, default), `lg` (66px hero). Pass `icon` for a leading glyph and `disabled` to dim + block.
