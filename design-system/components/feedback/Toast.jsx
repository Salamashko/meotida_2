import React from "react";

/**
 * Миллениум toast — the bottom-right notification from the app. Dark slate
 * card with a colored left accent by tone (ok/err/info) and a pop-in.
 */
export function Toast({ children, tone = "info", style = {} }) {
  const accents = { ok: "#22c55e", err: "#ef4444", info: "#38bdf8" };
  return (
    <div
      role="status"
      style={{
        background: "#0f172a",
        color: "#fff",
        borderRadius: "var(--radius-control)",
        padding: "12px 14px",
        boxShadow: "0 14px 34px rgba(0,0,0,.3)",
        fontWeight: "var(--fw-strong)",
        lineHeight: 1.4,
        borderLeft: `5px solid ${accents[tone] || accents.info}`,
        maxWidth: 360,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
