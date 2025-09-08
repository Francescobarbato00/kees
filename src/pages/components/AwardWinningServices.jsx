import React from "react";

/**
 * AwardWinningServices (Planttec)
 * Props opzionali:
 * items: [{ icon: "/path.svg", title: "Title", lines: ["riga 1","riga 2","riga 3"] }]
 */
export default function AwardWinningServices({ items }) {
  const data =
    items?.length
      ? items
      : [
          {
            icon: "/Innovative.svg",
            title: "NFT Development",
            lines: ["Non Fungible Tokens are in trend.", "We've been building them", "since 2016"],
          },
          {
            icon: "/Cost-effectiveness.svg",
            title: "Mobile App Development",
            lines: ["From Social Media Apps like TikTok", "to Fitness Tracking", "and Marketplaces"],
          },
          {
            icon: "/Industry.svg",
            title: "Web App Development",
            lines: ["From Social Media Apps like TikTok", "to Fitness Tracking", "and Marketplaces"],
          },
          {
            icon: "/Scalability.svg",
            title: "Software Development",
            lines: ["From a custom CRM to", "Transportation Management", "Systems — we’ve built it all"],
          },
        ];

  return (
    <section className="services" aria-labelledby="services-title">
      <div className="container">
        <header className="head">
          <h2 id="services-title" className="title">
            We provide clients <br className="br" />
            with <span className="accent">award-winning</span> services
          </h2>
          <a href="#" className="viewAll" aria-label="View all services">
            View all services →
          </a>
        </header>

        <div className="grid" role="list">
          {data.map((item, i) => (
            <article key={i} className="card" role="listitem" tabIndex={0}>
              <div className="glow" aria-hidden />
              <div className="icon">
                <img src={item.icon} alt="" aria-hidden />
              </div>
              <h3 className="serviceTitle">{item.title}</h3>
              <p className="serviceText">
                {item.lines.map((l, idx) => (
                  <span key={idx}>
                    {l}
                    {idx < item.lines.length - 1 ? <><br /></> : null}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --plant: #2ecc71;
          --plant-700: #1fa45a;
          --ink: #0a0b14;
        }

        .services {
          background: linear-gradient(180deg, #ffffff 0%, #f6fbf8 100%);
          padding: clamp(56px, 7vw, 100px) 20px;
          position: relative;
        }
        .container { max-width: 1200px; margin: 0 auto; }

        .head {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 16px;
          margin-bottom: clamp(28px, 4vw, 40px);
        }
        @media (max-width: 700px) {
          .head { grid-template-columns: 1fr; align-items: start; gap: 10px; }
        }

        .title {
          margin: 0;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system;
          font-weight: 800;
          color: rgb(10, 13, 49);
          font-size: clamp(28px, 5vw, 48px);
          line-height: 1.16;
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

        .viewAll {
          justify-self: end;
          align-self: center;
          text-decoration: none;
          font-weight: 800;
          font-family: "Inter Tight", sans-serif;
          color: #1f2937;
          padding: 10px 12px;
          border-radius: 12px;
          transition: color .2s ease, background .2s ease, transform .2s ease;
        }
        .viewAll:hover { color: #0b3a22; background: rgba(46,204,113,.10); transform: translateY(-1px); }
        .viewAll:focus-visible { outline: 2px solid var(--plant); outline-offset: 3px; }
        @media (max-width: 700px) { .viewAll { justify-self: start; padding-left: 0; background: transparent; } }

        .grid {
          display: grid; gap: 18px; grid-template-columns: 1fr;
        }
        @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .grid { grid-template-columns: repeat(4, 1fr); } }

        .card {
          position: relative;
          padding: 22px;
          border-radius: 18px;
          background: linear-gradient(180deg, #ffffff 0%, #f1f7f3 100%);
          border: 1px solid rgba(13,16,28,0.06);
          box-shadow: 0 10px 24px rgba(13,16,28,0.06);
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          outline: none;
        }
        .card:hover, .card:focus {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(13,16,28,0.12);
          border-color: rgba(13,16,28,0.12);
        }

        /* bordo sfumato verde */
        .glow {
          position: absolute; inset: 0; border-radius: 18px; padding: 1px;
          background: linear-gradient(120deg,
            rgba(46, 204, 113, 0.35),
            rgba(31, 164, 90, 0.15),
            rgba(255, 255, 255, 0.12)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          pointer-events: none;
        }

        .icon {
          width: 60px; height: 60px; border-radius: 16px; display: grid; place-items: center;
          background: radial-gradient(110% 110% at 20% 20%, #ffffff 0%, #eefcf5 70%, #e6f8ef 100%);
          border: 1px solid rgba(13,16,28,0.08);
          box-shadow: 0 8px 20px rgba(13,16,28,0.08), inset 0 0 0 1px rgba(255,255,255,0.55);
          margin-bottom: 14px;
        }
        .icon img { max-width: 30px; max-height: 30px; object-fit: contain; filter: contrast(1.05); }

        .serviceTitle {
          font-family: "Inter Tight", sans-serif;
          font-weight: 800;
          font-size: 20px; line-height: 26px;
          color: #0f0f0f; margin: 2px 0 8px 0; transition: color .2s ease;
        }
        .card:hover .serviceTitle, .card:focus .serviceTitle { color: var(--plant-700); }

        .serviceText {
          font-family: ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Helvetica, Arial;
          font-weight: 500;
          color: rgba(0,0,0,0.62);
          font-size: 15.5px; line-height: 22px; margin: 0;
        }
      `}</style>
    </section>
  );
}
