// components/StickyHeader.jsx
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [drawer, setDrawer] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const langRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setVisible(y > 80);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(100, Math.max(0, (y / h) * 100)) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close language popup on outside click
  useEffect(() => {
    const onDoc = (e) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <>
      <header className={`sticky ${visible ? "visible" : ""}`} role="banner" aria-label="Sticky navigation">
        {/* Scroll progress */}
        <div className="bar" style={{ width: `${progress}%` }} aria-hidden />

        <div className="wrap">
          {/* Logo */}
          <Link href="/" className="logo" aria-label="Planttec, Home">
            <span className="mark">PT</span>
            <span className="brand">Planttec</span>
          </Link>

          {/* Nav */}
          <nav className="nav" aria-label="Sticky">
            <ul>
              <li><Link href="/about" className="item">About Us</Link></li>
              <li><Link href="/case-studies" className="item">Case Studies</Link></li>
              <li><Link href="/blog" className="item">Blog</Link></li>
              <li><Link href="/contact" className="item">Contact</Link></li>
              <li>
                <button className="item schedule" onClick={() => setDrawer(true)}>Schedule</button>
              </li>
            </ul>
          </nav>

          {/* Right: language + CTA */}
          <div className="right">
            <div className="lang" ref={langRef}>
              <button
                className="langBtn"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                <GlobeIcon />
                <span>{lang}</span>
              </button>
              <ul className={`langMenu ${langOpen ? "show" : ""}`} role="listbox" aria-label="Select language">
                {["EN", "NL", "IT"].map((code) => (
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
        </div>

        <style jsx>{`
          :global(:root) {
            --plant: #2ecc71;
            --plant-700: #1fa45a;
            --ink: #0a0b14;
          }
          .sticky {
            position: fixed;
            top: 0; left: 0; width: 100%;
            transform: translateY(-100%);
            transition: transform .4s ease;
            z-index: 80;
            /* glass alto contrasto per leggibilità ovunque */
            background: rgba(8, 12, 14, 0.65);
            backdrop-filter: saturate(140%) blur(12px);
            box-shadow: 0 10px 30px rgba(0,0,0,.18);
            border-bottom: 1px solid rgba(255,255,255,.1);
            color: #eefaf2;
          }
          .sticky.visible { transform: translateY(0); }

          .bar {
            position: absolute;
            left: 0; top: 0; height: 4px;
            background: linear-gradient(90deg, var(--plant), var(--plant-700));
            border-radius: 0 8px 8px 0;
            box-shadow: 0 8px 18px rgba(46, 204, 113, 0.35);
          }

          .wrap {
            max-width: 1200px;
            margin: 0 auto;
            padding: 18px 22px;               /* <-- più alto */
            min-height: 80px;                  /* altezza percepita */
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 20px;
            align-items: center;
          }

          /* Logo */
          .logo { display: inline-flex; align-items: center; gap: 12px; text-decoration: none; color: inherit; }
          .mark {
            width: 40px; height: 40px; border-radius: 12px;
            display: grid; place-items: center; font-weight: 900;
            background: radial-gradient(120% 120% at 25% 20%, var(--plant) 0%, #7fe3a7 55%, #e8fff1 100%);
            color: #0c2a17; box-shadow: 0 8px 22px rgba(46,204,113,.45);
          }
          .brand {
            font-family: "Inter Tight", ui-sans-serif, system-ui;
            font-size: 18px; font-weight: 800; letter-spacing: .2px;
            text-shadow: 0 10px 24px rgba(0,0,0,.35);
          }

          /* Nav */
          .nav ul {
            display: none;
            justify-content: center;
            gap: 28px;
            list-style: none;
            margin: 0; padding: 0;
          }
          @media (min-width: 980px) { .nav ul { display: flex; } }

          .item {
            position: relative;
            text-decoration: none;
            color: #f0fff6;
            font-weight: 800;
            font-family: "Inter Tight", sans-serif;
            font-size: 15.5px;
            text-shadow: 0 1px 8px rgba(0,0,0,.25);
            transition: opacity .2s ease;
          }
          .item:hover { opacity: .95; }
          .item::after {
            content: "";
            position: absolute; left: 0; bottom: -8px;
            width: 100%; height: 2px;
            background: linear-gradient(90deg, var(--plant), transparent 70%);
            transform: scaleX(0); transform-origin: left;
            transition: transform .22s ease; border-radius: 3px;
          }
          .item:hover::after { transform: scaleX(1); }
          .schedule { background: none; border: none; padding: 0; cursor: pointer; color: inherit; }

          /* Right area */
          .right { display: none; align-items: center; gap: 12px; }
          @media (min-width: 980px) { .right { display: flex; } }

          .btn {
            display: inline-flex; align-items: center;
            height: 46px; padding: 0 18px;
            border-radius: 12px; text-decoration: none;
            font-weight: 900; color: #08210f;
            background: linear-gradient(90deg, var(--plant), var(--plant-700));
            box-shadow: 0 12px 28px rgba(46,204,113,.35);
          }
          .btn:hover { transform: translateY(-1px); box-shadow: 0 16px 36px rgba(46,204,113,.5); }

          /* Language */
          .lang { position: relative; }
          .langBtn {
            display: inline-flex; align-items: center; gap: 8px;
            height: 44px; padding: 0 12px; border-radius: 10px;
            background: rgba(255,255,255,.14);
            border: 1px solid rgba(255,255,255,.22);
            color: #fff; font-weight: 900;
            box-shadow: 0 8px 22px rgba(0,0,0,.25);
            cursor: pointer;
          }
          .langMenu {
            position: absolute; right: 0; top: 52px; min-width: 180px;
            background: rgba(12,16,18,.94); color: #fff;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,.18);
            border-radius: 12px; padding: 6px;
            list-style: none; margin: 0;
            opacity: 0; transform: translateY(-6px);
            pointer-events: none; transition: all .2s ease;
          }
          .langMenu.show { opacity: 1; transform: translateY(0); pointer-events: auto; }
          .langItem {
            width: 100%; text-align: left; padding: 10px 12px; border-radius: 8px;
            color: #f2fff7; background: transparent; border: none; cursor: pointer; font-weight: 800;
          }
          .langItem:hover { background: rgba(255,255,255,.08); }
          .langItem.active { background: rgba(46,204,113,.22); }
        `}</style>
      </header>

      {/* Schedule drawer (right) */}
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

        <style jsx>{`
          .sched { position: fixed; inset: 0; pointer-events: none; z-index: 90; }
          .sched.open { pointer-events: auto; }
          .panel {
            position: absolute; top: 0; right: 0; height: 100%; width: min(520px, 92vw);
            background: #0b1512; color: #fff;
            transform: translateX(100%); transition: transform .34s cubic-bezier(.2,.8,.2,1);
            border-left: 1px solid rgba(255,255,255,.08);
            background-image: radial-gradient(800px 400px at 80% -10%, rgba(46,204,113,.25), transparent 60%);
            display: flex; flex-direction: column;
          }
          .sched.open .panel { transform: translateX(0); }

          .backdrop {
            position: absolute; inset: 0;
            background: rgba(0,0,0,.38);
            opacity: 0; transition: opacity .3s ease; pointer-events: none;
          }
          .sched.open .backdrop { opacity: 1; pointer-events: auto; }

          .close {
            position: absolute; top: 14px; right: 14px;
            width: 36px; height: 36px; border-radius: 999px;
            border: 1px solid rgba(255,255,255,.22);
            background: rgba(255,255,255,.06); color: #fff;
            font-size: 22px; cursor: pointer;
          }
          .hero { padding: 48px 24px 20px; text-align: center; }
          .hero h3 {
            margin: 0 0 12px;
            font-family: "Inter Tight", sans-serif; font-weight: 800;
            font-size: clamp(24px, 3.6vw, 38px);
          }
          .email {
            display: inline-flex; align-items: center; justify-content: center;
            height: 46px; padding: 0 18px; border-radius: 999px; border: none;
            background: #20c37b; color: #062a1a; font-weight: 800; cursor: pointer;
            box-shadow: 0 12px 30px rgba(32,195,123,.35);
          }
          .body {
            padding: 16px 24px 24px; background: #fff; color: #0a0f0d;
            border-top-left-radius: 18px; flex: 1; overflow: auto;
          }
          .lead { margin: 6px 0 16px; color: #111; font-weight: 700; }
          .person { display: flex; gap: 12px; padding: 14px 0; border-top: 1px solid #e5e7eb; }
          .person:first-of-type { border-top: none; }
          .person img { width: 72px; height: 72px; border-radius: 12px; object-fit: cover; background: #eef2f6; }
          .p-name { font-weight: 800; }
          .p-role { font-size: 13px; color: #475569; margin: 2px 0 6px; }
          .body a { color: #16a34a; text-decoration: none; font-weight: 700; }
          .secondary { display: inline-block; margin-top: 14px; color: #0a7a3b; font-weight: 800; }
        `}</style>
      </aside>
    </>
  );
}

/* iconcina globo */
function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c3 3.6 3 13.4 0 18M12 3c-3 3.6-3 13.4 0 18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
