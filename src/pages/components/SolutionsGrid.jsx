// components/SolutionsGrid.jsx
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * SolutionsGrid — mixed light/dark + gradients + scroll-in animations
 * + highlight estético quando si arriva dal menu (evento "solutions-highlight")
 */
export default function SolutionsGrid({
  title = "Our solutions",
  intro = "We understand the unique challenges faced by growers. Our AI-driven solutions bring standardization and help to enhance your greenhouse productivity while supporting autonomous execution.",
  items = [
    {
      cover: "/hero-1.jpg",
      badge: "Gather data",
      title: "Source Workspace",
      bullets: [
        "Centralized, real-time data access",
        "Informed decision-making across facilities",
        "Seamless information governance",
      ],
      href: "#",
      cta: "Explore",
    },
    {
      cover: "/hero-2.jpg",
      badge: "Predict yield",
      title: "Harvest Forecast",
      bullets: [
        "Accurate yield forecasting with real-time updates",
        "Data-driven harvest adjustments",
        "A single source of truth for planning",
      ],
      href: "#",
      cta: "Explore",
    },
    {
      cover: "/hero-3.jpg",
      badge: "Simulate plans",
      title: "Cultivation Management",
      bullets: [
        "Validate and optimize pre-season strategies",
        "Risk-free scenario simulation",
        "Consistent results across crops",
      ],
      href: "#",
      cta: "Explore",
    },
    {
      cover: "/hero-1.jpg",
      badge: "Automate irrigation",
      title: "Irrigation Control",
      bullets: [
        "Maximize yield through precise irrigation",
        "Automated water and nutrient delivery",
        "Scalable, consistent performance",
      ],
      href: "#",
      cta: "Explore",
    },
  ],
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [flash, setFlash] = useState(false); // <<< NEW

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // highlight quando arriva l'evento dal menu
  useEffect(() => {
    const onPulse = () => {
      setFlash(true);
      // auto-off
      const t = setTimeout(() => setFlash(false), 1100);
      return () => clearTimeout(t);
    };
    window.addEventListener("solutions-highlight", onPulse);
    return () => window.removeEventListener("solutions-highlight", onPulse);
  }, []);

  return (
    <section
      id="solutions" // <<< anchor per lo scroll dal menu
      ref={ref}
      className={`solutions ${visible ? "is-visible" : ""} ${flash ? "flash-on" : ""}`}
      aria-labelledby="solutions-title"
    >
      {/* decor sotto (non interattivi) */}
      <div className="decor" aria-hidden>
        <div className="blob a" />
        <div className="blob b" />
        <div className="grain" />
      </div>

      {/* halo/pulse overlay quando arrivo da header */}
      <div className="halo" aria-hidden />

      <div className="container">
        <header className="head">
          <h2 id="solutions-title" className="title">{title}</h2>
          <p className="intro">{intro}</p>
        </header>

        <div className="grid" role="list">
          {items.map((it, i) => (
            <article key={i} className="card" role="listitem" data-anim={i + 1}>
              <figure className="media">
                <img src={it.cover} alt="" />
                {it.badge && <figcaption className="badge">{it.badge}</figcaption>}
                <div className="ink" />
              </figure>

              <h3 className="h3">{it.title}</h3>

              <ul className="bullets">
                {it.bullets.map((b, idx) => (
                  <li key={idx}>
                    <span className="check" aria-hidden>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {it.href && it.cta && (
                <Link href={it.href} className="more" aria-label={`${it.cta} – ${it.title}`}>
                  {it.cta} <ArrowRight />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .solutions {
          --sol-bg-ink: #0b1310;
          --sol-bg-paper: #f7fbf8;
          --sol-ink: #0a0b14;
          --sol-ink-on: #f3f7f5;
          --sol-muted: #5a6a61;
          --sol-plant: #2ecc71;
          --sol-plant-700: #1fa45a;
          --sol-edge: rgba(13, 16, 28, 0.08);
          --sol-edge-ink: rgba(255, 255, 255, 0.08);

          position: relative;
          overflow: hidden;
          padding: clamp(76px, 9vw, 130px) 20px;

          background:
            radial-gradient(1200px 560px at 12% -10%, rgba(46,204,113,0.12), transparent 60%),
            radial-gradient(900px 520px at 110% 20%, rgba(31,164,90,0.10), transparent 60%),
            linear-gradient(120deg, var(--sol-bg-paper) 0%, var(--sol-bg-paper) 38%, #eaf5ee 46%, #cfeee0 50%, var(--sol-bg-ink) 72%, #0a1512 100%);
        }

        .decor { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .blob { position: absolute; border-radius: 999px; filter: blur(90px); opacity: .35; }
        .blob.a { width: 520px; height: 320px; top: -120px; left: -140px; background: var(--sol-plant); }
        .blob.b { width: 360px; height: 280px; bottom: -120px; right: -120px; background: var(--sol-plant-700); }
        .grain {
          position: absolute; inset: 0; opacity: .06; mix-blend-mode: soft-light;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP4+fPnfwAIYgO1K8lG7wAAAABJRU5ErkJggg==");
          background-size: 220px 220px;
        }

        /* Halo pulse quando arrivo dal menu */
        .halo {
          position: absolute; inset: -2px; border-radius: 30px; pointer-events: none; z-index: 1;
          opacity: 0;
          background:
            radial-gradient(800px 320px at 50% 10%, rgba(46,204,113,.18), transparent 60%),
            radial-gradient(800px 320px at 50% 90%, rgba(31,164,90,.16), transparent 60%);
          filter: blur(6px);
          transition: opacity .45s ease;
        }
        .flash-on .halo { opacity: 1; animation: solFlash 1.1s cubic-bezier(.16,1,.3,1) forwards; }
        @keyframes solFlash {
          0%   { opacity: 0; transform: scale(.99); }
          25%  { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.01); }
        }

        .container { position: relative; z-index: 2; max-width: 1240px; margin: 0 auto; }

        .head { text-align: center; max-width: 920px; margin: 0 auto clamp(40px, 6vw, 72px); }
        .title {
          margin: 0 0 12px;
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-weight: 900;
          font-size: clamp(36px, 6.2vw, 66px);
          line-height: 1.05;
          letter-spacing: -0.6px;
          color: #0b130f;
          background: linear-gradient(90deg, #0b130f, #0b130f 40%, var(--sol-plant) 50%, #0b130f 60%, #0b130f);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }
        .intro { margin: 0; color: #31403a; font-size: clamp(16px, 2vw, 19px); line-height: 1.7; }

        .grid {
          display: grid;
          gap: clamp(20px, 2.6vw, 28px);
          grid-template-columns: 1fr;
        }
        @media (min-width: 760px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1180px) { .grid { grid-template-columns: repeat(4, 1fr); } }

        .card {
          display: flex; flex-direction: column; gap: 14px;
          border-radius: 22px;
          padding: 14px;
          background: linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.92));
          border: 1px solid var(--sol-edge);
          box-shadow: 0 10px 30px rgba(10, 21, 18, 0.09), inset 0 1px 0 rgba(255,255,255,0.5);
          backdrop-filter: saturate(120%) blur(2px);
          opacity: 0; transform: translateY(28px) scale(0.98);
        }
        .is-visible [data-anim] {
          opacity: 1; transform: none;
          transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
        }
        .is-visible [data-anim="1"] { transition-delay: .08s; }
        .is-visible [data-anim="2"] { transition-delay: .22s; }
        .is-visible [data-anim="3"] { transition-delay: .36s; }
        .is-visible [data-anim="4"] { transition-delay: .50s; }

        .card:hover { transform: translateY(-4px); box-shadow: 0 24px 52px rgba(10, 21, 18, 0.16); border-color: rgba(13,16,28,0.14); }

        .media { position: relative; height: min(28vh, 230px); border-radius: 16px; overflow: hidden; margin: 0; background: #eaf2ee; }
        .media img { width: 100%; height: 100%; object-fit: cover; display: block; transform: scale(1.04); transition: transform .6s cubic-bezier(.16,1,.3,1); }
        .card:hover .media img { transform: scale(1.1); }

        .ink {
          position: absolute; inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.35) 100%),
            radial-gradient(600px 300px at 90% 10%, rgba(32,199,118,.22), transparent 60%);
          mix-blend-mode: multiply; pointer-events: none;
        }

        .badge {
          position: absolute; left: 14px; top: 14px; height: 32px; padding: 0 14px; border-radius: 999px;
          display: inline-flex; align-items: center; gap: 8px;
          font-weight: 900; font-size: 13px; color: #062a1a;
          background: linear-gradient(90deg, var(--sol-plant), var(--sol-plant-700));
          box-shadow: 0 12px 26px rgba(46,204,113,.35);
        }

        .h3 { margin: 2px 8px 2px; font-family: "Inter Tight", ui-sans-serif, system-ui; color: var(--sol-ink); font-weight: 900; line-height: 1.22; font-size: clamp(20px, 2.5vw, 24px); letter-spacing: -.2px; }

        .bullets { margin: 0; padding: 0 8px; list-style: none; display: grid; gap: 10px; }
        .bullets li { display: flex; align-items: flex-start; gap: 8px; color: #3d4b45; font-size: 15.5px; line-height: 1.65; }
        .check { display: inline-grid; place-items: center; flex: 0 0 20px; height: 20px; border-radius: 6px; font-size: 12px; font-weight: 900; color: #062a1a; background: linear-gradient(90deg, var(--sol-plant), var(--sol-plant-700)); box-shadow: 0 6px 16px rgba(46,204,113,.35); }

        .more {
          margin-top: auto; align-self: flex-start; margin-left: 8px;
          display: inline-flex; align-items: center; gap: 8px;
          height: 42px; padding: 0 16px; border-radius: 999px;
          text-decoration: none; font-weight: 900; color: #062a1a;
          background: linear-gradient(90deg, var(--sol-plant), var(--sol-plant-700));
          box-shadow: 0 14px 34px rgba(46,204,113,.35);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .more:hover { transform: translateY(-2px); box-shadow: 0 20px 42px rgba(46,204,113,.5); }

        @media (prefers-reduced-motion: reduce) {
          .card, .is-visible [data-anim] { transition: none !important; transform: none !important; opacity: 1 !important; }
          .halo { transition: none !important; animation: none !important; }
          .media img { transition: none !important; }
        }
      `}</style>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
