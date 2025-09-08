import React from "react";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      {/* overlays per contrasto */}
      <div className="overlay gradient" aria-hidden />
      <div className="overlay vignette" aria-hidden />

      <div className="inner">
        <div className="copy">
          <h1 className="title">
            Con <span className="accent">Planttec</span><br />
            il cambiamento è <br className="br" />
            <span className="accent-strong">opportunità</span>
          </h1>

          <p className="subtitle">
            Soluzioni e consulenza per la crescita in serra:
            <br className="br" />
            tecnologia, dati e persone al servizio dei tuoi risultati.
          </p>

          <div className="actions">
            <a className="primary" href="/contact">Parliamone</a>
            <a className="ghost" href="/case-studies">Case Studies</a>
          </div>

          <ul className="badges" aria-label="Punti di forza">
            <li><span className="tick" aria-hidden>✓</span> Consulenza su misura</li>
            <li><span className="tick" aria-hidden>✓</span> Team rapido e orientato al valore</li>
            <li><span className="tick" aria-hidden>✓</span> Focus su ROI misurabile</li>
          </ul>
        </div>
      </div>

      {/* cue di scroll */}
      <a href="#content" className="scroll" aria-label="Scroll to content">Scroll</a>

      <style jsx>{`
        :global(:root) {
          --plant: #2ecc71;       /* Planttec green */
          --plant-700: #1fa45a;
          --ink-on-hero: #ffffff;
        }

        .hero {
          position: relative;
          width: 100%;
          min-height: 92vh;                    /* più alta e ariosa */
          display: grid;
          place-items: center;
          color: var(--ink-on-hero);
          background:
            radial-gradient(1200px 600px at 8% 8%, rgba(46,204,113,0.18), transparent 55%),
            url("/hero.jpg");
          background-size: cover;
          background-position: center right;
          isolation: isolate;
        }

        /* overlays */
        .overlay.gradient {
          position: absolute; inset: 0;
          background: linear-gradient(
            180deg,
            rgba(6, 14, 12, 0.85) 0%,
            rgba(6, 14, 12, 0.35) 40%,
            rgba(6, 14, 12, 0.55) 100%
          );
          z-index: -1;
        }
        .overlay.vignette {
          position: absolute; inset: 0;
          background: radial-gradient(90% 70% at 50% 60%, transparent 40%, rgba(0,0,0,0.35) 100%);
          z-index: -1;
        }

        .inner {
          width: 100%;
          max-width: 1200px;
          padding: clamp(120px, 12vh, 160px) 24px clamp(80px, 10vh, 120px);
          display: grid;
          align-items: center;
        }

        .copy {
          max-width: 820px;
          background: rgba(8, 12, 14, 0.35);
          backdrop-filter: blur(10px) saturate(120%);
          padding: clamp(26px, 3vw, 36px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 30px 80px rgba(0,0,0,0.35);
          animation: floatIn 700ms ease both;
        }

        .title {
          margin: 0 0 10px;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
          font-weight: 900;
          font-size: clamp(44px, 6vw, 86px);
          line-height: 1.04;
          letter-spacing: -0.6px;
          text-shadow: 0 10px 32px rgba(0,0,0,0.45);
        }
        .accent {
          background: linear-gradient(90deg, #bff1d4, var(--plant), #bff1d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .accent-strong {
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .br { display: none; }
        @media (min-width: 640px) { .br { display: inline; } }

        .subtitle {
          margin: 8px 0 22px;
          font-size: clamp(18px, 2.1vw, 22px);
          line-height: 1.6;
          opacity: 0.95;
          animation: slideUp 800ms 80ms ease both;
        }

        .actions {
          display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px;
        }
        .primary,
        .ghost {
          display: inline-flex; align-items: center; justify-content: center;
          height: 52px; padding: 0 18px;
          border-radius: 14px; text-decoration: none; font-weight: 900; letter-spacing: .2px;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
        }
        .primary {
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          color: #08210f;
          box-shadow: 0 16px 34px rgba(46,204,113,0.35);
        }
        .primary:hover { transform: translateY(-2px); box-shadow: 0 22px 40px rgba(46,204,113,0.5); }
        .primary:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }

        .ghost {
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.26);
          color: #fff;
        }
        .ghost:hover { background: rgba(255,255,255,0.18); transform: translateY(-2px); }

        .badges {
          margin: 16px 0 0;
          padding: 0; list-style: none;
          display: flex; gap: 12px 16px; flex-wrap: wrap;
          font-size: 14px; opacity: .9;
        }
        .badges li { display: inline-flex; align-items: center; gap: 8px; }
        .tick {
          display: inline-grid; place-items: center;
          width: 18px; height: 18px; border-radius: 6px;
          background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.22);
        }

        /* scroll cue */
        .scroll {
          position: absolute; left: 50%; bottom: 22px; transform: translateX(-50%);
          font-size: 12px; letter-spacing: .16em; text-transform: uppercase;
          color: rgba(255,255,255,0.85); text-decoration: none;
        }
        .scroll::after {
          content: ""; display: block; margin: 8px auto 0;
          width: 1px; height: 30px; border-radius: 999px;
          background: linear-gradient(180deg, rgba(255,255,255,.8), rgba(255,255,255,0));
          animation: drip 1.8s ease-in-out infinite;
        }

        @keyframes floatIn {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drip {
          0% { height: 6px; opacity: .2; }
          50% { height: 30px; opacity: 1; }
          100% { height: 6px; opacity: .2; }
        }
      `}</style>
    </section>
  );
}
