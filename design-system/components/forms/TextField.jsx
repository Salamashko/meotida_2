import React from "react";

/**
 * Миллениум labelled text field. Bold label, optional required asterisk,
 * rounded 14px control, accent focus ring, and a muted hint line.
 * Renders a <textarea> when multiline.
 */
export function TextField({
  label,
  required = false,
  hint = null,
  multiline = false,
  value,
  onChange,
  placeholder = "",
  id,
  style = {},
  ...rest
}) {
  const control = {
    width: "100%",
    border: "1px solid #cbd5e1",
    borderRadius: "var(--radius-control)",
    padding: "12px 13px",
    font: "inherit",
    background: "#fff",
    color: "var(--text)",
    outline: "none",
    ...(multiline ? { minHeight: 105, resize: "vertical", lineHeight: 1.45 } : {}),
  };
  const focus = (e) => {
    e.currentTarget.style.borderColor = "var(--accent)";
    e.currentTarget.style.boxShadow = "0 0 0 4px var(--focus-ring)";
  };
  const blur = (e) => {
    e.currentTarget.style.borderColor = "#cbd5e1";
    e.currentTarget.style.boxShadow = "none";
  };
  const Tag = multiline ? "textarea" : "input";
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
      <Tag
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={focus}
        onBlur={blur}
        style={control}
        {...rest}
      />
      {hint && (
        <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.45, margin: "8px 0 0" }}>
          {hint}
        </p>
      )}
    </div>
  );
}
