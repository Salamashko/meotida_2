import React from "react";

/**
 * Миллениум badge — taxonomy label on list items (Wiki instructions etc).
 * Three semantic tones from the app: public (green), internal (amber),
 * candidate (indigo).
 */
export function Badge({ children, tone = "public", style = {}, ...rest }) {
  const tones = {
    public: { background: "var(--green-soft)", color: "var(--green)", border: "1px solid #bbf7d0" },
    internal: { background: "var(--yellow)", color: "var(--orange)", border: "1px solid #fed7aa" },
    candidate: { background: "#eef2ff", color: "#4338ca", border: "1px solid #c7d2fe" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        borderRadius: "var(--radius-pill)",
        padding: "5px 9px",
        fontSize: 12,
        fontWeight: "var(--fw-bold)",
        whiteSpace: "nowrap",
        ...(tones[tone] || tones.public),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
