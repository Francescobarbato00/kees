// components/WhyChooseUs.jsx
import React, { useEffect, useRef, useState } from "react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`why ${visible ? "visible" : ""}`}
      aria-labelledby="why-title"
    >
      {/* decor: sotto al contenuto */}
      <div className="decor">
        <div className="blur blur-a" aria-hidden />
        <div className="blur blur-b" aria-hidden />
        <div className="grain" aria-hidden />
      </div>

      <div className="container">
        <h2 id="why-title" className="title">
          Experienced teams and an agile framework,{" "}
          <span className="highlight">we prioritise</span> the commercial goals
          of the client to deliver the highest business value.
        </h2>

        <ul className="points" role="list">
          <li>
            <span className="tick" aria-hidden>
              ✓
            </span>{" "}
            Outcome-driven approach
          </li>
          <li>
            <span className="tick" aria-hidden>
              ✓
            </span>{" "}
            Time-to-value ridotto
          </li>
          <li>
            <span className="tick" aria-hidden>
              ✓
            </span>{" "}
            Team senior cross-funzionale
          </li>
        </ul>

        <a href="#contact" className="ctaButton">
          Why choose us <ArrowRight />
        </a>
      </div>

      <style jsx>{`
        .why {
          --why-plant: #2ecc71;
          --why-plant-700: #1fa45a;
          --why-ink: #0a0b14;

          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: radial-gradient(
              120% 120% at 50% -20%,
              #f0fff6 0%,
              #ffffff 40%,
              #f6fbf8 100%
            );
          padding: clamp(80px, 10vw, 140px) 20px;
        }

        /* decor */
        .decor {
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        .grain {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=");
          background-size: 220px;
          pointer-events: none;
        }
        .blur {
          position: absolute;
          filter: blur(80px);
          opacity: 0.5;
          pointer-events: none;
        }
        .blur-a {
          width: 460px;
          height: 260px;
          left: -140px;
          top: -100px;
          background: radial-gradient(
            100% 100% at 50% 50%,
            rgba(46, 204, 113, 0.35),
            transparent 70%
          );
        }
        .blur-b {
          width: 460px;
          height: 260px;
          right: -140px;
          bottom: -100px;
          background: radial-gradient(
            100% 100% at 50% 50%,
            rgba(31, 164, 90, 0.3),
            transparent 70%
          );
        }

        .container {
          max-width: 1080px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          color: var(--why-ink);
        }

        /* animazioni ingresso */
        .title,
        .points li,
        .ctaButton {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .visible .title,
        .visible .points li,
        .visible .ctaButton {
          opacity: 1;
          transform: translateY(0);
        }
        .visible .points li:nth-child(1) {
          transition-delay: 0.2s;
        }
        .visible .points li:nth-child(2) {
          transition-delay: 0.35s;
        }
        .visible .points li:nth-child(3) {
          transition-delay: 0.5s;
        }
        .visible .ctaButton {
          transition-delay: 0.65s;
        }

        .title {
          margin: 0 0 26px;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system;
          font-weight: 800;
          font-size: clamp(30px, 4.8vw, 54px);
          line-height: 1.16;
          letter-spacing: -0.3px;
          text-wrap: balance;
        }
        .highlight {
          background: linear-gradient(
            90deg,
            #bff1d4,
            var(--why-plant),
            #bff1d4
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          white-space: nowrap;
        }

        .points {
          display: flex;
          gap: 14px 20px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin: 20px 0 34px;
          padding: 0;
          list-style: none;
          font-weight: 600;
          color: #1f2937;
        }
        .points li {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid rgba(13, 16, 28, 0.08);
          box-shadow: 0 10px 22px rgba(13, 16, 28, 0.06);
          font-size: 15px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .points li:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(13, 16, 28, 0.08);
        }

        .tick {
          display: inline-grid;
          place-items: center;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            var(--why-plant),
            var(--why-plant-700)
          );
          color: #08210f;
          font-weight: 900;
          font-size: 14px;
          box-shadow: 0 6px 14px rgba(46, 204, 113, 0.35);
        }

        .ctaButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 56px;
          padding: 0 30px;
          border-radius: 16px;
          font-family: "Inter Tight", sans-serif;
          font-weight: 900;
          font-size: 18px;
          text-decoration: none;
          color: #08210f;
          background: linear-gradient(
            90deg,
            var(--why-plant),
            var(--why-plant-700)
          );
          box-shadow: 0 16px 34px rgba(46, 204, 113, 0.35);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .ctaButton:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 22px 44px rgba(46, 204, 113, 0.55);
        }
        .ctaButton:focus-visible {
          outline: 3px solid #0b3a22;
          outline-offset: 4px;
        }
      `}</style>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
