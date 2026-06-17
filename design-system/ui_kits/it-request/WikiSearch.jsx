// WikiSearch.jsx — "Поиск инструкций": search field, quick chips, instruction results.
const { Card, Badge, TextField } = window.DesignSystem_56ba0f;

const CHIPS = ["Декларация соответствия", "ЭДО / Диадок", "Касса / ОФД", "Честный знак", "ЭЦП / МЧД", "Выписка банка", "1С не открывается", "Доступы / права"];

const RESULTS = [
  { t: "Декларации соответствия по товарам", a: "public", d: "Главный раздел Wiki со всеми декларациями по товарам. Начните отсюда — внутри подразделы по брендам." },
  { t: "Подключение Контур.Диадок: пошагово", a: "public", d: "Как настроить ЭДО через Контур.Диадок, выпустить и привязать сертификат." },
  { t: "Перерегистрация кассы в ОФД", a: "internal", d: "Внутренняя инструкция для IT: смена ОФД и фискального накопителя." },
  { t: "Маркировка «Честный знак»: частые ошибки", a: "public", d: "Что делать, если коды не считываются или не передаются в систему." },
];

function WikiSearch() {
  const [q, setQ] = React.useState("");
  return (
    <Card>
      <h2 style={{ margin: "0 0 4px", fontSize: 23, letterSpacing: "-.02em" }}>Поиск инструкций</h2>
      <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 14px" }}>База корпоративной Wiki — 539 записей. Подбор учитывает выбранную проблему и текст описания.</p>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(320px,460px) 1fr", gap: 18, alignItems: "start" }}>
        <div>
          <TextField label="Ключевые слова" placeholder="Например: декларация соответствия" value={q} onChange={(e) => setQ(e.target.value)} style={{ marginTop: -15 }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
            {CHIPS.map((c) => (
              <span key={c} onClick={() => setQ(c)} style={{ border: "1px solid var(--line)", background: "#f8fafc", color: "#334155", borderRadius: 999, padding: "8px 10px", cursor: "pointer", fontSize: 13, userSelect: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent-dark)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.color = "#334155"; }}>{c}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          <div style={{ color: "var(--muted)", fontSize: 13 }}>Найдено {RESULTS.length} инструкции по запросу{q ? ` «${q}»` : ""}</div>
          {RESULTS.map((i) => (
            <div key={i.t} style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 14, background: "#fff" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
                <h4 style={{ margin: 0, fontSize: 16, lineHeight: 1.25 }}>{i.t}</h4>
                <Badge tone={i.a}>{i.a === "public" ? "Публичная" : "Внутренняя"}</Badge>
              </div>
              <p style={{ margin: "8px 0 0", color: "var(--muted)", lineHeight: 1.45, fontSize: 13 }}>{i.d}</p>
              <a href="#" style={{ color: "var(--accent-dark)", fontWeight: 800, fontSize: 13, display: "inline-block", marginTop: 8 }}>Открыть в Wiki →</a>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

window.WikiSearch = WikiSearch;
