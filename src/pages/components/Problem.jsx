import React, { useState, useEffect, useRef } from "react";

const groups = [
  {
    title: "GREENHOUSE DATA",
    items: [
      { q: "How do you collect and centralize your greenhouse data?", a: "Connetti sensori, climate computer e registri in un’unica vista. I dati vengono normalizzati e resi consultabili in tempo reale da team e sedi diverse." },
      { q: "Do your growers share knowledge to improve results?", a: "Crea playbook e note condivise legate ai dati storici: ciò che funziona in una serra diventa riutilizzabile dalle altre, riducendo il tempo di ramp-up." }
    ]
  },
  {
    title: "HARVEST PREDICTIONS",
    items: [
      { q: "Is your sales team relying on outdated and inaccurate forecasts?", a: "I modelli predittivi aggiornano le previsioni giornalmente, riducendo gli errori e migliorando la pianificazione commerciale." },
      { q: "Do unreliable yield predictions impact your profit?", a: "Una maggiore accuratezza previsionale migliora prezzi, contratti e allocazione risorse, proteggendo il margine." }
    ]
  },
  {
    title: "IRRIGATION EFFICIENCY",
    items: [
      { q: "Are irrigation mistakes affecting your plant's health and your total yield?", a: "Alert intelligenti segnalano fuori-range e suggeriscono correzioni su volumi, EC e timing per preservare salute e resa." }
    ]
  },
  {
    title: "STRATEGY OPTIMIZATION",
    items: [
      { q: "Do you find it difficult to validate pre-season decisions?", a: "Simula scenari con dati storici e condizioni attese per confrontare strategie prima di implementarle in serra." }
    ]
  }
];

export default function Problems() {
  const [open, setOpen] = useState({});
  const toggle = (k) => setOpen((s) => ({ ...s, [k]: !s[k] }));

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`problems relative w-full overflow-hidden text-white ${visible ? "is-visible" : ""}`}
      style={{ background: "radial-gradient(1200px 520px at 10% -10%, rgba(16,185,129,0.12), transparent 60%), radial-gradient(900px 420px at 95% 0%, rgba(5,150,105,0.12), transparent 60%), linear-gradient(180deg, #060f0c 0%, #081712 45%, #07130f 100%)" }}
      aria-labelledby="problems-title"
    >
      {/* grain + blobs decorativi */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-[1] opacity-20 mix-blend-soft-light" style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAABaf7ccAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAK9JREFUeNrs0TEBACAMwLCT/5qQzSxO0QxG3CkAAAAAAAAAAAAAAACwQm7rQWwVg5rTg9m/VwAAAP9m9d9wAAAgf9cAAAB/1wAAAH/XAAAAgH/XAAAAv9cAAABy2H7zYwAAAAAAAAAAAAAAAAAAAAAAAEgJAgAAgP/TAQAA/9MBAAD/0wEAAP/TAQAA/9MBAABU1C6hAABP0b4BAQAAAAAAAPgWAgAAwGv8JgEAAIhuY3gAALp1wXwAAABJRU5ErkJggg==")', backgroundSize: "256px 256px" }} />
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl" style={{ background: "radial-gradient(closest-side, rgba(16,185,129,.22), rgba(16,185,129,0) 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl" style={{ background: "radial-gradient(closest-side, rgba(5,150,105,.2), rgba(5,150,105,0) 70%)" }} />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-24 lg:mt-28" />

        {/* card principale */}
        <div
          className="card mx-auto max-w-5xl rounded-3xl px-6 sm:px-10 py-14 shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-xl"
          style={{ background: "radial-gradient(800px 420px at 15% 0%, rgba(16,185,129,0.22), transparent 60%), radial-gradient(700px 360px at 85% 10%, rgba(5,150,105,0.2), transparent 60%), linear-gradient(180deg, rgba(8,23,18,0.9) 0%, rgba(9,28,22,0.9) 60%, rgba(8,21,18,0.92) 100%)" }}
        >
          {/* header */}
          <div className="text-center" data-anim="1">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-100/70">CHALLENGES</p>
            <h2 id="problems-title" className="mt-2 text-[42px] leading-tight font-semibold tracking-tight text-white">What problems are you solving?</h2>
            <p className="mt-4 text-base text-emerald-50/85 max-w-2xl mx-auto">Managing greenhouse operations comes with complex challenges. We help you overcome them.</p>
          </div>

          {/* gruppi */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {groups.map((g, gi) => (
              <div key={g.title} data-anim={gi + 2}>
                <h3 className="text-xs font-semibold tracking-widest text-emerald-200/70 mb-3">{g.title}</h3>
                <div className="space-y-4">
                  {g.items.map((item, ii) => {
                    const k = `${gi}-${ii}`;
                    const isOpen = !!open[k];
                    const panelId = `faq-panel-${k}`;
                    const btnId = `faq-btn-${k}`;
                    return (
                      <div key={k} className="rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition-shadow">
                        <button
                          id={btnId}
                          aria-controls={panelId}
                          aria-expanded={isOpen}
                          onClick={() => toggle(k)}
                          className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                        >
                          <span className="flex items-start gap-3">
                            <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-300/25 text-emerald-300">
                              <Dot />
                            </span>
                            <span className="text-[15px] font-medium text-emerald-50">{item.q}</span>
                          </span>
                          <span className={["inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-transform", isOpen ? "rotate-90" : ""].join(" ")} aria-hidden="true">
                            <ArrowRight />
                          </span>
                        </button>
                        {!isOpen && <div className="h-px w-full bg-white/7" />}
                        <div id={panelId} role="region" aria-labelledby={btnId} className={["grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"].join(" ")}>
                          <div className="overflow-hidden">
                            <div className="px-5 pb-5 text-sm leading-6 text-emerald-50/90 bg-white/3">{item.a}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-20" />
      </div>

      {/* animazioni di ingresso */}
      <style jsx>{`
        [data-anim] {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1);
        }
        .is-visible [data-anim="1"] { opacity: 1; transform: none; transition-delay: .05s; }
        .is-visible [data-anim="2"] { opacity: 1; transform: none; transition-delay: .12s; }
        .is-visible [data-anim="3"] { opacity: 1; transform: none; transition-delay: .18s; }
        .is-visible [data-anim="4"] { opacity: 1; transform: none; transition-delay: .24s; }
        .is-visible [data-anim="5"] { opacity: 1; transform: none; transition-delay: .30s; }
      `}</style>
    </section>
  );
}

/* Icone */
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Dot() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
