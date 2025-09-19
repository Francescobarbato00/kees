// components/NewHeader.jsx
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function NewHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [onHero, setOnHero] = useState(false);
  const [toContactFx, setToContactFx] = useState(false);
  const [toSolutionsFx, setToSolutionsFx] = useState(false); // <<< NEW
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const el = document.getElementById("hero-sentinel");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const openSchedule = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-schedule"));
    }
  };

  // ========= CONTACT (già presente) =========
  const goToContact = (e) => {
    e?.preventDefault?.();
    const target = document.getElementById("contact");
    setToContactFx(true);
    setMobile(false);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const doScroll = () => {
      if (!target) {
        window.location.assign("/contact#contact");
        return;
      }
      const headerH = 84;
      const y = window.scrollY + target.getBoundingClientRect().top - headerH;
      window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
      window.dispatchEvent(new CustomEvent("contact-highlight"));
    };

    if (reduce) {
      doScroll();
      setToContactFx(false);
      return;
    }
    setTimeout(doScroll, 220);
    setTimeout(() => setToContactFx(false), 1100);
  };

  // ========= SOLUTIONS (NEW) =========
  const goToSolutions = (e) => {
    e?.preventDefault?.();
    const target = document.getElementById("solutions"); // <<< sezione SolutionsGrid
    setToSolutionsFx(true);
    setMobile(false);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const doScroll = () => {
      if (!target) {
        // fallback: pagina dedicata se non c'è la sezione
        window.location.assign("/solutions#solutions");
        return;
      }
      const headerH = 84;
      const y = window.scrollY + target.getBoundingClientRect().top - headerH;
      window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
      // segnala al componente per “pulse”/highlight
      window.dispatchEvent(new CustomEvent("solutions-highlight"));
    };

    if (reduce) {
      doScroll();
      setToSolutionsFx(false);
      return;
    }
    setTimeout(doScroll, 220);
    setTimeout(() => setToSolutionsFx(false), 1100);
  };

  const headerBase =
    "sticky top-0 z-50 backdrop-blur-xl transition-[background,box-shadow] duration-300 motion-reduce:transition-none";
  const headerLook = (!scrolled && !onHero)
    ? "bg-neutral-950/90 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
    : (onHero && !scrolled)
    ? "bg-neutral-950/30"
    : "bg-neutral-950/60 shadow-[0_8px_30px_rgba(0,0,0,0.35)]";

  return (
    <header className={`${headerBase} ${headerLook}`} aria-label="Header">
      {/* Utility bar */}
      <div className="border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-5 py-2.5 flex items-center justify-between">
          <nav className="flex gap-4" aria-label="Utilities">
            <Link href="/privacy" className="text-sm font-bold text-slate-100/80 hover:text-white transition-colors">Privacy</Link>
            <Link href="/faq" className="text-sm font-bold text-slate-100/80 hover:text-white transition-colors">FAQ</Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* Language */}
            <div className="relative" ref={langRef}>
              <button
                className="inline-flex items-center gap-2 h-9 px-3 rounded-full font-extrabold text-slate-100/90 hover:text-white bg-white/5 hover:bg-white/8 border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_6px_20px_rgba(0,0,0,0.35)] transition-colors"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen(v => !v)}
              >
                <Globe /><span>{lang}</span><ChevronDown />
              </button>

              <ul
                className={`absolute right-0 top-11 min-w-[200px] p-1 rounded-xl border border-white/12 bg-neutral-900/70 backdrop-blur-xl shadow-[0_24px_50px_rgba(0,0,0,0.45)] transition-all ${langOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
                role="listbox"
              >
                {["EN","NL","IT"].map((l)=>(
                  <li key={l}>
                    <button
                      className={`w-full text-left px-3 py-2.5 rounded-lg font-extrabold text-slate-100/90 hover:text-white ${lang===l ? "bg-emerald-400/15 text-white border border-emerald-400/20" : "hover:bg-white/6"}`}
                      role="option" aria-selected={lang===l}
                      onClick={()=>{setLang(l); setLangOpen(false);}}
                    >
                      {l==="EN"?"English":l==="NL"?"Nederlands":"Italiano"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Search */}
            <button
              className="h-9 w-9 rounded-full grid place-items-center text-slate-100/90 hover:text-white bg-white/5 hover:bg-white/8 border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div>
        <div className="max-w-screen-xl mx-auto px-5 py-3 flex items-center justify-between">
          <Link href="/" aria-label="Planttec, Home" className="flex items-center gap-3 text-white no-underline">
            <span className="relative w-10 h-10 rounded-2xl grid place-items-center font-black text-emerald-100 border border-white/12 bg-white/6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.45)]">
              PT
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-emerald-400/30" />
            </span>
            <span className="font-black text-xl tracking-tight text-white/95">Planttec</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main">
            {/* Solutions -> scroll + effetto */}
            <button
              onClick={goToSolutions}
              className="px-3 py-2 rounded-lg font-extrabold text-slate-100/85 hover:text-white hover:bg-white/6 border border-transparent hover:border-white/10 transition-colors"
            >
              Solutions
            </button>

            <Link href="/news" className="px-3 py-2 rounded-lg font-extrabold text-slate-100/85 hover:text-white hover:bg-white/6 border border-transparent hover:border-white/10 transition-colors">News</Link>

            <button
              onClick={goToContact}
              className="px-3 py-2 rounded-lg font-extrabold text-slate-100/85 hover:text-white hover:bg-white/6 border border-transparent hover:border-white/10 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openSchedule}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full font-black text-emerald-50 bg-gradient-to-r from-emerald-500 to-emerald-700 shadow-[0_12px_28px_rgba(16,185,129,0.35)] hover:translate-y-[-2px] active:translate-y-0 transition-transform"
            >
              Schedule a call <ArrowRight />
            </button>

            <button
              className="md:hidden inline-grid place-items-center w-11 h-10 rounded-xl text-white bg-white/6 border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors hover:bg-white/10"
              aria-label="Open menu" aria-expanded={mobile}
              onClick={()=>setMobile(v=>!v)}
            >
              <span className="w-5 h-0.5 bg-white rounded" />
              <span className="w-5 h-0.5 bg-white rounded my-1" />
              <span className="w-5 h-0.5 bg-white rounded" />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer mobile */}
      {mobile && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={()=>setMobile(false)} />
          <div className="absolute top-0 right-0 h-full w-[86vw] max-w-md bg-neutral-900/70 backdrop-blur-xl border-l border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)] p-4 grid gap-2">
            <button
              onClick={goToSolutions}
              className="px-3 py-3 text-left rounded-lg font-extrabold text-slate-100/95 hover:text-white hover:bg-white/6 border border-transparent hover:border-white/10 transition-colors"
            >
              Solutions
            </button>
            <Link href="/cases" className="px-3 py-3 rounded-lg font-extrabold text-slate-100/95 hover:text-white hover:bg-white/6 border border-transparent hover:border-white/10 transition-colors" onClick={()=>setMobile(false)}>Cases</Link>
            <Link href="/about" className="px-3 py-3 rounded-lg font-extrabold text-slate-100/95 hover:text-white hover:bg-white/6 border border-transparent hover:border-white/10 transition-colors" onClick={()=>setMobile(false)}>About us</Link>
            <Link href="/news" className="px-3 py-3 rounded-lg font-extrabold text-slate-100/95 hover:text-white hover:bg-white/6 border border-transparent hover:border-white/10 transition-colors" onClick={()=>setMobile(false)}>News</Link>
            <button
              onClick={goToContact}
              className="px-3 py-3 text-left rounded-lg font-extrabold text-slate-100/95 hover:text-white hover:bg-white/6 border border-transparent hover:border-white/10 transition-colors"
            >
              Contact
            </button>
            <button
              className="mt-2 h-11 rounded-full font-black text-emerald-50 bg-gradient-to-r from-emerald-500 to-emerald-700 shadow-[0_12px_28px_rgba(16,185,129,0.35)] hover:translate-y-[-2px] active:translate-y-0 transition-transform"
              onClick={() => { setMobile(false); openSchedule(); }}
            >
              Schedule a call
            </button>
          </div>
        </div>
      )}

      {/* Overlay → Contact */}
      <div className={`pointer-events-none fixed inset-0 z-[70] ${toContactFx ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
        <div className={`absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px] ${toContactFx ? "contactFx-fadeIn" : ""}`} />
        <div className={`absolute -inset-20 ${toContactFx ? "contactFx-sweep" : ""}`}
          style={{
            background:
              "radial-gradient(800px 400px at 10% -10%, rgba(16,185,129,0.26), transparent 60%)," +
              "radial-gradient(800px 400px at 110% 110%, rgba(5,150,105,0.22), transparent 60%)"
          }}
        />
      </div>

      {/* Overlay → Solutions (NEW) */}
      <div className={`pointer-events-none fixed inset-0 z-[70] ${toSolutionsFx ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
        <div className={`absolute inset-0 bg-neutral-950/30 backdrop-blur-[2px] ${toSolutionsFx ? "solutionsFx-fadeIn" : ""}`} />
        <div className={`absolute -inset-20 ${toSolutionsFx ? "solutionsFx-sweep" : ""}`}
          style={{
            background:
              "radial-gradient(900px 420px at -10% 110%, rgba(46,204,113,0.28), transparent 60%)," +
              "radial-gradient(900px 420px at 110% -10%, rgba(31,164,90,0.24), transparent 60%)"
          }}
        />
      </div>

      {/* keyframes global per le sweep */}
      <style jsx global>{`
        @keyframes contactSweep {
          0%   { transform: translate(-18%, 18%) rotate(-2deg); opacity: 0; }
          25%  { opacity: 1; }
          100% { transform: translate(18%, -18%) rotate(-2deg); opacity: 0; }
        }
        @keyframes contactFadeIn { from { opacity: 0 } to { opacity: 1 } }
        .contactFx-sweep { animation: contactSweep 1s cubic-bezier(.16,1,.3,1) forwards; }
        .contactFx-fadeIn { animation: contactFadeIn .22s ease-out forwards; }

        @keyframes solutionsSweep {
          0%   { transform: translate(18%, 18%) rotate(2deg); opacity: 0; }
          25%  { opacity: 1; }
          100% { transform: translate(-18%, -18%) rotate(2deg); opacity: 0; }
        }
        @keyframes solutionsFadeIn { from { opacity: 0 } to { opacity: 1 } }
        .solutionsFx-sweep { animation: solutionsSweep 1s cubic-bezier(.16,1,.3,1) forwards; }
        .solutionsFx-fadeIn { animation: solutionsFadeIn .22s ease-out forwards; }

        @media (prefers-reduced-motion: reduce){
          .contactFx-sweep,.contactFx-fadeIn,.solutionsFx-sweep,.solutionsFx-fadeIn { animation: none !important; }
        }
      `}</style>
    </header>
  );
}

/* Icons */
function ChevronDown(){return(<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);}
function SearchIcon(){return(<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>);}
function ArrowRight(){return(<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);}
function Globe(){return(<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="M3 12h18M12 3c3 3.6 3 13.4 0 18M12 3c-3 3.6-3 13.4 0 18" stroke="currentColor" strokeWidth="1.7"/></svg>);}
