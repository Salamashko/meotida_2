import React from "react";

/**
 * Миллениум progress bar — the form-completion indicator from the request
 * wizard. Green gradient fill on a soft track, with a bold percent caption.
 */
export function ProgressBar({ value = 0, label, style = {} }) {
  const pct = Math.max(0, Math.min(100, value));
  const caption = label != null ? label : `Заполнено ${pct}%`;
  return (
    <div style={style}>
      <div
        style={{
          height: 10,
          background: "var(--soft)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius-pill)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "block",
            height: "100%",
            width: `${pct}%`,
            background: "linear-gradient(90deg,#22c55e,#16a34a)",
            transition: "width .25s",
          }}
        />
      </div>
      <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 5, fontWeight: "var(--fw-strong)" }}>
        {caption}
      </div>
    </div>
  );
}
