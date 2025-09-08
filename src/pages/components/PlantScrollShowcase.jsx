// components/PlantScrollShowcase.jsx
import React, { useEffect, useRef, useState } from "react";

export default function PlantScrollShowcase() {
  const [active, setActive] = useState(0);
  const stepsRef = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-idx"));
            setActive(idx);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.01 }
    );
    stepsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="plant-stories" aria-label="How our plant intelligence works">
      <div className="inner">
        {/* SINISTRA - canvas sticky */}
        <div className="stage" aria-hidden>
          <div className="dots">
            {[0, 1, 2].map((i) => (
              <span key={i} className={`dot ${active === i ? "on" : ""}`} />
            ))}
          </div>
          <div className={`layer ${active === 0 ? "show" : ""}`}>
            <SeedAnimation />
          </div>
          <div className={`layer ${active === 1 ? "show" : ""}`}>
            <SproutAnimation />
          </div>
          <div className={`layer ${active === 2 ? "show" : ""}`}>
            <BloomAnimation />
          </div>
        </div>

        {/* DESTRA - testi */}
        <div className="flow">
          <article
            className={`step ${active === 0 ? "active" : ""}`}
            data-idx={0}
            ref={(el) => (stepsRef.current[0] = el)}
          >
            <h2>Seme → Dati affidabili</h2>
            <p>
              Come un buon substrato, i dati nascono puliti: sensori calibrati, deduplicazione e
              controlli continui garantiscono una base solida per le decisioni. Riduciamo rumore e
              outlier per far germogliare insights di qualità.
            </p>
          </article>

          <article
            className={`step ${active === 1 ? "active" : ""}`}
            data-idx={1}
            ref={(el) => (stepsRef.current[1] = el)}
          >
            <h2>Germoglio → Modelli adattivi</h2>
            <p>
              Il nostro motore predittivo cresce assieme alla coltura: integra clima, irrigazione e
              fenologia per adattarsi ai cambiamenti. Previsioni di resa e stress idrico in
              continuo aggiornamento.
            </p>
          </article>

          <article
            className={`step ${active === 2 ? "active" : ""}`}
            data-idx={2}
            ref={(el) => (stepsRef.current[2] = el)}
          >
            <h2>Fioritura → Azioni automatiche</h2>
            <p>
              Dal consiglio all’azione: strategie clima/irrigazione ottimizzate, ricette luce e
              soglie di allarme trasformano il potenziale in risultati misurabili—più resa con meno
              risorse.
            </p>
          </article>
        </div>
      </div>

      <style jsx>{`
        /* Variabili SCOPATE al wrapper: NON globali */
        .plant-stories {
          --plant: #2ecc71;
          --plant-700: #1fa45a;
          --ink: #eaf7f0;
          --bg-deep: #07150f;
          --grid: rgba(46, 204, 113, 0.12);

          position: relative;
          background:
            radial-gradient(1000px 500px at 85% 10%, rgba(46, 204, 113, 0.18), transparent 60%),
            linear-gradient(180deg, #0a1f18 0%, #06110c 100%);
          color: var(--ink);
          padding: 8vh 0;
          overflow: clip;
        }

        .plant-stories .inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: minmax(280px, 560px) 1fr;
          gap: clamp(20px, 4vw, 48px);
          align-items: start;
        }

        .plant-stories .stage {
          position: sticky;
          top: 10vh;
          height: 80vh;
          min-height: 520px;
          border-radius: 20px;
          overflow: hidden;
          background:
            radial-gradient(900px 600px at 30% 30%, rgba(46, 204, 113, 0.1), transparent 60%),
            linear-gradient(180deg, #07150f 0%, #03100b 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        }

        .plant-stories .dots {
          position: absolute;
          right: 14px;
          top: 14px;
          display: grid;
          gap: 6px;
          z-index: 10;
        }
        .plant-stories .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.25);
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .plant-stories .dot.on {
          background: var(--plant);
          transform: scale(1.25);
          box-shadow: 0 0 0 4px rgba(46, 204, 113, 0.18);
        }

        .plant-stories .layer {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          opacity: 0;
          transform: scale(0.98);
          transition: opacity 300ms ease, transform 400ms ease;
        }
        .plant-stories .layer.show {
          opacity: 1;
          transform: scale(1);
        }

        .plant-stories .flow {
          display: grid;
          gap: 26vh;
          padding: 6vh 0 20vh;
        }
        .plant-stories .step {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 22px 22px 24px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
          transform: translateY(14px);
          opacity: 0.65;
          transition: transform 250ms ease, opacity 250ms ease, border-color 250ms ease;
        }
        .plant-stories .step.active {
          transform: translateY(0px);
          opacity: 1;
          border-color: rgba(46, 204, 113, 0.35);
        }
        .plant-stories .step h2 {
          margin: 0 0 8px;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system;
          font-size: clamp(22px, 3.2vw, 34px);
          font-weight: 800;
          letter-spacing: -0.3px;
          background: linear-gradient(90deg, #c6ffdd, var(--plant), #f0fff6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .plant-stories .step p {
          margin: 0;
          line-height: 1.7;
          color: rgba(240, 255, 248, 0.92);
          font-size: clamp(15px, 1.8vw, 18px);
        }

        @media (max-width: 980px) {
          .plant-stories .inner {
            grid-template-columns: 1fr;
          }
          .plant-stories .stage {
            order: 2;
            position: relative;
            top: 0;
            height: 52vh;
            min-height: 420px;
          }
          .plant-stories .flow {
            order: 1;
            gap: 12vh;
            padding: 4vh 0 8vh;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .plant-stories .layer,
          .plant-stories .step,
          .plant-stories .dot {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- SVG animazioni (restano scoped perché i loro <style jsx> stanno nel componente) */
function SeedAnimation() {
  return (
    <svg viewBox="0 0 600 600" className="svg">
      <defs>
        <radialGradient id="g0" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(46,204,113,.45)" />
          <stop offset="100%" stopColor="rgba(46,204,113,0)" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="600" height="600" fill="url(#g0)" />
      <g stroke="rgba(255,255,255,.12)" strokeWidth="0.5">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 34} x2="600" y2={i * 34} />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 34} y1="0" x2={i * 34} y2="600" />
        ))}
      </g>

      <g filter="url(#glow)">
        <ellipse cx="300" cy="310" rx="36" ry="28" fill="#bfffe0" stroke="#1fa45a" strokeWidth="3">
          <animate attributeName="rx" dur="2.2s" values="32;36;32" repeatCount="indefinite" />
          <animate attributeName="ry" dur="2.2s" values="26;28;26" repeatCount="indefinite" />
        </ellipse>

        {Array.from({ length: 7 }).map((_, i) => {
          const delay = i * 0.2;
          const x = 300 + (i - 3) * 10;
          return (
            <path
              key={i}
              d={`M${x},320 C${x + 10},360 ${x - 30},400 ${x + (i % 2 ? 40 : -20)},460`}
              stroke="#2ecc71"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                dur="1.6s"
                begin={`${delay}s`}
                values="0,300;300,0"
                repeatCount="indefinite"
              />
            </path>
          );
        })}
      </g>

      <style jsx>{`
        .svg {
          width: 100%;
          height: 100%;
          background: radial-gradient(900px 600px at 30% 30%, rgba(46, 204, 113, 0.08), transparent 60%),
            #03120c;
        }
      `}</style>
    </svg>
  );
}

function SproutAnimation() {
  return (
    <svg viewBox="0 0 600 600" className="svg">
      <defs>
        <linearGradient id="stem" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7ef0b0" />
          <stop offset="100%" stopColor="#1fa45a" />
        </linearGradient>
      </defs>

      <rect width="600" height="600" fill="#03120c" />
      <rect y="420" width="600" height="180" fill="rgba(46,204,113,.08)" />

      <path
        d="M300,420 C300,380 305,340 310,300 C318,250 330,210 340,180"
        stroke="url(#stem)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="0 400"
      >
        <animate attributeName="stroke-dasharray" dur="2s" values="0,400;400,0" repeatCount="indefinite" />
      </path>

      <g fill="#2ecc71" opacity="0.9">
        <path d="M318,310 C360,300 380,278 386,260 C352,262 332,278 318,310">
          <animate
            attributeName="d"
            dur="2.8s"
            values="M318,310 C360,300 380,278 386,260 C352,262 332,278 318,310;
                    M318,308 C356,296 378,270 384,252 C352,254 334,272 318,308;
                    M318,310 C360,300 380,278 386,260 C352,262 332,278 318,310"
            repeatCount="indefinite"
          />
        </path>
        <path d="M300,330 C280,320 258,305 244,288 C250,310 272,328 300,330">
          <animate
            attributeName="d"
            dur="2.8s"
            values="M300,330 C280,320 258,305 244,288 C250,310 272,328 300,330;
                    M300,328 C284,316 262,300 246,284 C254,306 274,324 300,328;
                    M300,330 C280,320 258,305 244,288 C250,310 272,328 300,330"
            repeatCount="indefinite"
          />
        </path>
      </g>

      <style jsx>{`
        .svg {
          width: 100%;
          height: 100%;
          background: radial-gradient(1000px 620px at 60% 20%, rgba(46, 204, 113, 0.12), transparent 60%),
            #03120c;
        }
      `}</style>
    </svg>
  );
}

function BloomAnimation() {
  return (
    <svg viewBox="0 0 600 600" className="svg">
      <defs>
        <radialGradient id="halo" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(46,204,113,.35)" />
          <stop offset="100%" stopColor="rgba(46,204,113,0)" />
        </radialGradient>
      </defs>

      <rect width="600" height="600" fill="#03120c" />
      <circle cx="300" cy="300" r="220" fill="url(#halo)" />

      <circle cx="300" cy="300" r="20" fill="#f6ffe4">
        <animate attributeName="r" dur="2.6s" values="14;20;14" repeatCount="indefinite" />
      </circle>

      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x = 300 + Math.cos(a) * 14;
        const y = 300 + Math.sin(a) * 14;
        return (
          <path
            key={i}
            d={`M300,300 Q${x},${y} ${300 + Math.cos(a) * 120},${300 + Math.sin(a) * 120} Q${x},${y} 300,300`}
            fill="#a9ffd1"
            opacity="0.9"
          >
            <animate
              attributeName="d"
              dur="2.8s"
              values={`
                M300,300 Q${x},${y} ${300 + Math.cos(a) * 40},${300 + Math.sin(a) * 40} Q${x},${y} 300,300;
                M300,300 Q${x},${y} ${300 + Math.cos(a) * 120},${300 + Math.sin(a) * 120} Q${x},${y} 300,300;
                M300,300 Q${x},${y} ${300 + Math.cos(a) * 40},${300 + Math.sin(a) * 40} Q${x},${y} 300,300
              `}
              repeatCount="indefinite"
            />
          </path>
        );
      })}

      {Array.from({ length: 24 }).map((_, i) => (
        <circle key={i} cx={80 + (i * 20) % 460} cy={120 + ((i * 37) % 360)} r="1.6" fill="#caffea">
          <animate attributeName="opacity" dur={`${1 + (i % 6) * 0.3}s`} values="0;1;0" repeatCount="indefinite" />
        </circle>
      ))}

      <style jsx>{`
        .svg {
          width: 100%;
          height: 100%;
          background: radial-gradient(1000px 620px at 70% 15%, rgba(46, 204, 113, 0.14), transparent 60%),
            #03120c;
        }
      `}</style>
    </svg>
  );
}
