// components/HighlightsWithLogosDark.jsx
import React, { useState, useEffect, useRef } from "react";

export default function HighlightsWithLogosDark() {
  const points = [
    {
      title: (
        <>
          Maximize your <br /> profit
        </>
      ),
      text: "Achieve optimal results with AI-powered crop predictions, improving resource efficiency and strengthening your price negotiations.",
    },
    {
      title: (
        <>
          Eliminate <br /> uncertainty
        </>
      ),
      text: "Lower your risks with advanced analytics to refine cultivation strategies and make decisions based on data.",
    },
    {
      title: (
        <>
          Scale your <br /> operations
        </>
      ),
      text: "Expand and optimize operations with precise greenhouse control, ensuring efficiency and consistency at every stage.",
    },
  ];

  const [reveal, setReveal] = useState({});
  const setOn = (i, v) => setReveal((s) => ({ ...s, [i]: v }));

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section
      ref={ref}
      className={`hl ${visible ? "is-visible" : ""}`}
      aria-labelledby="hl-title"
    >
      <div className="container">
        {/* Titolo grande della sezione */}
        <header className="header">
          <h2 id="hl-title" className="sectionTitle">
            Unlock the <span className="accent">Power of Growth</span>
          </h2>
          <p className="subtitle">
            Our technology helps you grow smarter, reduce risks and expand with confidence.
          </p>
        </header>

        <div className="grid">
          {points.map((p, i) => {
            const isOn = !!reveal[i];
            return (
              <article
                key={i}
                className={`row${isOn ? " is-on" : ""}`}
                data-anim={i + 1}
              >
                <button
                  type="button"
                  className="rail"
                  aria-label="Reveal description"
                  onMouseEnter={() => setOn(i, true)}
                  onMouseLeave={() => setOn(i, false)}
                  onFocus={() => setOn(i, true)}
                  onBlur={() => setOn(i, false)}
                />
                <h3
                  className="title"
                  onMouseEnter={() => setOn(i, true)}
                  onMouseLeave={() => setOn(i, false)}
                  onFocus={() => setOn(i, true)}
                  onBlur={() => setOn(i, false)}
                >
                  {p.title}
                </h3>
                <div className="reveal">
                  <p className="text">{p.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .hl {
          --hl-bg: #0a0f0d;
          --hl-card: #101915;
          --hl-ink: #f3f7f5;
          --hl-muted: #a3b1a9;
          --hl-plant: #2ecc71;
          --hl-plant-700: #1fa45a;
          --hl-edge: rgba(255, 255, 255, 0.08);

          background: radial-gradient(
              1000px 500px at 20% -10%,
              rgba(46, 204, 113, 0.08),
              transparent 60%
            ),
            radial-gradient(
              1000px 500px at 100% 0%,
              rgba(31, 164, 90, 0.06),
              transparent 60%
            ),
            var(--hl-bg);
          padding: clamp(72px, 10vw, 120px) 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .header {
          text-align: center;
          margin-bottom: clamp(40px, 6vw, 70px);
        }
        .sectionTitle {
          margin: 0;
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-weight: 900;
          font-size: clamp(38px, 6vw, 66px);
          line-height: 1.08;
          letter-spacing: -0.5px;
          color: var(--hl-ink);
        }
        .accent {
          background: linear-gradient(90deg, var(--hl-plant), var(--hl-plant-700));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .subtitle {
          margin: 16px auto 0;
          max-width: 620px;
          font-size: clamp(16px, 2vw, 19px);
          line-height: 1.6;
          color: var(--hl-muted);
        }

        /* Grid */
        .grid {
          display: grid;
          gap: clamp(26px, 4vw, 42px);
        }

        .row {
          position: relative;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(16px, 4vw, 32px);
          align-items: start;
          padding: clamp(16px, 2.2vw, 20px);
          border-radius: 18px;
          background: var(--hl-card);
          border: 1px solid var(--hl-edge);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
          transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
          overflow: clip;
          isolation: isolate;

          opacity: 0;
          transform: translateY(24px);
        }

        .is-visible [data-anim] {
          opacity: 1;
          transform: none;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .is-visible [data-anim="1"] {
          transition-delay: 0.05s;
        }
        .is-visible [data-anim="2"] {
          transition-delay: 0.18s;
        }
        .is-visible [data-anim="3"] {
          transition-delay: 0.31s;
        }

        .row:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
          border-color: rgba(46, 204, 113, 0.25);
        }
        @media (max-width: 880px) {
          .row {
            grid-template-columns: 1fr;
          }
        }

        /* Rail */
        .rail {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 12px;
          border: 0;
          padding: 0;
          background: linear-gradient(180deg, var(--hl-plant), var(--hl-plant-700));
          opacity: 0.25;
          cursor: pointer;
          transition: opacity 0.25s ease, filter 0.25s ease;
        }
        .rail:hover,
        .row.is-on .rail,
        .rail:focus-visible {
          opacity: 0.6;
          filter: saturate(130%);
          outline: none;
        }

        .title {
          margin: 0;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system;
          font-weight: 900;
          letter-spacing: -0.4px;
          color: var(--hl-ink);
          font-size: clamp(26px, 4.6vw, 40px);
          line-height: 1.1;
          padding-left: clamp(8px, 1.4vw, 12px);
          transition: color 0.25s ease, background 0.25s ease;
        }
        .row:has(.title:hover) .title,
        .row.is-on .title {
          background: linear-gradient(90deg, var(--hl-plant), var(--hl-plant-700));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .reveal {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.42s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal > * {
          overflow: hidden;
        }
        .text {
          margin: 0;
          color: var(--hl-muted);
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.7;
          opacity: 0;
          transform: translateY(8px);
          filter: blur(6px);
          transition: opacity 0.42s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.42s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.42s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .row:has(.rail:hover) .reveal,
        .row:has(.title:hover) .reveal,
        .row:has(.rail:focus-visible) .reveal,
        .row:has(.title:focus-visible) .reveal,
        .row.is-on .reveal {
          grid-template-rows: 1fr;
        }
        .row:has(.rail:hover) .text,
        .row:has(.title:hover) .text,
        .row:has(.rail:focus-visible) .text,
        .row:has(.title:focus-visible) .text,
        .row.is-on .text {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
      `}</style>
    </section>
  );
}
