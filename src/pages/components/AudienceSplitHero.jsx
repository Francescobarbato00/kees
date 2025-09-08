import React from "react";
import Link from "next/link";

/**
 * AudienceSplitHero
 * - Left: giant headline con parola/e in accento verde
 * - Right: lista audience con separatori e hover
 * - Sfondo dark con texture teal (sostituisci bg se vuoi)
 *
 * Props:
 *  titleStart, titleAccent, titleEnd  -> parti del titolo per l'accento
 *  items: [{ label: string, href?: string }]
 *  bg?: string  -> immagine/texture di sfondo
 */
export default function AudienceSplitHero({
  titleStart = "Sustainably growing together",
  titleAccent = "for optimum results",
  titleEnd = "",
  items = [
    { label: "Production companies", href: "#" },
    { label: "Managers", href: "#" },
    { label: "Crop consultants", href: "#" },
    { label: "Investors", href: "#" },
    { label: "Suppliers", href: "#" },
  ],
  bg = "/bg-teal-waves.jpg", // sostituisci con la tua texture
}) {
  return (
    <section className="hero" aria-labelledby="aud-hero-title">
      <div className="overlay" aria-hidden />
      <div className="container">
        {/* Left copy */}
        <div className="left">
          <h1 id="aud-hero-title" className="title">
            {titleStart} <br />
            <span className="accent">{titleAccent}</span>
            {titleEnd ? <> <br /> {titleEnd}</> : null}
          </h1>
        </div>

        {/* Right list */}
        <div className="right" role="navigation" aria-label="Audiences">
          <ul className="list">
            {items.map((it, i) => {
              const C = it.href ? Link : "span";
              const props = it.href ? { href: it.href } : {};
              return (
                <li key={i} className="row">
                  <C className="link" {...props}>
                    <span>{it.label}</span>
                    <Arrow />
                  </C>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --plant: #2ecc71;
          --plant-700: #1fa45a;
          --ink-on-dark: #eef6f1;
          --muted-on-dark: #a2b9af;
        }
        .hero {
          position: relative;
          min-height: min(86vh, 820px);
          display: grid;
          align-items: center;
          color: var(--ink-on-dark);
          padding: clamp(40px, 6vw, 80px) 20px;
          background:
            radial-gradient(900px 520px at 14% 20%, rgba(46,204,113,.18), transparent 60%),
            #050907 url(${bg}) center/cover no-repeat;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.35) 50%, rgba(0,0,0,.7) 100%);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          gap: clamp(24px, 5vw, 60px);
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
        }
        @media (max-width: 980px) {
          .container { grid-template-columns: 1fr; }
        }

        .title {
          margin: 0;
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-weight: 900;
          letter-spacing: -0.6px;
          line-height: 1.02;
          font-size: clamp(38px, 7.4vw, 92px);
          text-shadow: 0 18px 50px rgba(0,0,0,.5);
        }
        .accent {
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .right { width: 100%; }
        .list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 8px;
        }
        .row {
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,.12);
        }
        .link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 18px 6px;
          text-decoration: none;
          color: var(--ink-on-dark);
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-weight: 800;
          font-size: clamp(18px, 2.2vw, 28px);
          transition: color .18s ease, transform .18s ease;
        }
        .row::before {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -1px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(46,204,113,.5), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .22s ease;
        }
        .row:hover::before { transform: scaleX(1); }
        .row:hover .link { color: #fff; transform: translateX(2px); }
        .link :global(svg) { opacity: .75; transform: translateX(0); transition: transform .2s ease, opacity .2s ease; }
        .row:hover .link :global(svg) { transform: translateX(4px); opacity: 1; }
      `}</style>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
