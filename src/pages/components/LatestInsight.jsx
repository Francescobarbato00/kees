import React from "react";

/**
 * LatestInsights
 * Props opzionali:
 * - posts: [
 *    { id, title, image, href, type: "BLOG"|"PRESS RELEASE"|string, date: "YYYY-MM-DD",
 *      excerpt?: string, external?: boolean }
 * ]
 */
export default function LatestInsights({ posts }) {
  // Dati di esempio se non arrivano via prop
  const data =
    posts?.length
      ? posts
      : [
          {
            id: 1,
            type: "PRESS RELEASE",
            title:
              "Source.ag Launches Plant Balance Metrics: a First-of-Its-Kind Virtual Sensor Quantifying Crop Balance",
            excerpt:
              "AMSTERDAM – Thursday, 4 September – Source.ag today announced the launch of ‘Plant Balance Metrics’, a new innovativ...",
            date: "2025-09-04",
            image: "/images1.jpg",
            href: "#",
          },
          {
            id: 2,
            type: "BLOG",
            title:
              "Beyond Accuracy: Why Adaptability Beats Accuracy When Selling Fresh Produce",
            excerpt:
              "Adaptability: the new standard in yield forecasting",
            date: "2025-08-04",
            image: "/images2.jpg",
            href: "#",
          },
          // sidebar samples
          {
            id: 3,
            type: "BLOG",
            title: "How to Future-Proof Your Greenhouse Operation",
            date: "2025-07-04",
            image: "/images3.jpg",
            href: "#",
          },
          {
            id: 4,
            type: "PRESS RELEASE",
            title:
              "Growers Cooperative Harvest House and Source.ag Set New Partnership",
            date: "2025-06-05",
            image: "/images2.jpg",
            href: "#",
          },
          {
            id: 5,
            type: "PRESS RELEASE",
            title:
              "Source.ag and Axia Vegetable Seeds Announce Their Strategic Collaboration",
            date: "2025-04-23",
            image: "/images1.jpg",
            href: "#",
          },
          {
            id: 6,
            type: "HORTIDAILY ↗",
            title:
              "Source.ag and Axia Vegetable Seeds announce partnership",
            date: "2025-04-23",
            image: "/images3.jpg",
            href: "#",
            external: true,
          },
        ];

  // Formatta data breve (DD.MM.YYYY)
  const fmt = (iso) => {
    try {
      const d = new Date(iso);
      const dd = `${String(d.getDate()).padStart(2, "0")}.${String(
        d.getMonth() + 1
      ).padStart(2, "0")}.${d.getFullYear()}`;
      return dd;
    } catch {
      return iso;
    }
  };

  // Le prime 2 vanno nelle card grandi, le altre nella sidebar
  const featured = data.slice(0, 2);
  const rest = data.slice(2);

  return (
    <section className="latest" aria-labelledby="latest-title">
      <div className="container">
        <h2 id="latest-title" className="heading">The Latest Insights</h2>

        <div className="grid">
          {/* Left: 2 big feature cards */}
          <div className="left">
            {featured.map((p) => (
              <a key={p.id} className="feature" href={p.href}>
                <figure className="media">
                  <img src={p.image} alt="" aria-hidden />
                  <figcaption className="overlay">
                    <span className="type">{p.type}</span>
                    <h3 className="title">{p.title}</h3>
                    {p.excerpt ? <p className="excerpt">{p.excerpt}</p> : null}
                    <time className="date" dateTime={p.date}>
                      {fmt(p.date)}
                    </time>
                  </figcaption>
                </figure>
              </a>
            ))}
          </div>

          {/* Right: list */}
          <div className="right" role="list">
            {rest.map((p) => (
              <a key={p.id} className="row" href={p.href} role="listitem">
                <div className="thumb">
                  <img src={p.image} alt="" aria-hidden />
                </div>
                <div className="meta">
                  <span className="type small">{p.type}</span>
                  <h4 className="rowTitle">{p.title}</h4>
                  <time className="rowDate" dateTime={p.date}>
                    {fmt(p.date)}
                  </time>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --ink: #0a0b14;
          --muted: #5a616d;
          --card: #ffffff;
          --edge: #e5e7eb;
          --brand: #0f111a;
        }
        .latest {
          background: #fefefe;
          padding: clamp(48px, 7vw, 80px) 20px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .heading {
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
          font-weight: 800;
          font-size: clamp(28px, 5.4vw, 56px);
          line-height: 1.1;
          text-align: center;
          color: var(--ink);
          margin: 0 0 clamp(22px, 4vw, 36px);
          letter-spacing: -0.3px;
        }

        .grid {
          display: grid;
          grid-template-columns: 2fr 1.1fr; /* simile allo screenshot: colonna dx più stretta */
          gap: clamp(16px, 2vw, 28px);
          align-items: start;
        }
        @media (max-width: 1024px) {
          .grid { grid-template-columns: 1fr; }
        }

        /* LEFT */
        .left {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(16px, 2vw, 22px);
        }
        @media (max-width: 760px) {
          .left { grid-template-columns: 1fr; }
        }

        .feature {
          color: inherit;
          text-decoration: none;
          display: block;
          background: var(--card);
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--edge);
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          box-shadow: 0 8px 22px rgba(10, 11, 20, 0.06);
        }
        .feature:hover {
          transform: translateY(-3px);
          border-color: rgba(10, 11, 20, 0.12);
          box-shadow: 0 14px 34px rgba(10, 11, 20, 0.12);
        }

        .media {
          margin: 0;
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
          transition: transform .5s cubic-bezier(.2,.8,.2,1), filter .5s ease;
          filter: saturate(1) contrast(1.02);
        }
        .feature:hover .media img { transform: scale(1.06); }

        .overlay {
          position: absolute;
          inset: 0;
          display: grid;
          align-content: end;
          gap: 8px;
          padding: clamp(14px, 2.4vw, 18px);
          background: linear-gradient(to top, rgba(6, 8, 18, .75) 0%, rgba(6, 8, 18, .35) 45%, transparent 75%);
          color: #fff;
        }
        .type {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #d1d5db;
        }
        .title {
          margin: 0;
          font-size: clamp(18px, 2.1vw, 24px);
          line-height: 1.25;
          font-weight: 800;
          text-shadow: 0 8px 30px rgba(0,0,0,.45);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .excerpt {
          margin: 2px 0 4px;
          font-size: 14px;
          line-height: 1.5;
          opacity: .9;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .date {
          font-size: 12px;
          opacity: .85;
        }

        /* RIGHT LIST */
        .right {
          display: grid;
          gap: 16px;
        }
        .row {
          display: grid;
          grid-template-columns: 88px 1fr;
          gap: 14px;
          align-items: center;
          padding: 10px 8px;
          border-radius: 10px;
          text-decoration: none;
          color: inherit;
          transition: background .2s ease, transform .2s ease;
        }
        .row:hover {
          background: #f3f4f6;
          transform: translateY(-1px);
        }
        .thumb {
          width: 88px;
          height: 66px;
          border-radius: 8px;
          overflow: hidden;
          background: #e5e7eb;
          border: 1px solid var(--edge);
        }
        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .meta {
          display: grid;
          gap: 4px;
        }
        .small {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #6b7280;
        }
        .rowTitle {
          margin: 0;
          font-family: "Inter Tight", sans-serif;
          font-weight: 700;
          font-size: 18px;
          line-height: 1.35;
          color: var(--ink);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .rowDate {
          font-size: 13px;
          color: #6b7280;
        }
      `}</style>
    </section>
  );
}
