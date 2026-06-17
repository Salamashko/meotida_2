import React from "react";

/**
 * Миллениум banner — the colored, rounded notice blocks used throughout the
 * app to invite, warn, or confirm. Tones map to the real banners:
 * info (blue invite), success (green), warning (amber), tip (teal step-help).
 */
export function Banner({ children, tone = "info", title = null, icon = null, style = {} }) {
  const tones = {
    info: {
      background: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
      border: "1px solid #38bdf8",
      color: "#0c4a6e",
    },
    success: {
      background: "var(--green-soft)",
      border: "1px solid #34d399",
      color: "var(--green)",
      boxShadow: "0 10px 24px rgba(16,185,129,.18)",
    },
    warning: {
      background: "var(--yellow)",
      border: "1px solid #fed7aa",
      color: "#8a4b09",
    },
    tip: {
      background: "#eef7fb",
      border: "1px solid #cbe8f4",
      color: "#0f4d68",
    },
  };
  return (
    <div
      style={{
        borderRadius: "var(--radius-soft)",
        padding: "14px 16px",
        lineHeight: 1.5,
        maxWidth: "100%",
        overflowWrap: "anywhere",
        ...(tones[tone] || tones.info),
        ...style,
      }}
    >
      {title && (
        <b style={{ display: "block", fontSize: 16, marginBottom: 4 }}>
          {icon && <span aria-hidden="true">{icon} </span>}
          {title}
        </b>
      )}
      <div style={{ margin: 0 }}>{children}</div>
    </div>
  );
}
