import React from "react";

/**
 * Миллениум surface card — white panel, 1px hairline border, large 22px radius,
 * soft floating shadow. The primary content container across the app.
 */
export function Card({ children, soft = false, style = {}, ...rest }) {
  return (
    <div
      style={{
        background: soft ? "#f8fbfc" : "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow)",
        padding: "var(--space-6)",
        minWidth: 0,
        maxWidth: "100%",
        overflowWrap: "anywhere",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
