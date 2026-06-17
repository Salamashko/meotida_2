import React from "react";

/**
 * Миллениум primary action button and its variants.
 * Mirrors the app's button system: bold weight, 14px radius, 42px min height,
 * lift-on-hover. Variants map to the real CSS classes (secondary/ghost/danger),
 * plus the signature gradient CTAs (mail / copy-all / zip).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const base = {
    border: 0,
    borderRadius: "var(--radius-control)",
    fontFamily: "inherit",
    fontWeight: "var(--fw-bold)",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    minHeight: size === "lg" ? "var(--control-min-h-hero)" : "var(--control-min-h)",
    padding: size === "lg" ? "16px 22px" : "11px 14px",
    fontSize: size === "lg" ? 19 : "inherit",
    lineHeight: 1.3,
    textDecoration: "none",
    transition: "var(--dur-fast)",
    opacity: disabled ? 0.45 : 1,
  };

  const variants = {
    primary: { background: "var(--accent)", color: "#fff" },
    secondary: { background: "#eef7fb", color: "#075985", border: "1px solid #cbe8f4" },
    ghost: { background: "#f1f5f9", color: "#334155", border: "1px solid #e2e8f0" },
    danger: { background: "var(--red-soft)", color: "var(--red)", border: "1px solid #fecdd3" },
    mail: {
      background: "linear-gradient(135deg,#f97316,#dc2626)",
      color: "#fff",
      border: "1px solid #fb923c",
      boxShadow: "0 14px 28px rgba(249,115,22,.26)",
      fontWeight: "var(--fw-bold)",
    },
    copyAll: {
      background: "linear-gradient(135deg,#2563eb,#0086bb)",
      color: "#fff",
      border: "1px solid #3b82f6",
      boxShadow: "0 14px 28px rgba(37,99,235,.26)",
      borderRadius: "var(--radius-soft)",
    },
    zip: {
      background: "linear-gradient(135deg,#16a34a,#059669)",
      color: "#fff",
      border: "1px solid #22c55e",
      boxShadow: "0 4px 14px rgba(22,163,74,.25)",
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "translateY(-1px)";
        if (variant === "primary")
          e.currentTarget.style.boxShadow = "var(--shadow-accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        if (variant === "primary") e.currentTarget.style.boxShadow = "none";
      }}
      {...rest}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </button>
  );
}
