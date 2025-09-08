// components/HighlightsWithLogos.jsx
import React from "react";

export default function HighlightsWithLogos() {
  const logos = [
    "/logos/alpha.svg",
    "/logos/beta.svg",
    "/logos/gamma.svg",
    "/logos/delta.svg",
    "/logos/epsilon.svg",
    "/logos/zeta.svg",
    "/logos/eta.svg",
  ];

  const points = [
    {
      title: <>Maximize your <br /> profit</>,
      text:
        "Achieve optimal results with AI-powered crop predictions, improving resource efficiency and strengthening your price negotiations.",
    },
    {
      title: <>Eliminate <br /> uncertainty</>,
      text:
        "Lower your risks with advanced analytics to refine cultivation strategies and make decisions based on data.",
    },
    {
      title: <>Scale your <br /> operations</>,
      text:
        "Expand and optimize operations with precise greenhouse control, ensuring efficiency and consistency at every stage.",
    },
  ];

  return (
    <section className="wrap" aria-labelledby="hl-title">
      <div className="container">
        {/* Loghi */}
        <div className="logos" role="list" aria-label="Trusted by">
          {logos.map((src, i) => (
            <div className="logo" role="listitem" key={i}>
              <img src={src} alt={`Partner ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid">
          {points.map((p, i) => (
            <article key={i} className="row">
              <h3 className="title">{p.title}</h3>
              <p className="text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --paper: #f6fbf8;
          --ink: #0a0b14;
          --muted: #475569;
          --plant: #2ecc71;
          --plant-700: #1fa45a;
          --edge: rgba(13, 16, 28, 0.08);
        }

        .wrap {
          background: var(--paper);
          padding: clamp(40px, 6vw, 80px) 20px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* LOGOS STRIP */
        .logos {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: clamp(12px, 2vw, 24px);
          align-items: center;
          justify-items: center;
          margin-bottom: clamp(28px, 5vw, 48px);
        }
        @media (max-width: 960px) {
          .logos { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 560px) {
          .logos { grid-template-columns: repeat(2, 1fr); }
        }
        .logo {
          width: 100%;
          height: 64px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #fff;
          border: 1px solid var(--edge);
          box-shadow: 0 8px 22px rgba(13,16,28,0.06);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
          overflow: hidden;
        }
        .logo:hover {
          transform: translateY(-2px);
          border-color: rgba(13,16,28,0.14);
          box-shadow: 0 16px 34px rgba(13,16,28,0.12);
        }
        .logo img {
          max-width: 140px;
          max-height: 34px;
          object-fit: contain;
          filter: grayscale(1) contrast(1.05) opacity(.8);
          transition: filter .2s ease;
        }
        .logo:hover img {
          filter: grayscale(.1) contrast(1.1) opacity(1);
        }

        /* HIGHLIGHTS GRID */
        .grid {
          display: grid;
          gap: clamp(26px, 4vw, 42px);
        }
        .row {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(16px, 4vw, 32px);
          align-items: start;
          padding: clamp(12px, 2vw, 16px);
          border-radius: 18px;
          background: #fff;
          border: 1px solid var(--edge);
          box-shadow: 0 10px 24px rgba(13,16,28,0.06);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .row:hover {
          transform: translateY(-3px);
          border-color: rgba(13,16,28,0.14);
          box-shadow: 0 18px 40px rgba(13,16,28,0.12);
        }
        @media (max-width: 880px) {
          .row { grid-template-columns: 1fr; }
        }

        .title {
          margin: 0;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system;
          font-weight: 900;
          letter-spacing: -0.4px;
          color: var(--ink);
          font-size: clamp(28px, 4.6vw, 44px);
          line-height: 1.08;
        }

        .text {
          margin: 0;
          color: var(--muted);
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.7;
        }

        /* piccolo accento laterale (senza linee intrusive) */
        .row::before {
          content: "";
          width: 6px;
          height: 100%;
          border-radius: 8px;
          background: linear-gradient(180deg, var(--plant), var(--plant-700));
          opacity: .18;
          transform: translateX(-8px);
          position: absolute;
          left: 0; top: 0;
          pointer-events: none;
        }
        .row { position: relative; }
        .row:hover::before { opacity: .28; }
      `}</style>
    </section>
  );
}
