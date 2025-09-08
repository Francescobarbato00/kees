import React from "react";
import Link from "next/link";

export default function LatestInsightsPro({ items }) {
  const demo =
    items?.length
      ? items
      : [
          {
            id: "a1",
            title: "Plant Balance Metrics: A First-of-its-kind Virtual Sensor",
            category: "PRESS RELEASE",
            date: "04.09.2025",
            image: "/hero-1.jpg",
            excerpt:
              "A data-driven approach to quantify plant balance and predict yield.",
            href: "#",
            featured: true,
          },
          {
            id: "a2",
            title: "Beyond Accuracy: Adaptability in Fresh Produce",
            category: "BLOG",
            date: "04.08.2025",
            image: "/hero-2.jpg",
            excerpt:
              "Adaptability becomes the new gold standard for forecasting under uncertainty.",
            href: "#",
            featured: true,
          },
          {
            id: "a3",
            title: "How to Future-Proof Your Greenhouse Operation",
            category: "BLOG",
            date: "04.07.2025",
            image: "/hero-3.jpg",
            href: "#",
          },
          {
            id: "a4",
            title: "Growers Cooperative Harvest House and Source.ag Set New…",
            category: "PRESS RELEASE",
            date: "05.06.2025",
            image: "/hero-1.jpg",
            href: "#",
          },
          {
            id: "a5",
            title: "Source.ag and Axia Vegetable Seeds Announce Partnership",
            category: "PRESS RELEASE",
            date: "23.04.2025",
            image: "/hero-2.jpg",
            href: "#",
          },
        ];

  const features = demo.filter((d) => d.featured).slice(0, 2);
  const side = demo.filter((d) => !d.featured).slice(0, 3);

  return (
    <section className="insights" aria-labelledby="insights-title">
      <div className="container">
        <header className="top">
          <h2 id="insights-title" className="title">
            The <span className="accent">Latest</span> Insights
          </h2>
          <Link href="#" className="all">
            All articles →
          </Link>
        </header>

        <div className="grid">
          {/* Feature cards */}
          <div className="features">
            {features.map((p) => (
              <article key={p.id} className="card">
                <Link href={p.href} className="imageWrap" aria-label={p.title}>
                  <img src={p.image} alt="" />
                  <span className="badge">{p.category}</span>
                </Link>
                <div className="body">
                  <h3 className="h3">
                    <Link href={p.href}>{p.title}</Link>
                  </h3>
                  <p className="excerpt">{p.excerpt}</p>
                  <time className="date">{p.date}</time>
                </div>
              </article>
            ))}
          </div>

          {/* Right compact list */}
          <aside className="side" aria-label="More insights">
            {side.map((p) => (
              <Link href={p.href} key={p.id} className="row">
                <div className="thumb">
                  <img src={p.image} alt="" />
                </div>
                <div className="info">
                  <span className="cat">{p.category}</span>
                  <h4 className="h4">{p.title}</h4>
                  <time className="date">{p.date}</time>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </div>

      <style jsx>{`
        .insights {
          --plant: #20c776;
          --plant-700: #15975a;
          --muted: #6b7280;
          --edge: rgba(13, 16, 28, 0.08);

          background: #f9fbf9;
          padding: clamp(48px, 6vw, 90px) 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: clamp(24px, 4vw, 36px);
        }

        .title {
          font-family: "Inter Tight", sans-serif;
          font-weight: 900;
          font-size: clamp(28px, 5vw, 42px);
          margin: 0;
        }
        .accent {
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .all {
          text-decoration: none;
          font-weight: 700;
          color: var(--plant-700);
        }

        .grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        /* Feature cards */
        .features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 700px) {
          .features {
            grid-template-columns: 1fr;
          }
        }

        .card {
          background: #fff;
          border: 1px solid var(--edge);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);
        }

        .imageWrap {
          position: relative;
          display: block;
          aspect-ratio: 4 / 3;
        }
        .imageWrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .badge {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 12px;
          font-weight: 700;
          background: var(--plant);
          color: #fff;
          padding: 4px 8px;
          border-radius: 8px;
        }

        .body {
          padding: 14px 16px 18px;
        }
        .h3 {
          font-size: 18px;
          margin: 0 0 8px;
        }
        .excerpt {
          font-size: 14px;
          color: var(--muted);
          margin: 0 0 10px;
        }
        .date {
          font-size: 13px;
          color: var(--muted);
        }

        /* Side list */
        .side {
          display: grid;
          gap: 14px;
        }
        .row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 12px;
          background: #fff;
          border: 1px solid var(--edge);
          border-radius: 12px;
          padding: 8px;
          text-decoration: none;
          color: inherit;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .row:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
        }
        .thumb {
          width: 80px;
          height: 80px;
          overflow: hidden;
          border-radius: 10px;
        }
        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .info {
          display: grid;
          gap: 4px;
          align-content: center;
        }
        .cat {
          font-size: 11px;
          font-weight: 700;
          color: var(--plant-700);
        }
        .h4 {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.3;
        }
        .date {
          font-size: 12px;
          color: var(--muted);
        }
      `}</style>
    </section>
  );
}
