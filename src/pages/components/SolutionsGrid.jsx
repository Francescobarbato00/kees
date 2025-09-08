import React from "react";
import Link from "next/link";

/**
 * SolutionsGrid
 * - Sezione con titolo + intro
 * - Griglia 1→2→4 card responsive
 * - Immagine con badge (overlay), hover zoom soft
 * - Titolo gerarchico + bullet con check
 * - CTA opzionale per ogni card
 *
 * Props:
 *  title?: string | ReactNode
 *  intro?: string
 *  items?: Array<{
 *    cover: string;             // percorso immagine
 *    badge: string;             // testo piccolo su immagine (es. "Predict yield")
 *    title: string;             // titolo card
 *    bullets: string[];         // punti elenco
 *    href?: string;             // link (opzionale)
 *    cta?: string;              // label CTA (opzionale)
 *  }>
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
  return (
    <section className="solutions" aria-labelledby="solutions-title">
      <div className="container">
        <header className="head">
          <h2 id="solutions-title" className="title">{title}</h2>
          <p className="intro">{intro}</p>
        </header>

        <div className="grid" role="list">
          {items.map((it, i) => (
            <article key={i} className="card" role="listitem">
              <figure className="media">
                <img src={it.cover} alt="" />
                {it.badge && <figcaption className="badge">{it.badge}</figcaption>}
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

              {(it.href && it.cta) && (
                <Link href={it.href} className="more" aria-label={`${it.cta} – ${it.title}`}>
                  {it.cta} <ArrowRight />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(:root){
          --paper:#f6fbf8;
          --ink:#0a0b14;
          --muted:#475569;
          --plant:#2ecc71;
          --plant-700:#1fa45a;
          --edge:rgba(13,16,28,.08);
        }
        .solutions{
          background:var(--paper);
          padding: clamp(56px, 7vw, 110px) 20px;
        }
        .container{ max-width:1200px; margin:0 auto; }

        .head{ text-align:center; max-width:920px; margin:0 auto clamp(26px,4vw,46px); }
        .title{
          margin:0 0 8px; color:var(--ink);
          font-family:"Inter Tight", ui-sans-serif, system-ui;
          font-weight:900; letter-spacing:-.3px;
          font-size: clamp(32px, 5.6vw, 56px); line-height:1.04;
        }
        .intro{
          margin:0; color:var(--muted);
          font-size: clamp(16px, 2vw, 18px); line-height:1.7;
        }

        .grid{
          display:grid; gap: clamp(16px, 2.4vw, 24px);
          grid-template-columns: 1fr;
        }
        @media (min-width: 760px){ .grid{ grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1180px){ .grid{ grid-template-columns: repeat(4, 1fr); } }

        .card{
          display:flex; flex-direction:column; gap:12px;
          background:#fff; border:1px solid var(--edge); border-radius:18px;
          box-shadow:0 10px 24px rgba(13,16,28,.06);
          padding:12px; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .card:hover{
          transform: translateY(-3px);
          border-color: rgba(13,16,28,.14);
          box-shadow:0 18px 40px rgba(13,16,28,.12);
        }

        .media{
          position:relative; height:min(28vh, 220px); border-radius:14px; overflow:hidden;
          background:#f0f3f2; margin:0;
        }
        .media img{
          width:100%; height:100%; object-fit:cover; display:block;
          transform: scale(1.02); transition: transform .5s ease;
        }
        .card:hover .media img{ transform: scale(1.06); }
        .badge{
          position:absolute; left:12px; top:12px;
          height:30px; padding:0 12px; border-radius:999px;
          display:inline-flex; align-items:center; font-weight:900; font-size:13px;
          color:#062a1a; background:linear-gradient(90deg,var(--plant),var(--plant-700));
          box-shadow:0 10px 22px rgba(46,204,113,.35);
        }

        .h3{
          margin:2px 6px 2px; color:var(--ink);
          font-family:"Inter Tight", ui-sans-serif, system-ui;
          font-size: clamp(20px, 2.6vw, 24px); font-weight:900; line-height:1.2;
        }

        .bullets{
          margin:0; padding:0 6px 0 6px; list-style:none; display:grid; gap:10px;
        }
        .bullets li{ display:flex; align-items:flex-start; gap:8px; color:var(--muted); font-size:15.5px; line-height:1.6; }
        .check{
          display:inline-grid; place-items:center; flex:0 0 20px; height:20px;
          border-radius:6px; font-size:12px; font-weight:900; color:#062a1a;
          background: linear-gradient(90deg,var(--plant),var(--plant-700));
        }

        .more{
          margin-top:auto; align-self:flex-start; margin-left:6px;
          display:inline-flex; align-items:center; gap:8px;
          height:40px; padding:0 14px; border-radius:999px; text-decoration:none;
          font-weight:900; color:#062a1a;
          background:linear-gradient(90deg,var(--plant),var(--plant-700));
          box-shadow:0 10px 24px rgba(46,204,113,.35);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .more:hover{ transform: translateY(-2px); box-shadow:0 16px 34px rgba(46,204,113,.5); }
      `}</style>
    </section>
  );
}

function ArrowRight(){
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
