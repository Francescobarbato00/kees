import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
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
    <footer ref={ref} className={`footer ${visible ? "is-visible" : ""}`} aria-labelledby="footer-title">
      {/* background decor */}
      <div className="bg-accents" aria-hidden />
      <div className="grain" aria-hidden />

      <div className="container">
        {/* TOP BORDER animato */}
        <div className="top-line" aria-hidden>
          <span className="runner" />
        </div>

        <section className="grid">
          {/* Brand */}
          <div className="brand" data-anim="1">
            <div className="logo">
              <span className="dot">PT</span>
              <span className="name" id="footer-title">Planttec</span>
            </div>
            <p className="tag">
              Data-driven growing — software, insights and services to scale your greenhouse performance.
            </p>
          </div>

          {/* For whom */}
          <nav className="col" aria-label="For whom" data-anim="2">
            <h3 className="h3">For whom</h3>
            <ul>
              <li><Link href="#" className="lnk">Production companies</Link></li>
              <li><Link href="#" className="lnk">Managers</Link></li>
              <li><Link href="#" className="lnk">Investors</Link></li>
              <li><Link href="#" className="lnk">Crop consultants</Link></li>
              <li><Link href="#" className="lnk">Suppliers</Link></li>
            </ul>
          </nav>

          {/* Looking for */}
          <nav className="col" aria-label="Looking for" data-anim="3">
            <h3 className="h3">Looking for</h3>
            <ul>
              <li><Link href="#" className="lnk">Solutions</Link></li>
              <li><Link href="#" className="lnk">Strategy Manager</Link></li>
              <li><Link href="#" className="lnk">Footprint Calculator</Link></li>
              <li><Link href="#" className="lnk">Plant Empowerment</Link></li>
              <li><Link href="#" className="lnk">Meteo map</Link></li>
              <li><Link href="#" className="lnk">Psychrometric tools</Link></li>
              <li><Link href="#" className="lnk">RTR Calculator</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav className="col" aria-label="Planttec" data-anim="4">
            <h3 className="h3">Planttec</h3>
            <ul>
              <li><Link href="#" className="lnk">About us</Link></li>
              <li><Link href="#" className="lnk">Careers</Link></li>
              <li><Link href="#" className="lnk">Our world</Link></li>
              <li><Link href="#" className="lnk">Login</Link></li>
              <li><Link href="#" className="lnk">Register</Link></li>
              <li><Link href="#" className="lnk">ISO certification</Link></li>
            </ul>

            <Link href="/contact" className="cta" data-anim="5">Get in touch</Link>
          </nav>
        </section>

        {/* Bottom bar */}
        <div className="bottom">
          <button className="lang" aria-label="Change language" data-anim="6">
            <GlobeIcon />
            <span>English</span>
          </button>

          <p className="legal" data-anim="7">
            © {new Date().getFullYear()} Planttec ·{" "}
            <Link href="#" className="lnk-legal">Privacy & cookies</Link> ·{" "}
            <Link href="#" className="lnk-legal">Terms & conditions</Link>
          </p>

          <div className="socials" aria-label="Social networks" data-anim="8">
            <Link href="#" className="s" aria-label="LinkedIn"><FaLinkedin /></Link>
            <Link href="#" className="s" aria-label="YouTube"><FaYoutube /></Link>
            <Link href="#" className="s" aria-label="Twitter"><FaTwitter /></Link>
            <Link href="#" className="s" aria-label="Facebook"><FaFacebook /></Link>
            <Link href="#" className="s" aria-label="GitHub"><FaGithub /></Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          /* Variabili locali (isolate) */
          --ft-bg: #060807;
          --ft-ink: #e8f5ee;
          --ft-ink-dim: rgba(232,245,238,.78);
          --ft-muted: #9aa5ad;
          --ft-green: #2ecc71;
          --ft-green-700: #1fa45a;
          --ft-edge: rgba(255,255,255,.12);

          position: relative;
          overflow: hidden;
          background: var(--ft-bg);
          color: var(--ft-ink);
          padding: 48px 20px 30px;
          isolation: isolate;
        }

        .bg-accents {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(680px 460px at 88% 65%, rgba(46,204,113,.22), transparent 60%),
            radial-gradient(700px 520px at -10% 110%, rgba(255,255,255,.06), transparent 60%);
        }
        .grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          opacity: .07; mix-blend-mode: overlay;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=");
          background-size: 220px;
        }

        .container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

        .top-line {
          position: relative;
          width: 100%; height: 1px; opacity: .5;
          background: linear-gradient(90deg, transparent, var(--ft-edge), transparent);
          margin-bottom: clamp(28px, 5vw, 48px);
          overflow: hidden;
        }
        .top-line .runner {
          position: absolute; top: 0; left: -30%;
          width: 30%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(46,204,113,.65), transparent);
          animation: run 3.6s ease-in-out infinite;
        }
        @keyframes run {
          0% { left: -30%; }
          50% { left: 60%; }
          100% { left: 110%; }
        }

        /* ENTRATA (stagger) */
        [data-anim] {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1);
          will-change: opacity, transform;
        }
        .is-visible [data-anim="1"] { transition-delay: .02s; opacity: 1; transform: none; }
        .is-visible [data-anim="2"] { transition-delay: .08s; opacity: 1; transform: none; }
        .is-visible [data-anim="3"] { transition-delay: .14s; opacity: 1; transform: none; }
        .is-visible [data-anim="4"] { transition-delay: .20s; opacity: 1; transform: none; }
        .is-visible [data-anim="5"] { transition-delay: .26s; opacity: 1; transform: none; }
        .is-visible [data-anim="6"] { transition-delay: .32s; opacity: 1; transform: none; }
        .is-visible [data-anim="7"] { transition-delay: .38s; opacity: 1; transform: none; }
        .is-visible [data-anim="8"] { transition-delay: .44s; opacity: 1; transform: none; }

        /* grid principale */
        .grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr 1fr 1fr;
          gap: clamp(20px, 4vw, 52px);
        }
        @media (max-width: 1000px) { .grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px)  { .grid { grid-template-columns: 1fr; } }

        /* brand */
        .brand .logo { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
        .dot {
          width: 46px; height: 46px; border-radius: 14px;
          display: grid; place-items: center; font-weight: 900; color: #08210f;
          background: radial-gradient(120% 120% at 25% 20%, var(--ft-green) 0%, #7fe3a7 55%, #e8fff1 100%);
          box-shadow: 0 10px 26px rgba(46,204,113,.35);
        }
        .name {
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-size: 22px; font-weight: 900; letter-spacing: .3px;
        }
        .tag { margin: 6px 0 0; color: var(--ft-ink-dim); line-height: 1.6; max-width: 360px; }

        /* colonne link */
        .h3 {
          margin: 0 0 12px; color: #fff;
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-size: 22px; font-weight: 900;
        }
        .col ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; }

        .lnk {
          position: relative;
          color: var(--ft-ink); text-decoration: none; font-weight: 700;
          display: inline-block; padding: 4px 0; opacity: .92;
          transition: opacity .25s ease, transform .25s ease, color .25s ease;
        }
        .lnk::after {
          content: ""; position: absolute; left: 0; bottom: 0;
          width: 100%; height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, var(--ft-green), var(--ft-green-700));
          transform: scaleX(0); transform-origin: left;
          transition: transform .28s cubic-bezier(.16,1,.3,1);
        }
        .lnk:hover { opacity: 1; transform: translateX(2px); color: #fff; }
        .lnk:hover::after { transform: scaleX(1); }

        /* CTA pill verde */
        .cta {
          margin-top: 18px;
          display: inline-flex; align-items: center; justify-content: center;
          gap: 10px;
          height: 48px; padding: 0 22px; border-radius: 999px;
          text-decoration: none; font-weight: 900;
          background: linear-gradient(90deg, var(--ft-green), var(--ft-green-700));
          color: #06140d;
          box-shadow: 0 14px 34px rgba(46,204,113,.35);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .cta:hover { transform: translateY(-2px) scale(1.01); box-shadow: 0 18px 42px rgba(46,204,113,.5); }

        /* bottom bar */
        .bottom {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 14px;
          margin-top: clamp(28px, 6vw, 52px);
        }
        @media (max-width: 720px) { .bottom { grid-template-columns: 1fr; } }

        .lang {
          display: inline-flex; align-items: center; gap: 10px;
          height: 44px; padding: 0 16px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          border: 1px solid var(--ft-edge);
          color: #fff; font-weight: 900; cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }
        .lang:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,.12);
          box-shadow: 0 14px 32px rgba(0,0,0,.35);
        }

        .legal { margin: 0; text-align: center; color: var(--ft-muted); font-size: 14px; }
        .lnk-legal { color: var(--ft-ink); text-decoration: none; font-weight: 800; }
        .lnk-legal:hover { text-decoration: underline; }

        .socials { display: inline-flex; gap: 12px; justify-self: end; }
        .s {
          width: 44px; height: 44px; display: grid; place-items: center;
          border-radius: 999px; color: #e7f7ef;
          background: rgba(255,255,255,.06); border: 1px solid var(--ft-edge);
          transition: transform .25s ease, background .25s ease, color .25s ease, box-shadow .25s ease, filter .25s ease;
          will-change: transform, filter;
        }
        .s:hover {
          transform: translateY(-2px) rotate(-1deg);
          background: rgba(255,255,255,.14);
          color: #fff;
          box-shadow: 0 14px 34px rgba(0,0,0,.35);
          filter: drop-shadow(0 6px 16px rgba(46,204,113,.25));
        }

        @media (prefers-reduced-motion: reduce) {
          [data-anim], .top-line .runner, .lnk::after, .s, .lang, .cta { transition: none !important; animation: none !important; }
        }
      `}</style>
    </footer>
  );
}

/* icona globo per il selettore lingua */
function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 12h18M12 3c3 3.6 3 13.4 0 18M12 3c-3 3.6-3 13.4 0 18" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
