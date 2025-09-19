import React, { useEffect, useState, useRef } from "react";

export default function ScheduleSheet() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const firstFieldRef = useRef(null);
  const sheetRef = useRef(null);

  // Apri via evento globale: window.dispatchEvent(new CustomEvent("open-schedule"))
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-schedule", onOpen);
    return () => window.removeEventListener("open-schedule", onOpen);
  }, []);

  // Blocca scroll e focus iniziale quando aperto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current && firstFieldRef.current.focus(), 60);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open]);

  // Chiudi con ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    setTimeout(() => { setSubmitting(false); setDone(false); }, 250);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setDone(true); }, 900);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-labelledby="schedule_title" aria-describedby="schedule_desc">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm motion-safe:animate-[backdropIn_280ms_ease]" onClick={close} />

      {/* Drawer */}
      <div ref={sheetRef} className="absolute top-0 right-0 h-full w-[94vw] max-w-[560px] border-l border-white/12 bg-neutral-950/70 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.65)] grid grid-rows-[auto,1fr] overflow-hidden motion-safe:animate-[sheetIn_300ms_ease]">
        {/* Mesh + grain */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(40% 30% at 85% 8%, rgba(16,185,129,0.25), transparent 70%), radial-gradient(35% 30% at 20% 90%, rgba(187,247,208,0.16), transparent 75%)", maskImage: "radial-gradient(120% 100% at 100% 0%, rgba(0,0,0,0.9), rgba(0,0,0,0.5) 55%, transparent 80%)" }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light" style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAABaf7ccAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAK9JREFUeNrs0TEBACAMwLCT/5qQzSxO0QxG3CkAAAAAAAAAAAAAAACwQm7rQWwVg5rTg9m/VwAAAP9m9d9wAAAgf9cAAAB/1wAAAH/XAAAAgH/XAAAAv9cAAABy2H7zYwAAAAAAAAAAAAAAAAAAAAAAAEgJAgAAgP/TAQAA/9MBAAD/0wEAAP/TAQAA/9MBAABU1C6hAABP0b4BAQAAAAAAAPgWAgAAwGv8JgEAAIhuY3gAALp1wXwAAABJRU5ErkJggg==")', backgroundSize: "256px 256px" }} />

        {/* Close */}
        <button aria-label="Close" onClick={close} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/8 hover:bg-white/12 text-white border border-white/20 grid place-items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)] transition-colors">
          <span className="sr-only">Close</span>
          <CloseIcon />
        </button>

        {/* Hero */}
        <div className="p-7 text-white relative">
          <div className="absolute inset-0 -z-[1] opacity-70" aria-hidden style={{ background: "radial-gradient(900px 420px at 80% 0%, rgba(16,185,129,0.25), transparent 70%)" }} />
          <h3 id="schedule_title" className="text-2xl font-black leading-tight">Hai domande?</h3>
          <p id="schedule_desc" className="opacity-90 mt-1">Prenota una call veloce con i nostri specialisti.</p>
          <ul className="mt-4 flex gap-2 flex-wrap text-xs text-emerald-100/90">
            <li className="px-2 py-1 rounded-md border border-emerald-300/20 bg-emerald-400/10">Risposta entro 24h</li>
            <li className="px-2 py-1 rounded-md border border-emerald-300/20 bg-emerald-400/10">Niente spam</li>
            <li className="px-2 py-1 rounded-md border border-emerald-300/20 bg-emerald-400/10">ROI-first</li>
          </ul>
        </div>

        {/* Body */}
        <div className="p-5 pt-0 overflow-y-auto">
          {!done ? (
            <form className="grid gap-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field refEl={firstFieldRef} id="name" label="Your name" required />
                <Field id="email" label="Email" type="email" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field id="phone" label="Phone (optional)" />
                <Field id="company" label="Company" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select id="timepref" label="Preferred time">
                  <option value="">Select</option>
                  <option>Morning (9–12)</option>
                  <option>Afternoon (12–17)</option>
                  <option>Evening (17–19)</option>
                </Select>
                <Select id="timezone" label="Time zone">
                  <option value="">Auto</option>
                  <option>UTC−01</option>
                  <option>UTC</option>
                  <option>UTC+01 (CET)</option>
                  <option>UTC+02 (CEST)</option>
                </Select>
              </div>
              <Textarea id="note" label="How can we help?" rows={4} />

              <label className="flex items-center gap-3 select-none mt-1">
                <input type="checkbox" required className="sr-only peer" />
                <span className="w-11 h-6 rounded-full bg-white/15 relative transition peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-700 border border-white/20">
                  <span className="absolute top-1 left-1 w-[18px] h-[18px] rounded-full bg-white shadow transition-all peer-checked:left-6" />
                </span>
                <span className="text-sm text-white/90">I agree to be contacted regarding my request</span>
              </label>

              <button type="submit" disabled={submitting} className={`mt-1 h-12 rounded-xl font-black text-emerald-50 bg-gradient-to-r from-emerald-500 to-emerald-700 shadow-[0_12px_28px_rgba(16,185,129,0.35)] transition-transform disabled:opacity-70 ${submitting ? "animate-none" : "hover:translate-y-[-2px] active:translate-y-0"}`}>
                {submitting ? <span className="inline-flex items-center gap-2"><Spinner /> Sending…</span> : "Send request"}
              </button>

              <p className="text-xs text-white/60 mt-2">
                Preferisci email? Scrivici a <a className="underline hover:text-white" href="mailto:hello@planttec.example">hello@planttec.example</a>
              </p>
            </form>
          ) : (
            <div className="grid place-items-center py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 grid place-items-center mb-3"><CheckIcon /></div>
              <h4 className="text-white text-xl font-black">Richiesta inviata!</h4>
              <p className="text-white/80 mt-1 max-w-[36ch]">Ti risponderemo entro 24 ore. Controlla la tua inbox — potremmo chiederti qualche dettaglio in più.</p>
              <button onClick={close} className="mt-5 h-11 px-4 rounded-full font-black text-white bg-white/10 hover:bg-white/14 border border-white/20">Chiudi</button>
            </div>
          )}
        </div>
      </div>

      {/* Animazioni (ok multilinea perché dentro template literal) */}
      <style jsx global>{`
        @keyframes sheetIn { from { transform: translateX(20px); opacity: 0.6; } to { transform: translateX(0); opacity: 1; } }
        @keyframes backdropIn { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-[sheetIn_300ms_ease],
          .motion-safe\\:animate-[backdropIn_280ms_ease] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ------- piccoli componenti ------- */
function Field({ id, label, type = "text", required = false, refEl }) {
  return (
    <div className="relative">
      <input ref={refEl || null} id={id} name={id} type={type} required={required} placeholder=" " className="peer w-full rounded-xl px-3.5 pt-4 pb-2.5 outline-none transition text-white placeholder-transparent bg-white/5 border border-white/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/30" />
      <label htmlFor={id} className="absolute left-3.5 top-2 text-white/70 text-sm bg-neutral-950/70 px-1 rounded transition-all pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-200 peer-focus:bg-neutral-950/70">{label}</label>
    </div>
  );
}

function Textarea({ id, label, rows = 4 }) {
  return (
    <div className="relative">
      <textarea id={id} name={id} rows={rows} placeholder=" " className="peer w-full rounded-xl px-3.5 pt-4 pb-2.5 outline-none transition resize-y text-white placeholder-transparent bg-white/5 border border-white/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/30" />
      <label htmlFor={id} className="absolute left-3.5 top-2 text-white/70 text-sm bg-neutral-950/70 px-1 rounded transition-all pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-200 peer-focus:bg-neutral-950/70">{label}</label>
    </div>
  );
}

function Select({ id, label, children }) {
  return (
    <div className="relative">
      <select id={id} name={id} className="peer w-full appearance-none rounded-xl px-3.5 pt-5 pb-2.5 outline-none transition text-white bg-white/5 border border-white/20 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/30" defaultValue="">
        {children}
      </select>
      <label htmlFor={id} className="absolute left-3.5 top-2 text-white/70 text-sm bg-neutral-950/70 px-1 rounded transition-all pointer-events-none peer-focus:text-emerald-200">{label}</label>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/70">▾</span>
    </div>
  );
}

/* ------- Icons ------- */
function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function Spinner() {
  return (
    <svg className="animate-spin -ml-1 mr-1 h-5 w-5 text-emerald-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
      <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z"></path>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M20 7l-9 9-4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
