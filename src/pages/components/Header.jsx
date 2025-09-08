import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);          // mobile menu
  const [langOpen, setLangOpen] = useState(false);  // language popover
  const [lang, setLang] = useState("EN");           // current language
  const [drawer, setDrawer] = useState(false);      // schedule drawer

  // chiudi popover al click fuori
  const langRef = useRef(null);
  useEffect(() => {
    const onDocClick = (e) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const NavLinks = ({ onClick }) => (
    <>
      <li><Link href="/about" className="link" onClick={onClick}>About Us</Link></li>
      <li><Link href="/case-studies" className="link" onClick={onClick}>Case Studies</Link></li>
      <li><Link href="/blog" className="link" onClick={onClick}>Blog</Link></li>
      <li><Link href="/contact" className="link" onClick={onClick}>Contact</Link></li>
      <li>
        <button className="link schedule" onClick={() => { setDrawer(true); onClick?.(); }}>
          Schedule
        </button>
      </li>
    </>
  );

  return (
    <>
      <header className="header">
        <div className="container">
          {/* Logo */}
          <Link href="/" className="logo" aria-label="Planttec, Home">
            <span className="mark">PT</span>
            <span className="brand">Planttec</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav" aria-label="Main">
            <ul>
              <NavLinks />
            </ul>
          </nav>

          {/* Language + CTA (desktop) */}
          <div className="right">
            <div className="lang" ref={langRef}>
              <button
                className="langBtn"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen(v => !v)}
              >
                <GlobeIcon />
                <span>{lang}</span>
              </button>
              <ul className={`langMenu ${langOpen ? "show" : ""}`} role="listbox" aria-label="Select language">
                {["EN","NL","IT"].map(code => (
                  <li key={code}>
                    <button
                      className={`langItem ${lang === code ? "active" : ""}`}
                      role="option"
                      aria-selected={lang === code}
                      onClick={() => { setLang(code); setLangOpen(false); }}
                    >
                      {code === "EN" ? "English" : code === "NL" ? "Nederlands" : "Italiano"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contact" className="btn">Let’s talk</Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`drawer ${open ? "show" : ""}`} role="dialog" aria-modal="true">
          <nav className="drawer-nav" aria-label="Mobile">
            <ul className="mobileList">
              <NavLinks onClick={() => setOpen(false)} />
            </ul>

            {/* Language in mobile */}
            <div className="mobileLang">
              <span>Language</span>
              <div className="chips">
                {["EN","NL","IT"].map(code => (
                  <button
                    key={code}
                    className={`chip ${lang === code ? "active" : ""}`}
                    onClick={() => setLang(code)}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>

            <Link href="/contact" className="drawer-btn" onClick={() => setOpen(false)}>
              Let’s talk
            </Link>
          </nav>
        </div>
      </header>

      {/* RIGHT DRAWER: SCHEDULE */}
      <aside className={`sched ${drawer ? "open" : ""}`} aria-hidden={!drawer}>
        <div className="panel" role="dialog" aria-modal="true" aria-label="Schedule a call">
          <button className="close" aria-label="Close" onClick={() => setDrawer(false)}>×</button>

          <div className="hero">
            <h3>Any Questions?</h3>
            <button className="email">Send an email</button>
          </div>

          <div className="body">
            <p className="lead">Get in contact with our specialists:</p>

            <div className="person">
              <img src="/specialist1.jpg" alt="Martin van Tol" />
              <div>
                <div className="p-name">Martin van Tol</div>
                <div className="p-role">Sales Manager</div>
                <a href="tel:+31650037808">+31 650 037 808</a><br />
                <a href="mailto:mto@planttec.com">mto@planttec.com</a>
              </div>
            </div>

            <div className="person">
              <img src="/specialist2.jpg" alt="Sara Lasso López" />
              <div>
                <div className="p-name">Sara Lasso López</div>
                <div className="p-role">Account Executive · North America</div>
                <a href="mailto:sl@planttec.com">sl@planttec.com</a>
              </div>
            </div>

            <Link href="/contact" className="secondary">Or go to the contact page →</Link>
          </div>
        </div>
        <button className="backdrop" aria-label="Close" onClick={() => setDrawer(false)} />
      </aside>

      <style jsx>{`
        :global(:root) {
          --plant-green: #2ecc71;
          --plant-green-700: #1fa45a;
          --nav: #eaf5ee;                 /* colore link nav */
          --nav-dim: rgba(234,245,238,.85);
        }

        /* Header con leggero gradient per contrasto sullo sfondo scuro */
        .header {
          position: absolute; inset: 0 0 auto 0;
          z-index: 60;
          padding: 14px 24px;
          color: var(--nav);
          background: linear-gradient(to bottom, rgba(6,14,12,.55), rgba(6,14,12,0));
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        .container {
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          align-items: center; gap: 18px;
          max-width: 1200px; margin: 0 auto;
        }

        /* Logo */
        .logo { display:inline-flex; align-items:center; gap:10px; text-decoration:none; color:var(--nav); }
        .mark {
          display:grid; place-items:center;
          width:36px; height:36px; border-radius:10px;
          font-weight:900; letter-spacing:.5px;
          background: radial-gradient(120% 120% at 20% 20%, var(--plant-green) 0%, #7fe3a7 50%, #e8fff1 100%);
          color:#0b2a17; box-shadow: 0 6px 18px rgba(46,204,113,.45);
        }
        .brand {
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-weight:800; font-size:18px; letter-spacing:.2px; white-space:nowrap;
          text-shadow: 0 8px 24px rgba(0,0,0,.35);
        }

        /* Nav (forza colore chiaro) */
        .nav ul { display:none; list-style:none; margin:0; padding:0; gap:28px; }
        @media (min-width: 980px){ .nav ul { display:flex; } }
        .link {
          position:relative; text-decoration:none;
          color: var(--nav) !important;         /* <-- leggibilità */
          font-family:"Inter Tight",sans-serif; font-weight:700; font-size:15px;
          text-shadow: 0 1px 8px rgba(0,0,0,.25);
          transition: opacity .2s ease;
        }
        .link:hover { opacity: 1; }
        .link::after{
          content:""; position:absolute; left:0; bottom:-6px; height:2px; width:100%;
          background: linear-gradient(90deg, var(--plant-green), transparent 70%);
          transform:scaleX(0); transform-origin:left; transition:transform .22s ease; border-radius:2px;
        }
        .link:hover::after{ transform:scaleX(1); }
        .schedule { background:none; border:none; cursor:pointer; padding:0; color: var(--nav); }

        .right { display:none; align-items:center; gap:12px; }
        @media (min-width: 980px){ .right{ display:flex; } }

        .btn{
          display:inline-flex; align-items:center; gap:8px;
          padding:10px 16px; border-radius:12px; text-decoration:none;
          font-weight:800; font-family:"Inter Tight",sans-serif;
          background: linear-gradient(90deg, var(--plant-green), var(--plant-green-700));
          color: #08210f; box-shadow: 0 10px 24px rgba(46,204,113,.32);
        }

        /* Language (chiaro “glass”) */
        .lang{ position:relative; }
        .langBtn{
          display:inline-flex; align-items:center; gap:8px;
          height:40px; padding:0 12px; border-radius:10px;
          background: rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.22);
          color:#fff; font-weight:800; cursor:pointer;
          box-shadow: 0 8px 22px rgba(0,0,0,.25);
        }
        .langMenu{
          position:absolute; right:0; top:48px; min-width:180px;
          background: rgba(12,16,18,.94); backdrop-filter: blur(10px);
          border:1px solid rgba(255,255,255,.18); border-radius:12px;
          padding:6px; list-style:none; margin:0; opacity:0; transform:translateY(-6px);
          pointer-events:none; transition: all .2s ease; color:#fff;
        }
        .langMenu.show{ opacity:1; transform:translateY(0); pointer-events:auto; }
        .langItem{
          width:100%; text-align:left; padding:10px 12px; border-radius:8px; color:#f2fff7;
          background:transparent; border:none; cursor:pointer; font-weight:800;
        }
        .langItem:hover{ background: rgba(255,255,255,.08); }
        .langItem.active{ background: rgba(46,204,113,.22); }

        /* Burger */
        .burger{ margin-left:auto; width:44px; height:40px; border:none; border-radius:10px;
          background: rgba(255,255,255,.14); display:grid; place-items:center; cursor:pointer; }
        .burger span{ width:20px; height:2px; background:#fff; border-radius:2px;
          transition: transform .3s ease, opacity .3s ease; }
        @media (min-width:980px){ .burger{ display:none; } }
        .burger.open span:nth-child(1){ transform: translateY(5px) rotate(45deg); }
        .burger.open span:nth-child(2){ opacity:0; }
        .burger.open span:nth-child(3){ transform: translateY(-5px) rotate(-45deg); }

        /* Mobile Drawer */
        .drawer{
          position: fixed; inset: 64px 16px auto 16px;
          background: rgba(10,14,12,.92); border:1px solid rgba(255,255,255,.12);
          border-radius:14px; backdrop-filter: blur(12px);
          transform: translateY(-16px); opacity:0; pointer-events:none; transition: all .28s ease; z-index: 70;
          color:#fff;
        }
        .drawer.show{ transform:translateY(0); opacity:1; pointer-events:auto; }
        @media (min-width:980px){ .drawer{ display:none; } }
        .drawer-nav{ padding:16px; display:grid; gap:14px; }
        .mobileList{ list-style:none; margin:0; padding:0; display:grid; gap:8px; }
        .drawer-nav .link{ display:block; padding:12px 10px; border-radius:10px; color:#fff !important; }
        .drawer-nav .link:hover{ background: rgba(255,255,255,.08); }
        .drawer-btn{
          margin-top:6px; padding:12px 14px; border-radius:10px; text-align:center;
          font-weight:800; background: linear-gradient(90deg, var(--plant-green), var(--plant-green-700)); color:#08210f;
        }
        .mobileLang{ margin-top:6px; }
        .mobileLang span{ font-weight:800; opacity:.9; }
        .chips{ display:flex; gap:8px; margin-top:8px; }
        .chip{
          padding:8px 10px; border-radius:999px; border:1px solid rgba(255,255,255,.22);
          background: rgba(255,255,255,.12); color:#fff; font-weight:800;
        }
        .chip.active{ background: rgba(46,204,113,.28); }

        /* Schedule Drawer */
        .sched{ position: fixed; inset:0; pointer-events:none; z-index:80; }
        .sched.open{ pointer-events:auto; }
        .panel{
          position:absolute; top:0; right:0; height:100%; width:min(520px, 92vw);
          background: #0b1512;
          transform: translateX(100%); transition: transform .34s cubic-bezier(.2,.8,.2,1);
          border-left: 1px solid rgba(255,255,255,.08);
          color:#fff; display:flex; flex-direction:column;
          background-image: radial-gradient(800px 400px at 80% -10%, rgba(46,204,113,.25), transparent 60%);
        }
        .sched.open .panel{ transform: translateX(0); }
        .backdrop{
          position:absolute; inset:0; background: rgba(0,0,0,.38); opacity:0; transition:opacity .3s ease;
          pointer-events:none;
        }
        .sched.open .backdrop{ opacity:1; pointer-events:auto; }

        .close{
          position:absolute; top:14px; right:14px; width:36px; height:36px; border-radius:999px;
          border:1px solid rgba(255,255,255,.22); background: rgba(255,255,255,.06);
          color:#fff; font-size:22px; cursor:pointer;
        }

        .hero{
          padding: 48px 24px 20px 24px; text-align:center;
        }
        .hero h3{
          margin:0 0 12px; font-family:"Inter Tight",sans-serif; font-weight:800;
          font-size: clamp(24px, 3.6vw, 38px);
        }
        .email{
          display:inline-flex; align-items:center; justify-content:center;
          height:46px; padding:0 18px; border-radius:999px; border:none;
          background:#20c37b; color:#062a1a; font-weight:800; cursor:pointer;
          box-shadow: 0 12px 30px rgba(32,195,123,.35);
        }

        .body{ padding: 16px 24px 24px; background:#fff; color:#0a0f0d; border-top-left-radius:18px; flex:1; overflow:auto; }
        .lead{ margin:6px 0 16px; color:#111; font-weight:700; }
        .person{ display:flex; gap:12px; padding:14px 0; border-top:1px solid #e5e7eb; }
        .person:first-of-type{ border-top: none; }
        .person img{ width:72px; height:72px; border-radius:12px; object-fit:cover; background:#eef2f6; }
        .p-name{ font-weight:800; }
        .p-role{ font-size:13px; color:#475569; margin:2px 0 6px; }
        .body a{ color:#16a34a; text-decoration:none; font-weight:700; }
        .secondary{ display:inline-block; margin-top:14px; color:#0a7a3b; font-weight:800; }
      `}</style>
    </>
  );
}

/* ---------------- Icons ---------------- */
function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c3 3.6 3 13.4 0 18M12 3c-3 3.6-3 13.4 0 18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
