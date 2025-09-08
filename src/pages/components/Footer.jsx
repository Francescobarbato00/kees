import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="bg-accents" aria-hidden />
      <div className="container">
        {/* TOP BORDER */}
        <div className="top-line" aria-hidden />

        <section className="grid">
          {/* Brand */}
          <div className="brand">
            <div className="logo">
              <span className="dot">PT</span>
              <span className="name">Planttec</span>
            </div>
            <p className="tag">
              Data-driven growing — software, insights and services to scale your greenhouse performance.
            </p>
          </div>

          {/* For whom */}
          <nav className="col" aria-label="For whom">
            <h3 className="h3">For whom</h3>
            <ul>
              <li><Link href="#">Production companies</Link></li>
              <li><Link href="#">Managers</Link></li>
              <li><Link href="#">Investors</Link></li>
              <li><Link href="#">Crop consultants</Link></li>
              <li><Link href="#">Suppliers</Link></li>
            </ul>
          </nav>

          {/* Looking for */}
          <nav className="col" aria-label="Looking for">
            <h3 className="h3">Looking for</h3>
            <ul>
              <li><Link href="#">Solutions</Link></li>
              <li><Link href="#">Strategy Manager</Link></li>
              <li><Link href="#">Footprint Calculator</Link></li>
              <li><Link href="#">Plant Empowerment</Link></li>
              <li><Link href="#">Meteo map</Link></li>
              <li><Link href="#">Psychrometric tools</Link></li>
              <li><Link href="#">RTR Calculator</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav className="col" aria-label="Planttec">
            <h3 className="h3">Planttec</h3>
            <ul>
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Our world</Link></li>
              <li><Link href="#">Login</Link></li>
              <li><Link href="#">Register</Link></li>
              <li><Link href="#">ISO certification</Link></li>
            </ul>

            <Link href="/contact" className="cta">Get in touch</Link>
          </nav>
        </section>

        {/* Bottom bar */}
        <div className="bottom">
          <button className="lang" aria-label="Change language">
            <GlobeIcon />
            <span>English</span>
          </button>

          <p className="legal">
            © {new Date().getFullYear()} Planttec ·{" "}
            <Link href="#">Privacy & cookies</Link> ·{" "}
            <Link href="#">Terms & conditions</Link>
          </p>

          <div className="socials" aria-label="Social networks">
            <Link href="#" className="s"><FaLinkedin /></Link>
            <Link href="#" className="s"><FaYoutube /></Link>
            <Link href="#" className="s"><FaTwitter /></Link>
            <Link href="#" className="s"><FaFacebook /></Link>
            <Link href="#" className="s"><FaGithub /></Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg: #060807;                 /* quasi-nero */
          --ink: #e8f5ee;                /* testo chiaro */
          --ink-dim: rgba(232,245,238,.75);
          --muted: #9aa5ad;
          --green: #2ecc71;              /* Planttec green */
          --green-700: #1fa45a;
          --edge: rgba(255,255,255,.12);
        }

        .footer {
          position: relative;
          overflow: hidden;
          background: var(--bg);
          color: var(--ink);
          padding: 44px 20px 28px;
        }

        /* blob/gradient verde a destra come nello screenshot */
        .bg-accents {
          position: absolute; inset: 0;
          background:
            radial-gradient(600px 400px at 85% 65%, rgba(46,204,113,.22), transparent 60%),
            radial-gradient(700px 520px at -10% 110%, rgba(255,255,255,.05), transparent 60%);
          pointer-events: none;
        }

        .container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

        .top-line {
          width: 100%; height: 1px; opacity: .4;
          background: linear-gradient(90deg, transparent, var(--edge), transparent);
          margin-bottom: clamp(28px, 5vw, 44px);
        }

        /* grid principale */
        .grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr 1fr 1fr;
          gap: clamp(20px, 4vw, 48px);
        }
        @media (max-width: 1000px) { .grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px)  { .grid { grid-template-columns: 1fr; } }

        /* brand */
        .brand .logo {
          display: flex; align-items: center; gap: 12px; margin-bottom: 10px;
        }
        .dot {
          width: 44px; height: 44px; border-radius: 14px;
          display: grid; place-items: center; font-weight: 900; color: #08210f;
          background: radial-gradient(120% 120% at 25% 20%, var(--green) 0%, #7fe3a7 55%, #e8fff1 100%);
          box-shadow: 0 10px 26px rgba(46,204,113,.35);
        }
        .name {
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-size: 22px; font-weight: 900; letter-spacing: .3px;
        }
        .tag {
          margin: 6px 0 0; color: var(--ink-dim); line-height: 1.6;
          max-width: 360px;
        }

        /* colonne link */
        .h3 {
          margin: 0 0 12px; color: #fff;
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-size: 22px; font-weight: 900;
        }
        .col ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; }
        .col a {
          color: var(--ink); text-decoration: none; font-weight: 700;
          display: inline-block; padding: 4px 0; opacity: .9;
          transition: opacity .2s ease, transform .2s ease, color .2s ease;
        }
        .col a:hover { opacity: 1; transform: translateX(2px); color: #fff; }

        /* CTA pill verde */
        .cta {
          margin-top: 18px;
          display: inline-flex; align-items: center; justify-content: center;
          height: 48px; padding: 0 22px; border-radius: 999px;
          text-decoration: none; font-weight: 900;
          background: linear-gradient(90deg, var(--green), var(--green-700));
          color: #06140d;
          box-shadow: 0 12px 30px rgba(46,204,113,.35);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .cta:hover { transform: translateY(-2px); box-shadow: 0 16px 38px rgba(46,204,113,.5); }

        /* bottom bar */
        .bottom {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 14px;
          margin-top: clamp(28px, 6vw, 46px);
        }
        @media (max-width: 720px) { .bottom { grid-template-columns: 1fr; } }

        .lang {
          display: inline-flex; align-items: center; gap: 10px;
          height: 44px; padding: 0 16px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          border: 1px solid var(--edge);
          color: #fff; font-weight: 900; cursor: pointer;
        }

        .legal {
          margin: 0; text-align: center; color: var(--muted);
          font-size: 14px;
        }
        .legal a { color: var(--ink); text-decoration: none; font-weight: 800; }
        .legal a:hover { text-decoration: underline; }

        .socials { display: inline-flex; gap: 12px; justify-self: end; }
        .s {
          width: 44px; height: 44px; display: grid; place-items: center;
          border-radius: 999px; color: #e7f7ef;
          background: rgba(255,255,255,.06); border: 1px solid var(--edge);
          transition: transform .2s ease, background .2s ease, color .2s ease, box-shadow .2s ease;
        }
        .s:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,.12);
          color: #fff;
          box-shadow: 0 12px 30px rgba(0,0,0,.35);
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
