Segmented radio chips for picking request urgency (P1/P2/P3). Selected chip gets the accent border + pale-blue fill.

```jsx
const [u, setU] = React.useState("P2");
<UrgencyPicker value={u} onChange={setU} />
```

Defaults to the app's three levels (🔴 Не работает / 🟠 Мешает / 🟢 Вопрос). Pass a custom `levels` array of `{value, label, dot}` to repurpose it for any small single-choice set.
