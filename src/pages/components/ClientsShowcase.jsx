// components/ClientsShowcase.jsx
import React from "react";
import Link from "next/link";

export default function ClientsShowcase() {
  return (
    <section className="clients-section" aria-labelledby="clients-title">
      <div className="inner">
        {/* Colonna sinistra - testo */}
        <div className="lead">
          <h2 id="clients-title" className="title">
            Satisfied customers
            <br /> across the globe
          </h2>

          <p className="intro">
            We collaborate with more than <strong>2,000 customers</strong> in{" "}
            <strong>45+ countries</strong>. Discover the value they get from our
            plant-centric technology and services.
          </p>

          <Link href="/cases" className="cta" aria-label="Read our success stories">
            Success stories
            <ArrowRight />
          </Link>
        </div>

        {/* Colonna destra - griglia loghi */}
        <ul className="logos" role="list" aria-label="Customers">
          {LOGOS.map((L, i) => (
            <li key={i} className="card" title={L.label}>
              <div className="logoWrap" aria-hidden>
                <L.Component />
              </div>
              <span className="sr-only">{L.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        /* Variabili locali (scoped al componente) */
        .clients-section {
          --ink: #0b1320;
          --muted: #667085;
          --surface: #ffffff;
          --edge: rgba(12, 18, 28, 0.08);
          --edge-strong: rgba(12, 18, 28, 0.14);
          --brand: #2ecc71;       /* verde Planttec */
          --brand-700: #1fa45a;

          position: relative;
          padding: clamp(48px, 8vw, 96px) 20px;
          background:
            radial-gradient(1200px 500px at 90% 10%, rgba(46, 204, 113, 0.06), transparent 60%),
            #fafcff;
        }

        .inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 1.4fr;
          gap: clamp(24px, 5vw, 40px);
          align-items: start;
        }

        /* Lead */
        .title {
          margin: 0 0 16px;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system;
          font-size: clamp(36px, 6.2vw, 62px);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -0.6px;
          color: var(--ink);
        }
        .intro {
          margin: 0 0 24px;
          color: var(--muted);
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.7;
        }
        .cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 48px;
          padding: 0 20px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 900;
          color: #052013;
          background: linear-gradient(90deg, var(--brand), var(--brand-700));
          box-shadow: 0 12px 28px rgba(46, 204, 113, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(46, 204, 113, 0.45);
        }

        /* Griglia loghi */
        .logos {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 2.4vw, 22px);
        }

        .card {
          background: var(--surface);
          border: 1px solid var(--edge);
          border-radius: 18px;
          min-height: 120px;
          display: grid;
          place-items: center;
          padding: 18px;
          box-shadow: 0 8px 24px rgba(12, 18, 28, 0.06);
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 34px rgba(12, 18, 28, 0.12);
          border-color: var(--edge-strong);
        }

        .logoWrap {
          width: min(220px, 80%);
          height: 54px;
          display: grid;
          place-items: center;
          filter: grayscale(1) contrast(1.05);
          opacity: 0.75;
          transition: filter 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
        }
        .card:hover .logoWrap {
          filter: grayscale(0);
          opacity: 1;
          transform: scale(1.02);
        }

        /* Responsività */
        @media (max-width: 1024px) {
          .inner {
            grid-template-columns: 1fr;
          }
          .logos {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .logos {
            grid-template-columns: repeat(2, 1fr);
          }
          .card {
            min-height: 100px;
            border-radius: 14px;
          }
        }

        /* Accessibilità: screen reader only */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `}</style>
    </section>
  );
}

/* ---------- Mock loghi (SVG minimal, nessuna dipendenza da asset esterni) ---------- */
const LOGOS = [
  { label: "Vereijken", Component: LogoVereijken },
  { label: "Finka", Component: LogoFinka },
  { label: "AgriCo", Component: LogoAgrico },
  { label: "Horti Tech", Component: LogoHortiTech },
  { label: "Bredefleur", Component: LogoBredefleur },
  { label: "FoodVentures", Component: LogoFoodVentures },
  { label: "EveryD Flowers", Component: LogoEveryD },
  { label: "Growers United", Component: LogoGrowers },
  { label: "Den Berk", Component: LogoDenBerk },
];

/* Piccole icone testuali in stile “logo” */
function LogoText({ text }) {
  return (
    <svg viewBox="0 0 420 120" role="img" aria-label={text} style={{ width: "100%", height: "100%" }}>
      <rect x="1" y="1" width="418" height="118" rx="14" fill="none" stroke="rgba(12,18,28,.08)" />
      <text
        x="50%"
        y="56%"
        textAnchor="middle"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system"
        fontWeight="800"
        fontSize="42"
        fill="#1b2430"
      >
        {text}
      </text>
    </svg>
  );
}

function LogoVereijken() { return <LogoText text="VEREIJKEN" />; }
function LogoFinka() { return <LogoText text="finka" />; }
function LogoAgrico() { return <LogoText text="AgriCo" />; }
function LogoHortiTech() { return <LogoText text="Horti Tech" />; }
function LogoBredefleur() { return <LogoText text="BREDEFLEUR" />; }
function LogoFoodVentures() { return <LogoText text="FOODVENTURES" />; }
function LogoEveryD() { return <LogoText text="EveryD" />; }
function LogoGrowers() { return <LogoText text="growers" />; }
function LogoDenBerk() { return <LogoText text="den berk" />; }

/* Icona freccia per il bottone */
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
