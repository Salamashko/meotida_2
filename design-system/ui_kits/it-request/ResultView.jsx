// ResultView.jsx — "Что получится": generated subject, body, copy actions, matched instructions.
const { Card, Button, Banner, Badge } = window.DesignSystem_56ba0f;

const CATEGORY = (p) => {
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
  return [
    `Город: ${s.city || "—"}`,
    `Юрлицо: ${s.org || "—"}`,
    `Программа: ${s.program || "—"}`,
    `Проблема: ${s.problem || "—"}`,
    s.desc ? `\nОписание: ${s.desc}` : "",
    s.contact ? `\nКонтакт: ${s.contact}` : "",
    `\n— — —\nКатегория: ${CATEGORY(s.program)} · Срочность: ${s.urgency || "P2"}`,
    `Письмо собрано приложением «Заявка в IT отдел». Приложение само ничего не отправляет.`,
  ].filter(Boolean).join("\n");
}

function ResultView({ state }) {
  const [copied, setCopied] = React.useState("");
  const copy = (what) => { setCopied(what); setTimeout(() => setCopied(""), 1600); };
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <Card>
        <h2 style={{ margin: "0 0 12px", fontSize: 23, letterSpacing: "-.02em" }}>Тема письма</h2>
        <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 18, padding: 14, fontWeight: 800, color: "#0f3f58", wordBreak: "break-word" }}>
          {buildSubject(state)}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Button variant="secondary" onClick={() => copy("subject")}>{copied === "subject" ? "✓ Скопировано" : "Скопировать тему"}</Button>
          <Button variant="copyAll" style={{ width: "auto", minHeight: 42, fontSize: 14 }} onClick={() => copy("all")}>{copied === "all" ? "✓ Готово" : "📋 Скопировать заявку целиком"}</Button>
          <Button variant="mail">📧 Открыть в почте</Button>
        </div>
        {copied === "all" && <Banner tone="success" style={{ marginTop: 12 }}>Тема и текст скопированы в буфер обмена.</Banner>}
      </Card>

      <Card>
        <h2 style={{ margin: "0 0 12px", fontSize: 23, letterSpacing: "-.02em" }}>Тело письма</h2>
        <div style={{ background: "#0f172a", color: "#e5e7eb", borderRadius: 18, padding: 15, whiteSpace: "pre-wrap", lineHeight: 1.5, fontFamily: "var(--font-mono)", fontSize: 13, maxHeight: 320, overflowY: "auto" }}>
          {buildBody(state)}
        </div>
      </Card>

      <Card>
        <h2 style={{ margin: "0 0 12px", fontSize: 23, letterSpacing: "-.02em" }}>Подходящие инструкции</h2>
        <Banner tone="success" style={{ marginBottom: 12 }}>Нашлись инструкции по вашей проблеме — возможно, решите её сами за минуту.</Banner>
        {[
          { t: "Декларации соответствия по товарам (раздел Wiki)", a: "public", d: "Главный раздел Wiki со всеми декларациями. Внутри — подразделы по брендам." },
          { t: "Как делать скриншоты", a: "public", d: "Инструкция по созданию и вставке скриншотов в заявку." },
        ].map((i) => (
          <div key={i.t} style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 14, background: "#fff", marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
              <h4 style={{ margin: 0, fontSize: 16, lineHeight: 1.25 }}>{i.t}</h4>
              <Badge tone={i.a}>{i.a === "public" ? "Публичная" : "Внутренняя"}</Badge>
            </div>
            <p style={{ margin: "8px 0 0", color: "var(--muted)", lineHeight: 1.45, fontSize: 13 }}>{i.d}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

window.ResultView = ResultView;
