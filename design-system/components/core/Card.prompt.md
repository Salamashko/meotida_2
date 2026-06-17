The standard content container — white surface, hairline border, 22px radius, soft floating shadow. Wrap any logical section of a screen in one.

```jsx
<Card>
  <h2>1. Кто пишет заявку</h2>
  {/* fields… */}
</Card>
<Card soft>Вторичный блок</Card>
```

Pass `soft` for a tinted nested panel. Cards stack with their own bottom margin in the app (18px); add `style={{ marginBottom: 18 }}` when stacking.
