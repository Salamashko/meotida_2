import React from "react";

/**
 * Миллениум pill — a small rounded-capsule chip used for header metadata
 * (version, copyright, "works locally" status). Outlined by default;
 * the `tone` prop tints it like the local-status badge.
 */
export function Pill({ children, tone = "default", icon = null, style = {}, ...rest }) {
  const tones = {
    default: { background: "#fff", color: "var(--muted)", border: "1px solid var(--line)" },
    ok: { background: "var(--green-soft)", color: "var(--green)", border: "1px solid #bbf7d0" },
    warn: { background: "var(--yellow)", color: "var(--orange)", border: "1px solid #fed7aa" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "8px 11px",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        fontSize: 13,
        fontWeight: tone === "default" ? 400 : "var(--fw-bold)",
        ...(tones[tone] || tones.default),
        ...style,
      }}
      {...rest}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
