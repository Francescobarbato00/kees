import React from "react";

export default function FundedCompaniesBanner() {
  return (
    <section className="funded" aria-labelledby="funded-title">
      <div className="container">
        <header className="head">
          <h1 id="funded-title" className="title">
            Mobile app development <br className="br" />
            for <span className="accent">funded companies</span>
          </h1>
          <div className="divider" aria-hidden />
        </header>

        <div className="content">
          {/* Stats */}
          <ul className="stats" role="list" aria-label="Company milestones">
            <li className="stat" role="listitem">
              <div className="kpi">10<span className="plus"> Years</span></div>
              <div className="label">in business</div>
            </li>
            <li className="sep" aria-hidden />
            <li className="stat" role="listitem">
              <div className="kpi">7+<span className="plus"> Years</span></div>
              <div className="label">in app development</div>
            </li>
            <li className="sep" aria-hidden />
            <li className="stat" role="listitem">
              <div className="kpi">10+<span className="plus"> Startups</span></div>
              <div className="label">unicorns built</div>
            </li>
            <li className="sep" aria-hidden />
            <li className="stat" role="listitem">
              <div className="kpi">#1<span className="plus"> Development</span></div>
              <div className="label">company in USA</div>
            </li>
          </ul>

          {/* CTA */}
          <a href="#contact" className="cta" aria-label="Get in touch">
            Get in touch
          </a>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --plant: #2ecc71;
          --plant-700: #1fa45a;
          --ink: #0a0b14;
          --muted: #6b7280;
          --card: linear-gradient(180deg, #ffffff 0%, #f2fcf6 100%);
        }

        .funded {
          background: linear-gradient(180deg, #ffffff 0%, #f6fbf8 100%);
          padding: clamp(72px, 8vw, 120px) 20px;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .head { margin-bottom: clamp(28px, 5vw, 48px); }

        .title {
          margin: 0 0 20px 0;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system;
          font-weight: 900;
          color: var(--ink);
          font-size: clamp(30px, 5.8vw, 54px);
          line-height: 1.12;
          letter-spacing: -0.3px;
        }
        .br { display: none; }
        @media (min-width: 640px) { .br { display: inline; } }

        .accent {
          background: linear-gradient(90deg, #bff1d4, var(--plant), #bff1d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .divider {
          height: 1px;
          width: 100%;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.08) 15%,
            rgba(0,0,0,0.08) 85%,
            rgba(0,0,0,0) 100%
          );
        }

        .content {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 24px;
          margin-top: 32px;
        }
        @media (max-width: 880px) { .content { grid-template-columns: 1fr; } }

        .stats {
          display: grid;
          grid-auto-flow: column;
          align-items: center;
          gap: 20px;
          list-style: none;
          margin: 0;
          padding: 6px 2px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .stats::-webkit-scrollbar { display: none; }
        @media (max-width: 1024px) { .stats { grid-auto-flow: row; grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .stats { grid-template-columns: 1fr; } }

        .stat {
          padding: 20px 22px;
          border-radius: 18px;
          background: var(--card);
          border: 1px solid rgba(13,16,28,0.08);
          box-shadow: 0 10px 24px rgba(13,16,28,0.06);
          min-width: 220px;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .stat:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 42px rgba(13,16,28,0.12);
          border-color: rgba(13,16,28,0.14);
        }

        .kpi {
          font-family: "Inter Tight", sans-serif;
          font-weight: 900;
          font-size: 28px;
          color: var(--ink);
          letter-spacing: -0.3px;
        }
        .plus {
          font-weight: 700;
          font-size: 16px;
          color: rgba(10,11,20,0.7);
          margin-left: 6px;
        }
        .label {
          margin-top: 4px;
          font-family: ui-sans-serif, system-ui, -apple-system;
          font-weight: 500;
          font-size: 15px;
          color: var(--muted);
        }

        .sep {
          width: 1px; height: 46px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.14) 50%, rgba(0,0,0,0) 100%);
          display: block;
        }
        @media (max-width: 1024px) { .sep { display: none; } }

        .cta {
          justify-self: end;
          display: inline-flex;
          align-items: center;
          height: 50px;
          padding: 0 22px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 900;
          font-family: "Inter Tight", sans-serif;
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          color: #fff;
          box-shadow: 0 14px 32px rgba(46,204,113,0.35);
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(46,204,113,0.5);
        }
        .cta:focus-visible {
          outline: 2px solid var(--plant);
          outline-offset: 3px;
        }
        @media (max-width: 880px) { .cta { justify-self: start; } }
      `}</style>
    </section>
  );
}
