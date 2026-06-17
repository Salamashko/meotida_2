import React from "react";

/**
 * Миллениум labelled select. Same control shell as TextField; native <select>
 * for reliability on locked-down corporate browsers.
 */
export function Select({
  label,
  required = false,
  hint = null,
  options = [],
  value,
  onChange,
  id,
  placeholder,
  style = {},
  ...rest
}) {
  return (
    <div style={style}>
      {label && (
        <label
          htmlFor={id}
          style={{
            display: "block",
            margin: "15px 0 7px",
            fontWeight: "var(--fw-bold)",
            fontSize: "var(--fs-label)",
          }}
        >
          {label}{" "}
          {required && <span style={{ color: "var(--red)", fontWeight: 900 }}>*</span>}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.boxShadow = "0 0 0 4px var(--focus-ring)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "#cbd5e1";
          e.currentTarget.style.boxShadow = "none";
        }}
        style={{
          width: "100%",
          border: "1px solid #cbd5e1",
          borderRadius: "var(--radius-control)",
          padding: "12px 13px",
          font: "inherit",
          background: "#fff",
          color: "var(--text)",
          outline: "none",
        }}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => {
          const val = typeof o === "string" ? o : o.value;
          const lbl = typeof o === "string" ? o : o.label;
          return (
            <option key={val} value={val}>
              {lbl}
            </option>
          );
        })}
      </select>
      {hint && (
        <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.45, margin: "8px 0 0" }}>
          {hint}
        </p>
      )}
    </div>
  );
}
