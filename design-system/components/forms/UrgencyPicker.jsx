import React from "react";

/**
 * Миллениум urgency picker — the P1/P2/P3 radio row from the request form.
 * Each option is a bordered chip that highlights (accent) when selected.
 */
const DEFAULT_LEVELS = [
  { value: "P1", label: "Не работает совсем", dot: "🔴" },
  { value: "P2", label: "Мешает работать", dot: "🟠" },
  { value: "P3", label: "Вопрос", dot: "🟢" },
];

export function UrgencyPicker({ levels = DEFAULT_LEVELS, value, onChange, name = "urgency", style = {} }) {
  return (
    <div
      role="radiogroup"
      aria-label="Срочность"
      style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6, ...style }}
    >
      {levels.map((lvl) => {
        const on = value === lvl.value;
        return (
          <label
            key={lvl.value}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              margin: 0,
              border: `1px solid ${on ? "var(--accent)" : "var(--line)"}`,
              borderRadius: "var(--radius-control)",
              padding: "9px 12px",
              cursor: "pointer",
              fontWeight: "var(--fw-strong)",
              background: on ? "#eef7fb" : "var(--card)",
              color: on ? "var(--accent-dark)" : "var(--text)",
            }}
          >
            <input
              type="radio"
              name={name}
              value={lvl.value}
              checked={on}
              onChange={() => onChange && onChange(lvl.value)}
              style={{ width: "auto", margin: 0 }}
            />
            <span aria-hidden="true">{lvl.dot}</span> {lvl.label}
          </label>
        );
      })}
    </div>
  );
}
