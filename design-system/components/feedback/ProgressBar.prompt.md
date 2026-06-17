Form-completion indicator — green gradient fill on a soft track, with a bold percent caption. Sits under the header in the request wizard.

```jsx
<ProgressBar value={60} />
<ProgressBar value={100} label="Готово к отправке ✓" />
```

`value` is 0–100. Defaults the caption to "Заполнено N%"; pass `label` to override.
