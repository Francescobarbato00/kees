import React from "react";
<div id="hero-sentinel" style="position:relative;height:1px;"></div>

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      {/* layers per profondità */}
      <div className="overlay mesh" aria-hidden />
      <div className="overlay gradient" aria-hidden />
      <div className="overlay vignette" aria-hidden />
      <div className="overlay grain" aria-hidden />
      <div className="inner">
        <div className="copy" role="presentation">
          <h1 className="title">
            Con{" "}
            <span className="accent accent-underline">Planttec</span>
            <br />
            il cambiamento è <br className="br" />
            <span className="accent-strong glow">opportunità</span>
          </h1>

          <p className="subtitle">
            Soluzioni e consulenza per la crescita in serra:
            <br className="br" />
            tecnologia, dati e persone al servizio dei tuoi risultati.
          </p>

          <div className="actions">
            <a className="primary" href="/contact">
              <span className="btn-inner">
                <span>Parliamone</span>
              </span>
            </a>
            <a className="ghost" href="/case-studies">
              Case Studies
            </a>
          </div>

          <ul className="badges" aria-label="Punti di forza">
            <li>
              <span className="tick" aria-hidden>
                ✓
              </span>{" "}
              Consulenza su misura
            </li>
            <li>
              <span className="tick" aria-hidden>
                ✓
              </span>{" "}
              Team rapido e orientato al valore
            </li>
            <li>
              <span className="tick" aria-hidden>
                ✓
              </span>{" "}
              Focus su ROI misurabile
            </li>
          </ul>
        </div>
      </div>

      {/* cue di scroll */}
      <a href="#content" className="scroll" aria-label="Vai al contenuto">
        Scroll
      </a>

      <style jsx>{`
        :global(:root) {
          --plant: #2ecc71;
          --plant-700: #1fa45a;
          --ink-on-hero: #ffffff;
          --panel: rgba(10, 16, 14, 0.42);
          --panel-border: rgba(255, 255, 255, 0.14);
          --soft-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
        }

        .hero {
          position: relative;
          width: 100%;
          min-height: 94vh;
          display: grid;
          place-items: center;
          color: var(--ink-on-hero);
          background:
            radial-gradient(1200px 600px at 8% 8%, rgba(46, 204, 113, 0.14), transparent 55%),
            url("/hero.jpg");
          background-size: cover;
          background-position: center right;
          isolation: isolate;
          overflow: clip;
        }

        /* LAYER: gradient mesh morbido */
        .overlay.mesh {
          position: absolute;
          inset: -10%;
          filter: blur(60px) saturate(120%);
          background:
            radial-gradient(40% 35% at 15% 20%, rgba(149, 255, 205, 0.18), transparent 70%),
            radial-gradient(35% 30% at 80% 25%, rgba(46, 204, 113, 0.16), transparent 75%),
            radial-gradient(30% 28% at 70% 85%, rgba(178, 255, 214, 0.12), transparent 80%);
          pointer-events: none;
          z-index: -3;
        }

        /* LAYER: sfumatura verticale per contrasto */
        .overlay.gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(5, 10, 8, 0.9) 0%,
            rgba(5, 10, 8, 0.45) 40%,
            rgba(5, 10, 8, 0.65) 100%
          );
          z-index: -2;
        }

        /* LAYER: vignette morbida + mask */
        .overlay.vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(90% 70% at 50% 60%, transparent 45%, rgba(0, 0, 0, 0.4) 100%);
          -webkit-mask-image: radial-gradient(90% 70% at 50% 60%, rgba(0, 0, 0, 0.9), #000);
          mask-image: radial-gradient(90% 70% at 50% 60%, rgba(0, 0, 0, 0.9), #000);
          z-index: -1;
        }

        /* LAYER: grain leggero per togliere il “plastico” */
        .overlay.grain {
          position: absolute;
          inset: 0;
          opacity: 0.17;
          mix-blend-mode: soft-light;
          pointer-events: none;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAABaf7ccAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAK9JREFUeNrs0TEBACAMwLCT/5qQzSxO0QxG3CkAAAAAAAAAAAAAAACwQm7rQWwVg5rTg9m/VwAAAP9m9d9wAAAgf9cAAAB/1wAAAH/XAAAAgH/XAAAAv9cAAABy2H7zYwAAAAAAAAAAAAAAAAAAAAAAAEgJAgAAgP/TAQAA/9MBAAD/0wEAAP/TAQAA/9MBAABU1C6hAABP0b4BAQAAAAAAAPgWAgAAwGv8JgEAAIhuY3gAALp1wXwAAABJRU5ErkJggg==");
          background-size: 256px 256px;
        }

        .inner {
          width: 100%;
          max-width: 1200px;
          padding: clamp(120px, 12vh, 170px) 24px clamp(96px, 10vh, 140px);
          display: grid;
          align-items: center;
        }

        .copy {
          max-width: 880px;
          background: var(--panel);
          -webkit-backdrop-filter: blur(14px) saturate(120%);
          backdrop-filter: blur(14px) saturate(120%);
          padding: clamp(28px, 3.2vw, 40px);
          border-radius: 26px;
          border: 1px solid var(--panel-border);
          box-shadow: var(--soft-shadow);
          animation: floatIn 700ms ease both;
        }

        .title {
          margin: 0 0 12px;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
          font-weight: 900;
          font-size: clamp(44px, 6vw, 90px);
          line-height: 1.04;
          letter-spacing: -0.6px;
          text-wrap: balance;
          text-shadow: 0 12px 34px rgba(0, 0, 0, 0.45);
        }

        .accent {
          background: linear-gradient(90deg, #bff1d4, var(--plant), #bff1d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* underline fluida sotto "Planttec" */
        .accent-underline {
          position: relative;
          display: inline-block;
        }
        .accent-underline::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.12em;
          height: 0.32em;
          border-radius: 999px;
          background: conic-gradient(
            from 120deg,
            rgba(191, 241, 212, 0.8),
            rgba(46, 204, 113, 0.9),
            rgba(191, 241, 212, 0.8)
          );
          filter: blur(0.6px);
          transform: translateY(2px);
          opacity: 0.85;
        }

        .accent-strong {
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .glow {
          text-shadow:
            0 0 22px rgba(46, 204, 113, 0.35),
            0 4px 28px rgba(46, 204, 113, 0.25);
        }

        .br {
          display: none;
        }
        @media (min-width: 640px) {
          .br {
            display: inline;
          }
        }

        .subtitle {
          margin: 10px 0 24px;
          font-size: clamp(18px, 2.05vw, 22px);
          line-height: 1.65;
          opacity: 0.96;
          animation: slideUp 820ms 60ms ease both;
        }

        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 12px;
        }

        .primary,
        .ghost {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 54px;
          padding: 0 20px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 900;
          letter-spacing: 0.2px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.25s ease,
            border-color 0.25s ease, opacity 0.25s ease;
          will-change: transform, box-shadow, background;
        }

        .primary {
          color: #08210f;
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          box-shadow: 0 18px 36px rgba(46, 204, 113, 0.38);
          overflow: hidden;
        }
        .btn-inner {
          position: relative;
          z-index: 2;
        }
        /* shimmer sottile on hover */
        .primary::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.25) 50%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: translateX(-120%);
          transition: transform 600ms ease;
        }
        .primary:hover::after {
          transform: translateX(120%);
        }
        .primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 44px rgba(46, 204, 113, 0.5);
        }
        .primary:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }

        .ghost {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: #fff;
        }
        .ghost:hover {
          background: rgba(255, 255, 255, 0.16);
          transform: translateY(-2px);
        }

        .badges {
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          gap: 12px 18px;
          flex-wrap: wrap;
          font-size: 14px;
          opacity: 0.9;
          animation: slideUp 860ms 80ms ease both;
        }
        .badges li {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(6px);
        }
        .tick {
          display: inline-grid;
          place-items: center;
          width: 18px;
          height: 18px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.24);
        }

        /* Scroll cue */
        .scroll {
          position: absolute;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          padding-inline: 12px;
        }
        .scroll::after {
          content: "";
          display: block;
          margin: 8px auto 0;
          width: 1px;
          height: 30px;
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0));
          animation: drip 1.8s ease-in-out infinite;
        }

        /* Motion-safety */
        @media (prefers-reduced-motion: reduce) {
          .copy,
          .subtitle,
          .badges {
            animation: none !important;
          }
          .primary::after {
            display: none;
          }
        }

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes drip {
          0% {
            height: 6px;
            opacity: 0.25;
          }
          50% {
            height: 30px;
            opacity: 1;
          }
          100% {
            height: 6px;
            opacity: 0.25;
          }
        }
      `}</style>
    </section>
  );
}
