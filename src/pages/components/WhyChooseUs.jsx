import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="why" aria-labelledby="why-title">
      {/* accenti decorativi */}
      <div className="blur blur-a" aria-hidden />
      <div className="blur blur-b" aria-hidden />

      <div className="container">
        <h2 id="why-title" className="title">
          Experienced teams and an agile framework,{" "}
          <span className="highlight">we prioritise</span> the commercial goals
          of the client to deliver the highest business value.
        </h2>

        <ul className="points" role="list">
          <li><span className="tick" aria-hidden>✓</span> Outcome-driven approach</li>
          <li><span className="tick" aria-hidden>✓</span> Time-to-value ridotto</li>
          <li><span className="tick" aria-hidden>✓</span> Team senior cross-funzionale</li>
        </ul>

        <a href="#contact" className="ctaButton">Why choose us</a>
      </div>

      <style jsx>{`
        :global(:root) {
          --plant: #2ecc71;
          --plant-700: #1fa45a;
          --ink: #0a0b14;
        }

        .why {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #ffffff 0%, #f6fbf8 100%);
          padding: clamp(68px, 8vw, 120px) 20px;
        }

        .container {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }

        .title {
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system;
          font-weight: 800;
          font-size: clamp(28px, 4.6vw, 50px);
          line-height: 1.18;
          color: var(--ink);
          margin: 0 0 18px;
          letter-spacing: -0.2px;
        }

        .highlight {
          background: linear-gradient(90deg, #bff1d4, var(--plant), #bff1d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .points {
          display: flex;
          gap: 12px 18px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin: 10px 0 26px;
          padding: 0;
          list-style: none;
          color: #1f2937;
          font-weight: 600;
        }
        .points li {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid rgba(13,16,28,0.08);
          box-shadow: 0 10px 22px rgba(13,16,28,0.06);
          font-size: 14.5px;
        }
        .tick {
          display: inline-grid;
          place-items: center;
          width: 20px; height: 20px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          color: #08210f;
          font-weight: 900;
          box-shadow: 0 6px 14px rgba(46,204,113,0.35);
        }

        .ctaButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          padding: 0 26px;
          border-radius: 14px;
          font-family: "Inter Tight", sans-serif;
          font-weight: 900;
          font-size: 18px;
          text-decoration: none;
          color: #08210f;
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          box-shadow: 0 16px 34px rgba(46, 204, 113, 0.35);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .ctaButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 44px rgba(46, 204, 113, 0.5);
        }
        .ctaButton:focus-visible {
          outline: 2px solid #0b3a22;
          outline-offset: 3px;
        }

        /* blobs decorativi */
        .blur {
          position: absolute;
          filter: blur(60px);
          opacity: 0.5;
          pointer-events: none;
        }
        .blur-a {
          width: 420px; height: 220px;
          left: -120px; top: -80px;
          background: radial-gradient(100% 100% at 50% 50%, rgba(46,204,113,0.35), transparent 70%);
        }
        .blur-b {
          width: 420px; height: 220px;
          right: -120px; bottom: -80px;
          background: radial-gradient(100% 100% at 50% 50%, rgba(31,164,90,0.30), transparent 70%);
        }
      `}</style>
    </section>
  );
}
