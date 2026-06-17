// Header.jsx — Миллениум "Заявка в IT отдел" header shell:
// brand + title, metadata pills, display toolbar (mode/theme), progress, tabs.
const { Pill, ProgressBar } = window.DesignSystem_56ba0f;

const TABS = [
  { id: "formTab", label: "1. Заполнить заявку" },
  { id: "resultTab", label: "2. Что получится" },
  { id: "wikiTab", label: "Поиск инструкций" },
  { id: "helpTab", label: "Инструкция" },
];

function Toolbar({ mode, setMode, theme, toggleTheme }) {
  const tbtn = (active) => ({
    background: active ? "var(--accent)" : "#eef7fb",
    color: active ? "#fff" : "#075985",
    border: active ? "1px solid var(--accent)" : "1px solid #cbe8f4",
    borderRadius: 12,
    padding: "8px 11px",
    fontWeight: 800,
    fontSize: 13,
    minHeight: 38,
    cursor: "pointer",
    fontFamily: "inherit",
  });
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", borderTop: "1px solid var(--line)", paddingTop: 12 }}>
      <span style={{ fontWeight: 800, color: "var(--violet-dark)", fontSize: 13, alignSelf: "center" }}>Режим:</span>
      <span style={{ display: "inline-flex", border: "2px solid #a78bfa", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 14px rgba(124,58,237,.18)" }}>
        {[["simple", "Простой"], ["pro", "Профессиональный"]].map(([m, lbl]) => (
          <button key={m} onClick={() => setMode(m)} style={{
            background: mode === m ? "linear-gradient(135deg,#7c3aed,#6d28d9)" : "#f5f3ff",
            color: mode === m ? "#fff" : "var(--violet-dark)",
            border: 0, padding: "9px 16px", fontSize: 14, fontWeight: 700, minHeight: 40, cursor: "pointer", fontFamily: "inherit",
          }}>{lbl}</button>
        ))}
      </span>
      <button style={tbtn(theme === "dark")} onClick={toggleTheme}>🌙 Тёмная тема</button>
      <button style={tbtn(false)}>А+ Крупный шрифт</button>
      <button style={tbtn(false)}>↩ Как в прошлый раз</button>
      <button style={tbtn(false)}>🖨 Печать</button>
    </div>
  );
}

function Header({ tab, setTab, mode, setMode, theme, toggleTheme, progress }) {
  return (
    <header style={{
      background: theme === "dark" ? "linear-gradient(135deg,#16233b,#0f1c30)" : "linear-gradient(135deg,#fff,#eef8fc)",
      border: "1px solid var(--line)", borderRadius: 30, boxShadow: "var(--shadow)", padding: 20, display: "grid", gap: 14,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 15, minWidth: 280 }}>
          <img src="../../assets/logo-millenium.png" alt="ГК Миллениум" style={{ width: 116, height: "auto", background: "#fff", borderRadius: 16, padding: 7, border: "1px solid var(--line)", boxShadow: "var(--shadow-card)" }} />
          <div>
            <h1 style={{ margin: 0, fontSize: "clamp(26px,3.2vw,40px)", letterSpacing: "-.03em", lineHeight: 1.05 }}>Заявка в IT отдел</h1>
            <p style={{ margin: "7px 0 0", color: "var(--muted)", lineHeight: 1.45, maxWidth: 640 }}>
              Помогает собрать нормальное письмо: с темой, описанием, файлами и подсказками. Данные никуда не отправляются — всё работает прямо на компьютере.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
          <Pill>v32 · Простой режим</Pill>
          <Pill>© Саламашко Виктория</Pill>
          <Pill tone="ok" icon="🔒">Работает локально</Pill>
        </div>
      </div>
      <Toolbar mode={mode} setMode={setMode} theme={theme} toggleTheme={toggleTheme} />
      <ProgressBar value={progress} />
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", borderTop: "1px solid var(--line)", paddingTop: 14 }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            border: 0, borderRadius: 14, padding: "11px 14px", fontWeight: 800, cursor: "pointer", fontFamily: "inherit", minHeight: 42,
            background: tab === t.id ? "var(--accent-dark)" : "var(--accent)", color: "#fff",
          }}>{t.label}</button>
        ))}
      </div>
    </header>
  );
}

window.Header = Header;
