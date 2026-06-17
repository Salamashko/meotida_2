/* @ds-bundle: {"format":3,"namespace":"DesignSystem_56ba0f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"UrgencyPicker","sourcePath":"components/forms/UrgencyPicker.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"3fc3c21f719e","components/core/Button.jsx":"5be199f623ab","components/core/Card.jsx":"4e95658b7268","components/core/Pill.jsx":"bdb9c78423e2","components/feedback/Banner.jsx":"d31e7544b647","components/feedback/ProgressBar.jsx":"a2341f53ffa0","components/feedback/Toast.jsx":"82b3034188ca","components/forms/Select.jsx":"2da679315cb2","components/forms/TextField.jsx":"166f1bb26365","components/forms/UrgencyPicker.jsx":"4fd6197367c5","ui_kits/it-request/Header.jsx":"6e7f11e42ed6","ui_kits/it-request/RequestForm.jsx":"467cbca29a37","ui_kits/it-request/ResultView.jsx":"4199900ab708","ui_kits/it-request/WikiSearch.jsx":"70a003d7e853"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_56ba0f = window.DesignSystem_56ba0f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Миллениум badge — taxonomy label on list items (Wiki instructions etc).
 * Three semantic tones from the app: public (green), internal (amber),
 * candidate (indigo).
 */
function Badge({
  children,
  tone = "public",
  style = {},
  ...rest
}) {
  const tones = {
    public: {
      background: "var(--green-soft)",
      color: "var(--green)",
      border: "1px solid #bbf7d0"
    },
    internal: {
      background: "var(--yellow)",
      color: "var(--orange)",
      border: "1px solid #fed7aa"
    },
    candidate: {
      background: "#eef2ff",
      color: "#4338ca",
      border: "1px solid #c7d2fe"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      borderRadius: "var(--radius-pill)",
      padding: "5px 9px",
      fontSize: 12,
      fontWeight: "var(--fw-bold)",
      whiteSpace: "nowrap",
      ...(tones[tone] || tones.public),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Миллениум primary action button and its variants.
 * Mirrors the app's button system: bold weight, 14px radius, 42px min height,
 * lift-on-hover. Variants map to the real CSS classes (secondary/ghost/danger),
 * plus the signature gradient CTAs (mail / copy-all / zip).
 */
function Button({
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
    opacity: disabled ? 0.45 : 1
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "#fff"
    },
    secondary: {
      background: "#eef7fb",
      color: "#075985",
      border: "1px solid #cbe8f4"
    },
    ghost: {
      background: "#f1f5f9",
      color: "#334155",
      border: "1px solid #e2e8f0"
    },
    danger: {
      background: "var(--red-soft)",
      color: "var(--red)",
      border: "1px solid #fecdd3"
    },
    mail: {
      background: "linear-gradient(135deg,#f97316,#dc2626)",
      color: "#fff",
      border: "1px solid #fb923c",
      boxShadow: "0 14px 28px rgba(249,115,22,.26)",
      fontWeight: "var(--fw-bold)"
    },
    copyAll: {
      background: "linear-gradient(135deg,#2563eb,#0086bb)",
      color: "#fff",
      border: "1px solid #3b82f6",
      boxShadow: "0 14px 28px rgba(37,99,235,.26)",
      borderRadius: "var(--radius-soft)"
    },
    zip: {
      background: "linear-gradient(135deg,#16a34a,#059669)",
      color: "#fff",
      border: "1px solid #22c55e",
      boxShadow: "0 4px 14px rgba(22,163,74,.25)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "translateY(-1px)";
      if (variant === "primary") e.currentTarget.style.boxShadow = "var(--shadow-accent)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      if (variant === "primary") e.currentTarget.style.boxShadow = "none";
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Миллениум surface card — white panel, 1px hairline border, large 22px radius,
 * soft floating shadow. The primary content container across the app.
 */
function Card({
  children,
  soft = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: soft ? "#f8fbfc" : "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow)",
      padding: "var(--space-6)",
      minWidth: 0,
      maxWidth: "100%",
      overflowWrap: "anywhere",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Миллениум pill — a small rounded-capsule chip used for header metadata
 * (version, copyright, "works locally" status). Outlined by default;
 * the `tone` prop tints it like the local-status badge.
 */
function Pill({
  children,
  tone = "default",
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      background: "#fff",
      color: "var(--muted)",
      border: "1px solid var(--line)"
    },
    ok: {
      background: "var(--green-soft)",
      color: "var(--green)",
      border: "1px solid #bbf7d0"
    },
    warn: {
      background: "var(--yellow)",
      color: "var(--orange)",
      border: "1px solid #fed7aa"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 11px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      fontSize: 13,
      fontWeight: tone === "default" ? 400 : "var(--fw-bold)",
      ...(tones[tone] || tones.default),
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
/**
 * Миллениум banner — the colored, rounded notice blocks used throughout the
 * app to invite, warn, or confirm. Tones map to the real banners:
 * info (blue invite), success (green), warning (amber), tip (teal step-help).
 */
function Banner({
  children,
  tone = "info",
  title = null,
  icon = null,
  style = {}
}) {
  const tones = {
    info: {
      background: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
      border: "1px solid #38bdf8",
      color: "#0c4a6e"
    },
    success: {
      background: "var(--green-soft)",
      border: "1px solid #34d399",
      color: "var(--green)",
      boxShadow: "0 10px 24px rgba(16,185,129,.18)"
    },
    warning: {
      background: "var(--yellow)",
      border: "1px solid #fed7aa",
      color: "#8a4b09"
    },
    tip: {
      background: "#eef7fb",
      border: "1px solid #cbe8f4",
      color: "#0f4d68"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-soft)",
      padding: "14px 16px",
      lineHeight: 1.5,
      maxWidth: "100%",
      overflowWrap: "anywhere",
      ...(tones[tone] || tones.info),
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      fontSize: 16,
      marginBottom: 4
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon, " "), title), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/**
 * Миллениум progress bar — the form-completion indicator from the request
 * wizard. Green gradient fill on a soft track, with a bold percent caption.
 */
function ProgressBar({
  value = 0,
  label,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value));
  const caption = label != null ? label : `Заполнено ${pct}%`;
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: "var(--soft)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "block",
      height: "100%",
      width: `${pct}%`,
      background: "linear-gradient(90deg,#22c55e,#16a34a)",
      transition: "width .25s"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--muted)",
      marginTop: 5,
      fontWeight: "var(--fw-strong)"
    }
  }, caption));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Миллениум toast — the bottom-right notification from the app. Dark slate
 * card with a colored left accent by tone (ok/err/info) and a pop-in.
 */
function Toast({
  children,
  tone = "info",
  style = {}
}) {
  const accents = {
    ok: "#22c55e",
    err: "#ef4444",
    info: "#38bdf8"
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      background: "#0f172a",
      color: "#fff",
      borderRadius: "var(--radius-control)",
      padding: "12px 14px",
      boxShadow: "0 14px 34px rgba(0,0,0,.3)",
      fontWeight: "var(--fw-strong)",
      lineHeight: 1.4,
      borderLeft: `5px solid ${accents[tone] || accents.info}`,
      maxWidth: 360,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Миллениум labelled select. Same control shell as TextField; native <select>
 * for reliability on locked-down corporate browsers.
 */
function Select({
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
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "block",
      margin: "15px 0 7px",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)"
    }
  }, label, " ", required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)",
      fontWeight: 900
    }
  }, "*")), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    onChange: onChange,
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--accent)";
      e.currentTarget.style.boxShadow = "0 0 0 4px var(--focus-ring)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "#cbd5e1";
      e.currentTarget.style.boxShadow = "none";
    },
    style: {
      width: "100%",
      border: "1px solid #cbd5e1",
      borderRadius: "var(--radius-control)",
      padding: "12px 13px",
      font: "inherit",
      background: "#fff",
      color: "var(--text)",
      outline: "none"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lbl = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), hint && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: 13,
      lineHeight: 1.45,
      margin: "8px 0 0"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Миллениум labelled text field. Bold label, optional required asterisk,
 * rounded 14px control, accent focus ring, and a muted hint line.
 * Renders a <textarea> when multiline.
 */
function TextField({
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
    ...(multiline ? {
      minHeight: 105,
      resize: "vertical",
      lineHeight: 1.45
    } : {})
  };
  const focus = e => {
    e.currentTarget.style.borderColor = "var(--accent)";
    e.currentTarget.style.boxShadow = "0 0 0 4px var(--focus-ring)";
  };
  const blur = e => {
    e.currentTarget.style.borderColor = "#cbd5e1";
    e.currentTarget.style.boxShadow = "none";
  };
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "block",
      margin: "15px 0 7px",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)"
    }
  }, label, " ", required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)",
      fontWeight: 900
    }
  }, "*")), /*#__PURE__*/React.createElement(Tag, _extends({
    id: id,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: focus,
    onBlur: blur,
    style: control
  }, rest)), hint && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: 13,
      lineHeight: 1.45,
      margin: "8px 0 0"
    }
  }, hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/UrgencyPicker.jsx
try { (() => {
/**
 * Миллениум urgency picker — the P1/P2/P3 radio row from the request form.
 * Each option is a bordered chip that highlights (accent) when selected.
 */
const DEFAULT_LEVELS = [{
  value: "P1",
  label: "Не работает совсем",
  dot: "🔴"
}, {
  value: "P2",
  label: "Мешает работать",
  dot: "🟠"
}, {
  value: "P3",
  label: "Вопрос",
  dot: "🟢"
}];
function UrgencyPicker({
  levels = DEFAULT_LEVELS,
  value,
  onChange,
  name = "urgency",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": "\u0421\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C",
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 6,
      ...style
    }
  }, levels.map(lvl => {
    const on = value === lvl.value;
    return /*#__PURE__*/React.createElement("label", {
      key: lvl.value,
      style: {
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
        color: on ? "var(--accent-dark)" : "var(--text)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: lvl.value,
      checked: on,
      onChange: () => onChange && onChange(lvl.value),
      style: {
        width: "auto",
        margin: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, lvl.dot), " ", lvl.label);
  }));
}
Object.assign(__ds_scope, { UrgencyPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/UrgencyPicker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/it-request/Header.jsx
try { (() => {
// Header.jsx — Миллениум "Заявка в IT отдел" header shell:
// brand + title, metadata pills, display toolbar (mode/theme), progress, tabs.
const {
  Pill,
  ProgressBar
} = window.DesignSystem_56ba0f;
const TABS = [{
  id: "formTab",
  label: "1. Заполнить заявку"
}, {
  id: "resultTab",
  label: "2. Что получится"
}, {
  id: "wikiTab",
  label: "Поиск инструкций"
}, {
  id: "helpTab",
  label: "Инструкция"
}];
function Toolbar({
  mode,
  setMode,
  theme,
  toggleTheme
}) {
  const tbtn = active => ({
    background: active ? "var(--accent)" : "#eef7fb",
    color: active ? "#fff" : "#075985",
    border: active ? "1px solid var(--accent)" : "1px solid #cbe8f4",
    borderRadius: 12,
    padding: "8px 11px",
    fontWeight: 800,
    fontSize: 13,
    minHeight: 38,
    cursor: "pointer",
    fontFamily: "inherit"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      alignItems: "center",
      borderTop: "1px solid var(--line)",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: "var(--violet-dark)",
      fontSize: 13,
      alignSelf: "center"
    }
  }, "\u0420\u0435\u0436\u0438\u043C:"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      border: "2px solid #a78bfa",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 4px 14px rgba(124,58,237,.18)"
    }
  }, [["simple", "Простой"], ["pro", "Профессиональный"]].map(([m, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => setMode(m),
    style: {
      background: mode === m ? "linear-gradient(135deg,#7c3aed,#6d28d9)" : "#f5f3ff",
      color: mode === m ? "#fff" : "var(--violet-dark)",
      border: 0,
      padding: "9px 16px",
      fontSize: 14,
      fontWeight: 700,
      minHeight: 40,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, lbl))), /*#__PURE__*/React.createElement("button", {
    style: tbtn(theme === "dark"),
    onClick: toggleTheme
  }, "\uD83C\uDF19 \u0422\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430"), /*#__PURE__*/React.createElement("button", {
    style: tbtn(false)
  }, "\u0410+ \u041A\u0440\u0443\u043F\u043D\u044B\u0439 \u0448\u0440\u0438\u0444\u0442"), /*#__PURE__*/React.createElement("button", {
    style: tbtn(false)
  }, "\u21A9 \u041A\u0430\u043A \u0432 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 \u0440\u0430\u0437"), /*#__PURE__*/React.createElement("button", {
    style: tbtn(false)
  }, "\uD83D\uDDA8 \u041F\u0435\u0447\u0430\u0442\u044C"));
}
function Header({
  tab,
  setTab,
  mode,
  setMode,
  theme,
  toggleTheme,
  progress
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: theme === "dark" ? "linear-gradient(135deg,#16233b,#0f1c30)" : "linear-gradient(135deg,#fff,#eef8fc)",
      border: "1px solid var(--line)",
      borderRadius: 30,
      boxShadow: "var(--shadow)",
      padding: 20,
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 15,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-millenium.png",
    alt: "\u0413\u041A \u041C\u0438\u043B\u043B\u0435\u043D\u0438\u0443\u043C",
    style: {
      width: 116,
      height: "auto",
      background: "#fff",
      borderRadius: 16,
      padding: 7,
      border: "1px solid var(--line)",
      boxShadow: "var(--shadow-card)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "clamp(26px,3.2vw,40px)",
      letterSpacing: "-.03em",
      lineHeight: 1.05
    }
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u0432 IT \u043E\u0442\u0434\u0435\u043B"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "7px 0 0",
      color: "var(--muted)",
      lineHeight: 1.45,
      maxWidth: 640
    }
  }, "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E: \u0441 \u0442\u0435\u043C\u043E\u0439, \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C, \u0444\u0430\u0439\u043B\u0430\u043C\u0438 \u0438 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\u043C\u0438. \u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0438\u043A\u0443\u0434\u0430 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u2014 \u0432\u0441\u0451 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Pill, null, "v32 \xB7 \u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u0440\u0435\u0436\u0438\u043C"), /*#__PURE__*/React.createElement(Pill, null, "\xA9 \u0421\u0430\u043B\u0430\u043C\u0430\u0448\u043A\u043E \u0412\u0438\u043A\u0442\u043E\u0440\u0438\u044F"), /*#__PURE__*/React.createElement(Pill, {
    tone: "ok",
    icon: "\uD83D\uDD12"
  }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E"))), /*#__PURE__*/React.createElement(Toolbar, {
    mode: mode,
    setMode: setMode,
    theme: theme,
    toggleTheme: toggleTheme
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: progress
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      borderTop: "1px solid var(--line)",
      paddingTop: 14
    }
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      border: 0,
      borderRadius: 14,
      padding: "11px 14px",
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit",
      minHeight: 42,
      background: tab === t.id ? "var(--accent-dark)" : "var(--accent)",
      color: "#fff"
    }
  }, t.label))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/it-request/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/it-request/RequestForm.jsx
try { (() => {
// RequestForm.jsx — the three-card request wizard (who / what / files).
const {
  Card,
  Banner,
  Button,
  Select,
  TextField,
  UrgencyPicker
} = window.DesignSystem_56ba0f;
const CITIES = ["Казахстан", "Кыргызстан", "Узбекистан", "Москва", "Санкт-Петербург", "Ростов-на-Дону", "Краснодар", "Екатеринбург", "Новосибирск", "Казань", "Самара", "Воронеж", "Сочи", "Элиста"];
const CITY_HL = ["Казахстан", "Кыргызстан", "Узбекистан"];
const ORGS = ["СЛК", "BASTION IMPORT", "ГелиосПлюс", "Глобус", "Диалог", "ДТФ", "ИТК", "Карамат Торг", "Кварц", "Лига", "Меотида", "Миллениум Регионы", "Партнер", "Сатурн", "Сигма", "ТК Континент"];
const ORG_HL = ["СЛК", "BASTION IMPORT"];
const PROGRAMS = ["1С7", "1С8", "1С8 УТ", "1С8 КА", "1С8 Бухгалтерия", "Оптимум / Варм", "Касса / ФН / ОФД", "Честный знак", "ЭДО / Контур.Диадок / Такском", "СБИС / Росстат", "ЭЦП", "МЧД", "Другое"];
const PROBLEMS = ["Авансовая СФ / счета-фактуры", "Выписка банка", "Декларации соответствия / Wiki", "Доступы / права / пользователи", "Не открывается программа", "Ошибка при проведении документа", "Печать / принтер", "Другое"];
function Combo({
  value,
  onChange,
  options,
  highlight = [],
  placeholder
}) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState("");
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const filtered = options.filter(o => o.toLowerCase().includes(q.toLowerCase()));
  const ordered = [...filtered.filter(o => highlight.includes(o)), ...filtered.filter(o => !highlight.includes(o))];
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: open ? q : value,
    placeholder: placeholder,
    onFocus: () => {
      setOpen(true);
      setQ("");
    },
    onChange: e => setQ(e.target.value),
    style: {
      width: "100%",
      border: `1px solid ${open ? "var(--accent)" : "#cbd5e1"}`,
      borderRadius: 14,
      padding: "12px 38px 12px 13px",
      font: "inherit",
      background: "#fff",
      color: "var(--text)",
      outline: "none",
      boxShadow: open ? "0 0 0 4px var(--focus-ring)" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      position: "absolute",
      right: 10,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--muted)",
      cursor: "pointer"
    }
  }, "\u25BE"), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      zIndex: 40,
      left: 0,
      right: 0,
      top: "calc(100% + 6px)",
      maxHeight: 280,
      overflowY: "auto",
      background: "#fff",
      border: "1px solid var(--accent)",
      borderRadius: 14,
      boxShadow: "0 18px 40px rgba(15,23,42,.18)",
      padding: 6
    }
  }, ordered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px",
      color: "var(--muted)",
      fontSize: 13
    }
  }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"), ordered.map(o => {
    const special = highlight.includes(o);
    return /*#__PURE__*/React.createElement("div", {
      key: o,
      onClick: () => {
        onChange(o);
        setOpen(false);
      },
      style: {
        minHeight: 40,
        display: "flex",
        alignItems: "center",
        padding: "10px 12px",
        borderRadius: 10,
        cursor: "pointer",
        lineHeight: 1.3,
        fontWeight: special ? 800 : 600,
        background: special ? "#fff4ec" : "transparent",
        color: special ? "#9a3412" : "var(--text)",
        border: special ? "1px solid #fdba74" : "1px solid transparent",
        marginBottom: special ? 3 : 0
      },
      onMouseEnter: e => {
        if (!special) e.currentTarget.style.background = "#eef7fb";
      },
      onMouseLeave: e => {
        if (!special) e.currentTarget.style.background = "transparent";
      }
    }, special ? "★ " : "", o);
  })));
}
function Field({
  label,
  required,
  hint,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      margin: "0 0 7px",
      fontWeight: 800,
      fontSize: 14
    }
  }, label, " ", required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)",
      fontWeight: 900
    }
  }, "*")), children, hint && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: 13,
      lineHeight: 1.45,
      margin: "8px 0 0"
    }
  }, hint));
}
function RequestForm({
  state,
  set,
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    icon: "\uD83D\uDC47",
    title: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435 \u0441\u044E\u0434\u0430"
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0443\u0436\u0435 \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044F \u0433\u043E\u0442\u043E\u0432\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u0438\u0437 Wiki \u2014 \u0431\u0435\u0437 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0432 IT. \u0417\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435 \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \xAB\u041F\u043E\u0438\u0441\u043A \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439\xBB."), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontSize: 23,
      letterSpacing: "-.02em"
    }
  }, "1. \u041A\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement(Banner, {
    tone: "tip",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("b", null, "\u0414\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:"), " \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434, \u044E\u0440\u043B\u0438\u0446\u043E \u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443. \u0415\u0441\u043B\u0438 \u043D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435 \u0442\u043E\u0447\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u2014 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C, \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u0442."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u0413\u043E\u0440\u043E\u0434",
    required: true,
    hint: "\u0417\u0430\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0435 \u0431\u0430\u0437\u044B \u0441\u0442\u043E\u044F\u0442 \u0441\u0432\u0435\u0440\u0445\u0443 \u0438 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u044B \u0446\u0432\u0435\u0442\u043E\u043C."
  }, /*#__PURE__*/React.createElement(Combo, {
    value: state.city,
    onChange: v => set("city", v),
    options: CITIES,
    highlight: CITY_HL,
    placeholder: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u0412\u0430\u0448\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F (\u044E\u0440\u043B\u0438\u0446\u043E)",
    required: true,
    hint: "\u0415\u0441\u043B\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043D\u0435\u0442 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435 \u2014 \u0432\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u0430\u043C\u0438."
  }, /*#__PURE__*/React.createElement(Combo, {
    value: state.org,
    onChange: v => set("org", v),
    options: ORGS,
    highlight: ORG_HL,
    placeholder: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044E\u0440\u043B\u0438\u0446\u043E"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "\u0412 \u043A\u0430\u043A\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",
    required: true,
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443",
    options: PROGRAMS,
    value: state.program,
    onChange: e => set("program", e.target.value),
    style: {
      marginTop: -15
    }
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0424\u0418\u041E \u0438 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
    placeholder: "\u0415\u0441\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0432 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 \u043F\u0438\u0441\u044C\u043C\u0430",
    value: state.contact,
    onChange: e => set("contact", e.target.value),
    style: {
      marginTop: -15
    }
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontSize: 23,
      letterSpacing: "-.02em"
    }
  }, "2. \u0427\u0442\u043E \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C"), /*#__PURE__*/React.createElement(Select, {
    label: "\u0412\u0430\u0448\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",
    required: true,
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443",
    options: PROBLEMS,
    value: state.problem,
    onChange: e => set("problem", e.target.value),
    style: {
      marginTop: 0
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      margin: "15px 0 7px",
      fontWeight: 800,
      fontSize: 14
    }
  }, "\u0421\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)",
      fontWeight: 900
    }
  }, "*")), /*#__PURE__*/React.createElement(UrgencyPicker, {
    value: state.urgency,
    onChange: v => set("urgency", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B",
    multiline: true,
    placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435, \u0447\u0442\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442",
    value: state.desc,
    onChange: e => set("desc", e.target.value)
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontSize: 23,
      letterSpacing: "-.02em"
    }
  }, "3. \u0424\u0430\u0439\u043B\u044B \u0438 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u044B"), /*#__PURE__*/React.createElement(Banner, {
    tone: "tip",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("b", null, "\u041A\u0430\u043A \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043A\u0440\u0438\u043D:"), " \u0441\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 ", /*#__PURE__*/React.createElement("b", null, "Ctrl+V"), " \u0432 \u0441\u0435\u0440\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u043D\u0438\u0436\u0435."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "2px dashed #a9c8d4",
      background: "#f8fcfd",
      borderRadius: 18,
      padding: 22,
      textAlign: "center",
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text)"
    }
  }, "\u0421\u044E\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442 Ctrl+V"), /*#__PURE__*/React.createElement("br", null), "\u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B \u043C\u044B\u0448\u043A\u043E\u0439"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "\u2709\uFE0F",
    onClick: onSubmit
  }, "\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E"))));
}
window.RequestForm = RequestForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/it-request/RequestForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/it-request/ResultView.jsx
try { (() => {
// ResultView.jsx — "Что получится": generated subject, body, copy actions, matched instructions.
const {
  Card,
  Button,
  Banner,
  Badge
} = window.DesignSystem_56ba0f;
const CATEGORY = p => {
  if (!p) return "ОБЩЕЕ";
  if (p.includes("ЭДО") || p.includes("Диадок")) return "ЭДО";
  if (p.includes("Касса") || p.includes("ОФД")) return "КАССА";
  if (p.includes("Честный")) return "МАРКИРОВКА";
  if (p.includes("ЭЦП") || p.includes("МЧД")) return "ЭЦП";
  if (p.includes("1С")) return "1С";
  return "ОБЩЕЕ";
};
function buildSubject(s) {
  const head = [s.city, s.org, s.program].filter(Boolean).join(" · ");
  const gist = s.problem || "проблема";
  const cat = CATEGORY(s.program);
  return `${head || "Город · Юрлицо"} — ${gist} [${cat}][${s.urgency || "P2"}]`;
}
function buildBody(s) {
  return [`Город: ${s.city || "—"}`, `Юрлицо: ${s.org || "—"}`, `Программа: ${s.program || "—"}`, `Проблема: ${s.problem || "—"}`, s.desc ? `\nОписание: ${s.desc}` : "", s.contact ? `\nКонтакт: ${s.contact}` : "", `\n— — —\nКатегория: ${CATEGORY(s.program)} · Срочность: ${s.urgency || "P2"}`, `Письмо собрано приложением «Заявка в IT отдел». Приложение само ничего не отправляет.`].filter(Boolean).join("\n");
}
function ResultView({
  state
}) {
  const [copied, setCopied] = React.useState("");
  const copy = what => {
    setCopied(what);
    setTimeout(() => setCopied(""), 1600);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontSize: 23,
      letterSpacing: "-.02em"
    }
  }, "\u0422\u0435\u043C\u0430 \u043F\u0438\u0441\u044C\u043C\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 18,
      padding: 14,
      fontWeight: 800,
      color: "#0f3f58",
      wordBreak: "break-word"
    }
  }, buildSubject(state)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => copy("subject")
  }, copied === "subject" ? "✓ Скопировано" : "Скопировать тему"), /*#__PURE__*/React.createElement(Button, {
    variant: "copyAll",
    style: {
      width: "auto",
      minHeight: 42,
      fontSize: 14
    },
    onClick: () => copy("all")
  }, copied === "all" ? "✓ Готово" : "📋 Скопировать заявку целиком"), /*#__PURE__*/React.createElement(Button, {
    variant: "mail"
  }, "\uD83D\uDCE7 \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043F\u043E\u0447\u0442\u0435")), copied === "all" && /*#__PURE__*/React.createElement(Banner, {
    tone: "success",
    style: {
      marginTop: 12
    }
  }, "\u0422\u0435\u043C\u0430 \u0438 \u0442\u0435\u043A\u0441\u0442 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontSize: 23,
      letterSpacing: "-.02em"
    }
  }, "\u0422\u0435\u043B\u043E \u043F\u0438\u0441\u044C\u043C\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0f172a",
      color: "#e5e7eb",
      borderRadius: 18,
      padding: 15,
      whiteSpace: "pre-wrap",
      lineHeight: 1.5,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      maxHeight: 320,
      overflowY: "auto"
    }
  }, buildBody(state))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontSize: 23,
      letterSpacing: "-.02em"
    }
  }, "\u041F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438"), /*#__PURE__*/React.createElement(Banner, {
    tone: "success",
    style: {
      marginBottom: 12
    }
  }, "\u041D\u0430\u0448\u043B\u0438\u0441\u044C \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043F\u043E \u0432\u0430\u0448\u0435\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435 \u2014 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0440\u0435\u0448\u0438\u0442\u0435 \u0435\u0451 \u0441\u0430\u043C\u0438 \u0437\u0430 \u043C\u0438\u043D\u0443\u0442\u0443."), [{
    t: "Декларации соответствия по товарам (раздел Wiki)",
    a: "public",
    d: "Главный раздел Wiki со всеми декларациями. Внутри — подразделы по брендам."
  }, {
    t: "Как делать скриншоты",
    a: "public",
    d: "Инструкция по созданию и вставке скриншотов в заявку."
  }].map(i => /*#__PURE__*/React.createElement("div", {
    key: i.t,
    style: {
      border: "1px solid var(--line)",
      borderRadius: 18,
      padding: 14,
      background: "#fff",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.25
    }
  }, i.t), /*#__PURE__*/React.createElement(Badge, {
    tone: i.a
  }, i.a === "public" ? "Публичная" : "Внутренняя")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      color: "var(--muted)",
      lineHeight: 1.45,
      fontSize: 13
    }
  }, i.d)))));
}
window.ResultView = ResultView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/it-request/ResultView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/it-request/WikiSearch.jsx
try { (() => {
// WikiSearch.jsx — "Поиск инструкций": search field, quick chips, instruction results.
const {
  Card,
  Badge,
  TextField
} = window.DesignSystem_56ba0f;
const CHIPS = ["Декларация соответствия", "ЭДО / Диадок", "Касса / ОФД", "Честный знак", "ЭЦП / МЧД", "Выписка банка", "1С не открывается", "Доступы / права"];
const RESULTS = [{
  t: "Декларации соответствия по товарам",
  a: "public",
  d: "Главный раздел Wiki со всеми декларациями по товарам. Начните отсюда — внутри подразделы по брендам."
}, {
  t: "Подключение Контур.Диадок: пошагово",
  a: "public",
  d: "Как настроить ЭДО через Контур.Диадок, выпустить и привязать сертификат."
}, {
  t: "Перерегистрация кассы в ОФД",
  a: "internal",
  d: "Внутренняя инструкция для IT: смена ОФД и фискального накопителя."
}, {
  t: "Маркировка «Честный знак»: частые ошибки",
  a: "public",
  d: "Что делать, если коды не считываются или не передаются в систему."
}];
function WikiSearch() {
  const [q, setQ] = React.useState("");
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 4px",
      fontSize: 23,
      letterSpacing: "-.02em"
    }
  }, "\u041F\u043E\u0438\u0441\u043A \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: 13,
      margin: "0 0 14px"
    }
  }, "\u0411\u0430\u0437\u0430 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 Wiki \u2014 539 \u0437\u0430\u043F\u0438\u0441\u0435\u0439. \u041F\u043E\u0434\u0431\u043E\u0440 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u0438 \u0442\u0435\u043A\u0441\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(320px,460px) 1fr",
      gap: 18,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430",
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      marginTop: -15
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 12
    }
  }, CHIPS.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    onClick: () => setQ(c),
    style: {
      border: "1px solid var(--line)",
      background: "#f8fafc",
      color: "#334155",
      borderRadius: 999,
      padding: "8px 10px",
      cursor: "pointer",
      fontSize: 13,
      userSelect: "none"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--accent)";
      e.currentTarget.style.color = "var(--accent-dark)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--line)";
      e.currentTarget.style.color = "#334155";
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)",
      fontSize: 13
    }
  }, "\u041D\u0430\u0439\u0434\u0435\u043D\u043E ", RESULTS.length, " \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443", q ? ` «${q}»` : ""), RESULTS.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.t,
    style: {
      border: "1px solid var(--line)",
      borderRadius: 18,
      padding: 14,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.25
    }
  }, i.t), /*#__PURE__*/React.createElement(Badge, {
    tone: i.a
  }, i.a === "public" ? "Публичная" : "Внутренняя")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      color: "var(--muted)",
      lineHeight: 1.45,
      fontSize: 13
    }
  }, i.d), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--accent-dark)",
      fontWeight: 800,
      fontSize: 13,
      display: "inline-block",
      marginTop: 8
    }
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 Wiki \u2192"))))));
}
window.WikiSearch = WikiSearch;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/it-request/WikiSearch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.UrgencyPicker = __ds_scope.UrgencyPicker;

})();
