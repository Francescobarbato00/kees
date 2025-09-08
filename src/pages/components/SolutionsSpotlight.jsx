// components/SolutionsSpotlight.jsx
import React from "react";
import Link from "next/link";

/**
 * Props:
 * - imageSrc?: string  // immagine del cruscotto (facoltativa)
 * - ctaHref?: string   // link del bottone
 */
export default function SolutionsSpotlight({
  imageSrc = "",
  ctaHref = "/solutions",
}) {
  return (
    <section className="solutions-spotlight" aria-labelledby="sol-title">
      <div className="wrap">
        <div className="panel">
          {/* Testo (sx) */}
          <div className="copy">
            <h2 id="sol-title" className="title">
              From insights to impact:
              <br />
              <span className="accent">discover our solutions</span>
            </h2>

            <p className="lead">
              We turn greenhouse data into clear decisions. With analytics,
              agronomic know-how and elegant tools, we help you increase yield,
              optimize inputs and scale operations sustainably.
            </p>

            <ul className="bullets" role="list">
              <li>
                <Check /> Get a handle on your greenhouse data
              </li>
              <li>
                <Check /> Gain foresight into your operations
              </li>
              <li>
                <Check /> Build and maintain a robust cultivation strategy
              </li>
            </ul>

            <Link href={ctaHref} className="cta" aria-label="Explore our solutions">
              Our Solutions <ArrowRight />
            </Link>
          </div>

          {/* Mockup / immagine (dx) */}
          <div className="mock">
            {imageSrc ? (
              <img src={imageSrc} alt="" aria-hidden className="shot" />
            ) : (
              <DeviceMock />
            )}
          </div>
        </div>
      </div>

      {/* SCOPED STYLES */}
      <style jsx>{`
        .solutions-spotlight {
          /* Variabili LOCALi: non sporcano altri componenti */
          --ink: #f8fafc;
          --muted: #cbd5e1;
          --bg: #0a0f14;
          --brand: #2ecc71;
          --brand-700: #1fa45a;
          --edge: rgba(255, 255, 255, 0.08);

          position: relative;
          padding: clamp(28px, 5vw, 54px) 20px;
          background: transparent;
        }

        .wrap {
          max-width: 1200px;
          margin: 0 auto;
        }

        .panel {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background:
            radial-gradient(1200px 500px at 10% 10%, rgba(46, 204, 113, 0.22), transparent 60%),
            radial-gradient(900px 420px at 95% 95%, rgba(46, 204, 113, 0.14), transparent 65%),
            var(--bg);
          border: 1px solid var(--edge);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
          padding: clamp(22px, 3.6vw, 34px);
          display: grid;
          grid-template-columns: 1.05fr 1.2fr;
          gap: clamp(20px, 3.8vw, 36px);
        }

        .copy {
          color: var(--ink);
          display: grid;
          align-content: start;
          gap: 16px;
        }

        .title {
          margin: 0;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system;
          font-weight: 900;
          font-size: clamp(28px, 4.8vw, 44px);
          line-height: 1.08;
          letter-spacing: -0.3px;
        }
        .accent {
          color: var(--ink);
        }

        .lead {
          margin: 6px 0 4px;
          color: var(--muted);
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.75;
        }

        .bullets {
          margin: 6px 0 10px;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
          color: var(--ink);
          opacity: 0.95;
        }
        .bullets li {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 46px;
          padding: 0 18px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 900;
          color: #052013;
          background: linear-gradient(90deg, var(--brand), var(--brand-700));
          box-shadow: 0 14px 28px rgba(46, 204, 113, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          width: max-content;
          margin-top: 6px;
        }
        .cta:hover {
          transform: translateY(-1.5px);
          box-shadow: 0 18px 36px rgba(46, 204, 113, 0.5);
        }

        .mock {
          position: relative;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--edge);
          min-height: 320px;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        .shot {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        /* Responsive */
        @media (max-width: 980px) {
          .panel {
            grid-template-columns: 1fr;
          }
          .mock {
            min-height: 260px;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------- Mini device mock (se non passi un'immagine) ---------- */
function DeviceMock() {
  return (
    <div className="device" aria-hidden>
      <div className="bar" />
      <div className="screen">
        <div className="row row1" />
        <div className="row row2" />
        <div className="row row3" />
        <div className="grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="tile" />
          ))}
        </div>
      </div>

      <style jsx>{`
        .device {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 18px;
          background: #0c141c;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
          overflow: hidden;
          display: grid;
          grid-template-rows: 34px 1fr;
        }
        .bar {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.06),
            rgba(46, 204, 113, 0.18) 60%,
            rgba(255, 255, 255, 0.06)
          );
        }
        .screen {
          padding: 10px;
          display: grid;
          grid-template-rows: 1.2fr 1fr 0.9fr 1.5fr;
          gap: 10px;
        }
        .row {
          border-radius: 10px;
          background: linear-gradient(
            180deg,
            rgba(46, 204, 113, 0.25),
            rgba(46, 204, 113, 0.05)
          );
          position: relative;
          overflow: hidden;
        }
        .row::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
              to right,
              rgba(255, 255, 255, 0.08) 0 1px,
              transparent 1px 8px
            ),
            linear-gradient(180deg, transparent 40%, rgba(255, 255, 255, 0.08));
          opacity: 0.7;
        }
        .row1 {
          animation: sweep1 8s linear infinite;
        }
        .row2 {
          animation: sweep2 10s linear infinite;
        }
        .row3 {
          animation: sweep3 12s linear infinite;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 1fr;
          gap: 10px;
        }
        .tile {
          border-radius: 10px;
          background: radial-gradient(
              600px 200px at 10% 10%,
              rgba(46, 204, 113, 0.25),
              transparent 60%
            ),
            #0e1a24;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        @keyframes sweep1 {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 200px 0;
          }
        }
        @keyframes sweep2 {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 280px 0;
          }
        }
        @keyframes sweep3 {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 360px 0;
          }
        }
      `}</style>
    </div>
  );
}

/* ---------- Icone ---------- */
function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,.5)" strokeWidth="2" />
      <path
        d="M7 12l3 3 7-7"
        stroke="#2ECC71"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
