import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function NewHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [solOpen, setSolOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [sheet, setSheet] = useState(false); // <-- drawer "Schedule a call"

  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // chiudi language quando clicchi fuori
  useEffect(() => {
    const onDoc = (e) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header className={`hdr ${scrolled ? "scrolled" : ""}`} role="banner">
      {/* fascia utility */}
      <div className="util">
        <div className="inner">
          <nav className="util-nav" aria-label="Utilities">
            <Link href="/careers">Careers</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/login">Login</Link>
          </nav>

          <div className="util-right">
            {/* Language */}
            <div className="lang" ref={langRef}>
              <button
                className="langBtn"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                <Globe />
                <span>{lang}</span>
                <ChevronDown />
              </button>
              <ul className={`langMenu ${langOpen ? "show" : ""}`} role="listbox">
                {["EN", "NL", "IT"].map((l) => (
                  <li key={l}>
                    <button
                      className={`langItem ${lang === l ? "active" : ""}`}
                      role="option"
                      aria-selected={lang === l}
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                    >
                      {l === "EN" ? "English" : l === "NL" ? "Nederlands" : "Italiano"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* search */}
            <button className="iconBtn" aria-label="Search">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>

      {/* fascia principale */}
      <div className="main">
        <div className="inner">
          {/* logo */}
          <Link href="/" className="logo" aria-label="Planttec, Home">
            <span className="monogram">PT</span>
            <span className="brand">Planttec</span>
          </Link>

          {/* nav desktop */}
          <nav className="nav" aria-label="Main">
            <div
              className="dd"
              onMouseEnter={() => setSolOpen(true)}
              onMouseLeave={() => setSolOpen(false)}
            >
              <button
                className="link"
                aria-haspopup="true"
                aria-expanded={solOpen}
                onClick={() => setSolOpen((v) => !v)}
              >
                Solutions <ChevronDown />
              </button>

              {/* pannello dropdown allineato */}
              <div className={`panel ${solOpen ? "open" : ""}`} role="menu">
                <Link className="item" href="#">Greenhouse Analytics</Link>
                <Link className="item" href="#">Climate Strategy</Link>
                <Link className="item" href="#">Yield Forecasting</Link>
                <Link className="item" href="#">Systems Integration</Link>
              </div>
            </div>

            <Link href="/cases" className="link">Cases</Link>

            <div
              className="dd"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className="link"
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                onClick={() => setAboutOpen((v) => !v)}
              >
                About us <ChevronDown />
              </button>
              <div className={`panel ${aboutOpen ? "open" : ""}`} role="menu">
                <Link className="item" href="/about">Company</Link>
                <Link className="item" href="/team">Team</Link>
                <Link className="item" href="/certifications">Certifications</Link>
              </div>
            </div>

            <Link href="/news" className="link">News</Link>
            <Link href="/contact" className="link">Contact</Link>
          </nav>

          {/* CTA + burger */}
          <div className="right">
            {/* CTA apre il drawer */}
            <button type="button" className="cta" onClick={() => setSheet(true)}>
              Schedule a call <ArrowRight />
            </button>

            <button
              className={`burger ${mobile ? "open" : ""}`}
              aria-label="Open menu"
              aria-expanded={mobile}
              onClick={() => setMobile((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div className={`drawer ${mobile ? "show" : ""}`} role="dialog" aria-modal="true">
        <div className="drawer-body">
          <Link href="/solutions" className="m-link" onClick={() => setMobile(false)}>Solutions</Link>
          <Link href="/cases" className="m-link" onClick={() => setMobile(false)}>Cases</Link>
          <Link href="/about" className="m-link" onClick={() => setMobile(false)}>About us</Link>
          <Link href="/news" className="m-link" onClick={() => setMobile(false)}>News</Link>
          <Link href="/contact" className="m-link" onClick={() => setMobile(false)}>Contact</Link>
          <button className="m-cta" onClick={() => { setMobile(false); setSheet(true); }}>
            Schedule a call
          </button>
        </div>
      </div>

      {/* ------- SCHEDULE SHEET (banner) ------- */}
      <div className={`sheet ${sheet ? "show" : ""}`} role="dialog" aria-modal="true" aria-label="Schedule a call">
        <button className="x" aria-label="Close banner" onClick={() => setSheet(false)}>×</button>

        <div className="sheet-hero">
          <h3>Any Questions?</h3>
          <p>Book a quick call with our specialists.</p>
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="field">
              <input id="name" name="name" placeholder=" " required />
              <label htmlFor="name">Your name</label>
            </div>
            <div className="field">
              <input id="email" name="email" type="email" placeholder=" " required />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <input id="phone" name="phone" placeholder=" " />
              <label htmlFor="phone">Phone (optional)</label>
            </div>
            <div className="field">
              <input id="company" name="company" placeholder=" " />
              <label htmlFor="company">Company</label>
            </div>
          </div>

          <div className="field full">
            <textarea id="note" name="note" rows={4} placeholder=" " />
            <label htmlFor="note">How can we help?</label>
          </div>

          <label className="switch">
            <input type="checkbox" required />
            <span className="track" aria-hidden />
            <span className="txt">I agree to be contacted regarding my request</span>
          </label>

          <button type="submit" className="submit">Send request</button>
        </form>
      </div>
      <div className={`sheet-backdrop ${sheet ? "show" : ""}`} onClick={() => setSheet(false)} />

      <style jsx>{`
        /* Variabili locali (scoped al componente) */
        .hdr {
          --plant:#20c776;
          --plant-700:#15975a;
          --ink:#0a0b14;
          --ink-600:#3a3f46;
          --paper:#f3f6f4;
          position:sticky; top:0; z-index:80; background:transparent;
        }
        .hdr.scrolled .main{ box-shadow: 0 10px 30px rgba(0,0,0,.06); }

        /* fascia utility */
        .util{ background:#fff; border-bottom:1px solid rgba(0,0,0,.06); }
        .inner{
          max-width:1200px; margin:0 auto; padding:10px 20px;
          display:flex; align-items:center; justify-content:space-between;
        }
        .util-nav{ display:flex; gap:18px; }
        .util-nav a{ color:#4b5563; text-decoration:none; font-weight:700; font-size:14px; }
        .util-right{ display:flex; align-items:center; gap:8px; }

        .lang{ position:relative; }
        .langBtn{
          display:inline-flex; align-items:center; gap:8px;
          height:34px; padding:0 12px; border-radius:999px;
          background:#fff; border:1px solid rgba(0,0,0,.12);
          font-weight:900; color:#111827; cursor:pointer;
        }
        .langMenu{
          position:absolute; right:0; top:40px; min-width:180px;
          background:#fff; border:1px solid rgba(0,0,0,.1); border-radius:12px;
          box-shadow:0 12px 26px rgba(0,0,0,.12);
          padding:6px; opacity:0; transform:translateY(-6px);
          pointer-events:none; transition:all .18s ease;
        }
        .langMenu.show{ opacity:1; transform:translateY(0); pointer-events:auto; }
        .langItem{
          width:100%; text-align:left; padding:10px 12px; border-radius:8px;
          background:transparent; border:none; cursor:pointer; font-weight:800;
        }
        .langItem:hover{ background:rgba(32,199,118,.10); }
        .langItem.active{ background:rgba(32,199,118,.18); }

        .iconBtn{
          height:34px; width:34px; border-radius:999px; border:1px solid rgba(0,0,0,.12);
          background:#fff; display:grid; place-items:center; cursor:pointer;
        }

        /* fascia main */
        .main{ background:var(--paper); }
        .logo{ display:flex; align-items:center; gap:10px; text-decoration:none; color:var(--ink); }
        .monogram{
          width:40px; height:40px; border-radius:12px; display:grid; place-items:center;
          font-weight:900; color:#062a1a;
          background:radial-gradient(120% 120% at 20% 20%, var(--plant) 0%, #7fe3a7 55%, #e8fff1 100%);
          box-shadow:0 8px 22px rgba(32,199,118,.3);
        }
        .brand{ font-family:"Inter Tight", ui-sans-serif; font-weight:900; font-size:20px; letter-spacing:.2px; }

        .nav{ display:none; gap:22px; align-items:center; }
        @media (min-width:980px){ .nav{ display:flex; } }

        .link{
          display:inline-flex; align-items:center; gap:6px; background:none; border:none; cursor:pointer;
          font-weight:800; color:#0f172a; text-decoration:none; padding:10px 8px; border-radius:10px; line-height:1;
        }
        .link:hover{ background:rgba(0,0,0,.05); }

        /* dropdown pulito e allineato */
        .dd{ position:relative; }
        .panel{
          position:absolute; left:0; top:44px;
          width: 280px; /* larghezza chiara e costante */
          padding:8px;
          background:#fff; border:1px solid rgba(0,0,0,.08); border-radius:14px;
          box-shadow:0 18px 36px rgba(0,0,0,.12);
          opacity:0; transform:translateY(-6px); pointer-events:none; transition:all .18s ease;
        }
        .panel.open{ opacity:1; transform:translateY(0); pointer-events:auto; }
        .panel .item{
          display:block; padding:12px 12px; border-radius:10px; text-decoration:none;
          font-weight:750; color:#111827; white-space:nowrap;
        }
        .panel .item:hover{ background:rgba(32,199,118,.10); }

        .right{ display:flex; align-items:center; gap:10px; }
        .cta{
          display:inline-flex; align-items:center; gap:8px;
          height:44px; padding:0 18px; border-radius:999px;
          font-weight:900; color:#062a1a; background:linear-gradient(90deg, var(--plant), var(--plant-700));
          box-shadow:0 12px 28px rgba(32,199,118,.35); border:none; cursor:pointer;
        }
        .cta:hover{ transform:translateY(-1px); box-shadow:0 16px 34px rgba(32,199,118,.5); }

        .burger{
          display:inline-grid; place-items:center; width:44px; height:40px;
          background:#fff; border:1px solid rgba(0,0,0,.12); border-radius:10px; cursor:pointer;
        }
        .burger span{ width:20px; height:2px; background:#111827; border-radius:2px; }
        .burger span:not(:last-child){ margin-bottom:4px; }
        @media (min-width:980px){ .burger{ display:none; } }

        /* drawer mobile */
        .drawer{
          position:fixed; inset:0; background:rgba(0,0,0,.35);
          opacity:0; pointer-events:none; transition:opacity .2s ease; z-index:90;
        }
        .drawer.show{ opacity:1; pointer-events:auto; }
        .drawer-body{
          position:absolute; top:0; right:0; height:100%; width:min(86vw, 420px);
          background:#fff; box-shadow: -22px 0 40px rgba(0,0,0,.25);
          padding:18px; display:grid; gap:8px;
          transform:translateX(100%); transition:transform .26s cubic-bezier(.2,.8,.2,1);
        }
        .drawer.show .drawer-body{ transform:translateX(0); }
        .m-link{
          padding:12px; border-radius:10px; text-decoration:none; font-weight:800; color:#111827;
        }
        .m-link:hover{ background:rgba(0,0,0,.05); }
        .m-cta{
          margin-top:6px; display:inline-flex; align-items:center; justify-content:center;
          height:44px; border-radius:999px; text-decoration:none; font-weight:900; border:none; cursor:pointer;
          background:linear-gradient(90deg, var(--plant), var(--plant-700)); color:#062a1a;
          box-shadow:0 12px 28px rgba(32,199,118,.35);
        }

        /* ---- Schedule Sheet ---- */
        .sheet-backdrop{
          position:fixed; inset:0; background:rgba(0,0,0,.45);
          opacity:0; pointer-events:none; transition:opacity .22s ease; z-index:97;
        }
        .sheet-backdrop.show{ opacity:1; pointer-events:auto; }
        .sheet{
          position:fixed; top:0; right:0; height:100%; width:min(94vw, 520px); z-index:98;
          background:#fff; border-left:1px solid rgba(0,0,0,.08);
          transform:translateX(100%); transition:transform .28s cubic-bezier(.2,.8,.2,1);
          display:grid; grid-template-rows:auto 1fr; overflow:auto;
          box-shadow:-26px 0 60px rgba(0,0,0,.25);
        }
        .sheet.show{ transform:translateX(0); }
        .x{
          position:absolute; top:12px; right:12px; width:36px; height:36px;
          border-radius:999px; border:1px solid rgba(0,0,0,.12); background:#fff; cursor:pointer;
          font-size:22px; line-height:1; display:grid; place-items:center;
        }

        .sheet-hero{
          padding:22px 22px 16px;
          background:
            radial-gradient(650px 320px at 80% 10%, rgba(21,151,90,.35), transparent 70%),
            #0b1412;
          color:#fff;
        }
        .sheet-hero h3{ margin:6px 0 6px; font-size:28px; }
        .sheet-hero p{ margin:0; opacity:.9; }

        .form{ padding:16px 18px 24px; display:grid; gap:12px; }
        .row{ display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media (max-width:560px){ .row{ grid-template-columns:1fr; } }

        .field{ position:relative; display:grid; }
        .field.full{ grid-column:1 / -1; }
        .field input, .field textarea{
          width:100%; background:#fff; border:1px solid rgba(0,0,0,.14);
          border-radius:12px; padding:14px 12px 12px; font-size:14.5px; outline:none;
          transition:border-color .2s ease, box-shadow .2s ease;
        }
        .field textarea{ resize:vertical; }
        .field input:focus, .field textarea:focus{
          border-color:var(--plant); box-shadow:0 0 0 3px rgba(32,199,118,.25);
        }
        .field label{
          position:absolute; left:12px; top:12px; font-size:13px; color:#6b7280;
          transition:transform .18s ease, color .18s ease, font-size .18s ease, top .18s ease;
          pointer-events:none; background:#fff; padding:0 4px; border-radius:6px;
        }
        .field input:not(:placeholder-shown)+label,
        .field textarea:not(:placeholder-shown)+label,
        .field input:focus+label,
        .field textarea:focus+label{
          top:-8px; font-size:11px; color:#374151; box-shadow:0 0 0 4px #fff inset;
        }

        .switch{
          display:flex; align-items:center; gap:10px; margin-top:2px; user-select:none;
        }
        .switch input{ position:absolute; opacity:0; }
        .track{
          width:44px; height:24px; border-radius:999px; background:rgba(0,0,0,.12); position:relative;
          transition:background .2s ease;
        }
        .track::after{
          content:""; position:absolute; top:50%; left:3px; transform:translateY(-50%);
          width:18px; height:18px; border-radius:999px; background:#fff; box-shadow:0 2px 6px rgba(0,0,0,.25);
          transition:left .2s ease;
        }
        .switch input:checked + .track{ background:linear-gradient(90deg, var(--plant), var(--plant-700)); }
        .switch input:checked + .track::after{ left:23px; }
        .txt{ font-size:13.5px; color:#111827; }

        .submit{
          margin-top:4px; height:46px; border:none; border-radius:12px; cursor:pointer;
          font-weight:900; color:#062a1a; background:linear-gradient(90deg, var(--plant), var(--plant-700));
          box-shadow:0 12px 28px rgba(32,199,118,.35);
        }
        .submit:hover{ transform:translateY(-1px); box-shadow:0 16px 36px rgba(32,199,118,.5); }
      `}</style>
    </header>
  );
}

/* ---------------- Icons ---------------- */
function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function SearchIcon(){
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function ArrowRight(){
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function Globe(){
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M3 12h18M12 3c3 3.6 3 13.4 0 18M12 3c-3 3.6-3 13.4 0 18" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  );
}
