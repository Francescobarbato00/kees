// components/OptimizeResults.jsx
import React from "react";
import Link from "next/link";

export default function OptimizeResults() {
  return (
    <section className="section" aria-labelledby="opt-title">
      {/* vignette + glow fondo */}
      <div className="overlay top" aria-hidden />
      <div className="overlay bottom" aria-hidden />

      <div className="container">
        <header className="head">
          <h2 id="opt-title" className="title">
            <span className="accent">Optimise results</span><br />
            and grow more with less
          </h2>

          <p className="intro">
            A vigorous and healthy crop. Optimal growth and yield. Be in control and ready to respond to changes
            in your greenhouse. Scalable, repeatable, predictable—using a minimum of natural resources. Our
            data-driven plant and data science solutions improve profitability and sustainability for our customers
            and partners.
          </p>

          <Link href="#solutions" className="cta">Our Solutions</Link>
        </header>

        <ul className="kpis" role="list" aria-label="Key metrics">
          <li className="kpi" role="listitem">
            <div className="num">2000+</div>
            <div className="label">growers use our platform</div>
          </li>
          <li className="kpi" role="listitem">
            <div className="num">50+</div>
            <div className="label">employees</div>
          </li>
          <li className="kpi" role="listitem">
            <div className="num">20+ years</div>
            <div className="label">of experience using data in<br />horticulture</div>
          </li>
          <li className="kpi" role="listitem">
            <div className="num">45+</div>
            <div className="label">countries</div>
          </li>
        </ul>
      </div>

      {/* Floating actions */}
      <div className="fab">
        <a href="#demo" className="pill">
          <span className="icon" aria-hidden>📅</span> Demo
        </a>
        <a href="#contact" className="pill ghost">
          <span className="icon" aria-hidden>💬</span> Contact
        </a>
      </div>

      <style jsx>{`
        /* Variabili locali (scoped) */
        .section {
          --bg: #050907;
          --ink: #eaf5f0;
          --muted: #a4b9b0;
          --accent: #20c776;
          --accent-700: #15975a;
          --edge: rgba(255,255,255,.08);

          position: relative;
          background: var(--bg);
          color: var(--ink);
          overflow: clip;
          padding: clamp(48px, 7vw, 96px) 20px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          gap: clamp(28px, 5vw, 44px);
          justify-items: center;
          text-align: center;
        }

        .head { max-width: 980px; }
        .title {
          margin: 0 0 10px;
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-weight: 900;
          letter-spacing: -0.6px;
          line-height: 1.02;
          font-size: clamp(40px, 7vw, 88px);
        }
        .accent {
          background: linear-gradient(90deg, #b8ffdb, var(--accent), #b8ffdb);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .intro {
          margin: 0 auto clamp(16px, 3vw, 28px);
          color: var(--ink);
          opacity: .9;
          font-size: clamp(16px, 2.1vw, 20px);
          line-height: 1.8;
          max-width: 920px;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 46px;
          padding: 0 18px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 900;
          color: #062a1a;
          background: linear-gradient(90deg, var(--accent), var(--accent-700));
          box-shadow: 0 12px 28px rgba(32,199,118,.35);
          border: 1px solid rgba(255,255,255,.14);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .cta:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgba(32,199,118,.5); }

        .kpis {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(12px, 2vw, 18px);
          width: 100%;
          max-width: 1100px;
          margin: clamp(20px, 4vw, 40px) 0 0;
          list-style: none;
          padding: 0;
        }
        @media (max-width: 980px) {
          .kpis { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .kpis { grid-template-columns: 1fr; }
        }

        .kpi {
          position: relative;
          padding: clamp(12px, 2vw, 16px);
          border-radius: 18px;
          border: 1px solid var(--edge);
          background: rgba(255,255,255,.02);
          box-shadow: 0 10px 24px rgba(0,0,0,.18);
          backdrop-filter: blur(6px);
        }
        .kpi::after {
          content:"";
          position:absolute; inset:0; pointer-events:none;
          border-radius:18px;
          background: radial-gradient(70% 60% at 50% 120%, rgba(32,199,118,.25), transparent 70%);
          opacity:.55;
        }
        .num {
          position: relative;
          z-index: 1;
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-weight: 900;
          font-size: clamp(28px, 4.6vw, 44px);
          line-height: 1.1;
        }
        .label {
          position: relative;
          z-index: 1;
          margin-top: 6px;
          color: var(--muted);
          font-size: clamp(14px, 1.8vw, 18px);
          line-height: 1.6;
        }

        /* Glow + vignette */
        .overlay {
          position: absolute; inset: 0; pointer-events: none;
        }
        .overlay.top {
          background: radial-gradient(70% 30% at 50% 0%, rgba(0,0,0,.7) 0%, rgba(0,0,0,.3) 60%, transparent 100%);
        }
        .overlay.bottom {
          background:
            radial-gradient(1200px 520px at 50% 120%, rgba(32,199,118,.25), transparent 60%),
            radial-gradient(70% 60% at 50% 100%, rgba(0,0,0,.4) 30%, transparent 100%);
        }

        /* Floating Actions */
        .fab {
          position: fixed;
          right: 20px;
          bottom: 20px;
          display: grid;
          gap: 10px;
          z-index: 40;
        }
        .pill {
          display: inline-flex; align-items: center; gap: 8px;
          height: 44px; padding: 0 16px;
          border-radius: 999px; text-decoration: none;
          font-weight: 900; color: #062a1a;
          background: linear-gradient(90deg, var(--accent), var(--accent-700));
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 12px 28px rgba(32,199,118,.35);
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }
        .pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(32,199,118,.5);
        }
        .pill:focus-visible {
          outline: 0;
          box-shadow: 0 0 0 3px rgba(32,199,118,.35), 0 12px 28px rgba(32,199,118,.35);
        }

        /* CONTACT – pieno, non trasparente */
        .pill.ghost {
          color: #062a1a;
          background: #ffffff; /* ben visibile */
          border: 1px solid rgba(0,0,0,.08);
          box-shadow: 0 10px 26px rgba(0,0,0,.25);
          backdrop-filter: none;
        }
        .pill.ghost:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(0,0,0,.35);
        }
        .pill.ghost:focus-visible {
          outline: 0;
          box-shadow: 0 0 0 3px rgba(255,255,255,.65), 0 10px 26px rgba(0,0,0,.25);
        }

        .icon { font-size: 16px; }
      `}</style>
    </section>
  );
}
