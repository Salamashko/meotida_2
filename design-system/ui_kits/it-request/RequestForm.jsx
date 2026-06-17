// RequestForm.jsx — the three-card request wizard (who / what / files).
const { Card, Banner, Button, Select, TextField, UrgencyPicker } = window.DesignSystem_56ba0f;

const CITIES = ["Казахстан", "Кыргызстан", "Узбекистан", "Москва", "Санкт-Петербург", "Ростов-на-Дону", "Краснодар", "Екатеринбург", "Новосибирск", "Казань", "Самара", "Воронеж", "Сочи", "Элиста"];
const CITY_HL = ["Казахстан", "Кыргызстан", "Узбекистан"];
const ORGS = ["СЛК", "BASTION IMPORT", "ГелиосПлюс", "Глобус", "Диалог", "ДТФ", "ИТК", "Карамат Торг", "Кварц", "Лига", "Меотида", "Миллениум Регионы", "Партнер", "Сатурн", "Сигма", "ТК Континент"];
const ORG_HL = ["СЛК", "BASTION IMPORT"];
const PROGRAMS = ["1С7", "1С8", "1С8 УТ", "1С8 КА", "1С8 Бухгалтерия", "Оптимум / Варм", "Касса / ФН / ОФД", "Честный знак", "ЭДО / Контур.Диадок / Такском", "СБИС / Росстат", "ЭЦП", "МЧД", "Другое"];
const PROBLEMS = ["Авансовая СФ / счета-фактуры", "Выписка банка", "Декларации соответствия / Wiki", "Доступы / права / пользователи", "Не открывается программа", "Ошибка при проведении документа", "Печать / принтер", "Другое"];

function Combo({ value, onChange, options, highlight = [], placeholder }) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState("");
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const filtered = options.filter((o) => o.toLowerCase().includes(q.toLowerCase()));
  const ordered = [...filtered.filter((o) => highlight.includes(o)), ...filtered.filter((o) => !highlight.includes(o))];
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <input value={open ? q : value} placeholder={placeholder} onFocus={() => { setOpen(true); setQ(""); }}
        onChange={(e) => setQ(e.target.value)}
        style={{ width: "100%", border: `1px solid ${open ? "var(--accent)" : "#cbd5e1"}`, borderRadius: 14, padding: "12px 38px 12px 13px", font: "inherit", background: "#fff", color: "var(--text)", outline: "none", boxShadow: open ? "0 0 0 4px var(--focus-ring)" : "none" }} />
      <span onClick={() => setOpen((o) => !o)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "var(--muted)", cursor: "pointer" }}>▾</span>
      {open && (
        <div style={{ position: "absolute", zIndex: 40, left: 0, right: 0, top: "calc(100% + 6px)", maxHeight: 280, overflowY: "auto", background: "#fff", border: "1px solid var(--accent)", borderRadius: 14, boxShadow: "0 18px 40px rgba(15,23,42,.18)", padding: 6 }}>
          {ordered.length === 0 && <div style={{ padding: "10px 12px", color: "var(--muted)", fontSize: 13 }}>Ничего не найдено</div>}
          {ordered.map((o) => {
            const special = highlight.includes(o);
            return (
              <div key={o} onClick={() => { onChange(o); setOpen(false); }}
                style={{ minHeight: 40, display: "flex", alignItems: "center", padding: "10px 12px", borderRadius: 10, cursor: "pointer", lineHeight: 1.3, fontWeight: special ? 800 : 600,
                  background: special ? "#fff4ec" : "transparent", color: special ? "#9a3412" : "var(--text)", border: special ? "1px solid #fdba74" : "1px solid transparent", marginBottom: special ? 3 : 0 }}
                onMouseEnter={(e) => { if (!special) e.currentTarget.style.background = "#eef7fb"; }}
                onMouseLeave={(e) => { if (!special) e.currentTarget.style.background = "transparent"; }}>
                {special ? "★ " : ""}{o}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Field({ label, required, hint, children }) {
  return (
    <div>
      <label style={{ display: "block", margin: "0 0 7px", fontWeight: 800, fontSize: 14 }}>
        {label} {required && <span style={{ color: "var(--red)", fontWeight: 900 }}>*</span>}
      </label>
      {children}
      {hint && <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.45, margin: "8px 0 0" }}>{hint}</p>}
    </div>
  );
}

function RequestForm({ state, set, onSubmit }) {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <Banner tone="info" icon="👇" title="Сначала загляните сюда">
        Возможно, проблема уже решается готовой инструкцией из Wiki — без обращения в IT. Загляните во вкладку «Поиск инструкций».
      </Banner>

      <Card>
        <h2 style={{ margin: "0 0 12px", fontSize: 23, letterSpacing: "-.02em" }}>1. Кто пишет заявку</h2>
        <Banner tone="tip" style={{ marginBottom: 14 }}><b>Для пользователя:</b> сначала заполните город, юрлицо и программу. Если не знаете точное название — начните печатать, приложение подскажет.</Banner>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Город" required hint="Заграничные базы стоят сверху и отмечены цветом.">
            <Combo value={state.city} onChange={(v) => set("city", v)} options={CITIES} highlight={CITY_HL} placeholder="Нажмите и выберите город" />
          </Field>
          <Field label="Ваша организация (юрлицо)" required hint="Если вашего нет в списке — впишите сами.">
            <Combo value={state.org} onChange={(v) => set("org", v)} options={ORGS} highlight={ORG_HL} placeholder="Нажмите и выберите юрлицо" />
          </Field>
          <Select label="В какой программе проблема" required placeholder="Выберите программу" options={PROGRAMS} value={state.program} onChange={(e) => set("program", e.target.value)} style={{ marginTop: -15 }} />
          <TextField label="ФИО и должность" placeholder="Если не указано в подписи письма" value={state.contact} onChange={(e) => set("contact", e.target.value)} style={{ marginTop: -15 }} />
        </div>
      </Card>

      <Card>
        <h2 style={{ margin: "0 0 12px", fontSize: 23, letterSpacing: "-.02em" }}>2. Что случилось</h2>
        <Select label="Ваша проблема" required placeholder="Выберите проблему" options={PROBLEMS} value={state.problem} onChange={(e) => set("problem", e.target.value)} style={{ marginTop: 0 }} />
        <label style={{ display: "block", margin: "15px 0 7px", fontWeight: 800, fontSize: 14 }}>Срочность <span style={{ color: "var(--red)", fontWeight: 900 }}>*</span></label>
        <UrgencyPicker value={state.urgency} onChange={(v) => set("urgency", v)} />
        <TextField label="Описание проблемы" multiline placeholder="Опишите подробнее, что именно не работает" value={state.desc} onChange={(e) => set("desc", e.target.value)} />
      </Card>

      <Card>
        <h2 style={{ margin: "0 0 12px", fontSize: 23, letterSpacing: "-.02em" }}>3. Файлы и скриншоты</h2>
        <Banner tone="tip" style={{ marginBottom: 14 }}><b>Как прикрепить скрин:</b> сделайте скриншот и нажмите <b>Ctrl+V</b> в серую область ниже.</Banner>
        <div style={{ border: "2px dashed #a9c8d4", background: "#f8fcfd", borderRadius: 18, padding: 22, textAlign: "center", color: "var(--muted)" }}>
          <b style={{ color: "var(--text)" }}>Сюда можно вставить скриншот Ctrl+V</b><br />
          или перетащить файлы мышкой
        </div>
        <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="primary" icon="✉️" onClick={onSubmit}>Сформировать письмо</Button>
        </div>
      </Card>
    </div>
  );
}

window.RequestForm = RequestForm;
