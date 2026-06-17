Labelled native dropdown — used for program, problem type, and yes/no answers. Native `<select>` on purpose, for reliability on locked-down machines.

```jsx
<Select label="В какой программе проблема" required
  placeholder="Выберите программу"
  options={["1С8 Бухгалтерия", "Касса / ФН / ОФД", "ЭДО / Диадок", "Другое"]} />
```

`options` accepts plain strings or `{value, label}` objects. Pass `placeholder` for an empty first row. For free-text-with-suggestions (city/org) the app uses a custom combo box; this is the plain dropdown.
