// components/LatestInsightsPro.jsx
import React, { useEffect, useRef, useState } from "react";
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
      className={`insights ${visible ? "is-visible" : ""}`}
      aria-labelledby="insights-title"
    >
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
            {features.map((p, i) => (
              <article key={p.id} className="card" data-anim={i + 1}>
                <Link href={p.href} className="imageWrap" aria-label={p.title}>
                  <img src={p.image} alt="" />
                  <span className="badge">{p.category}</span>
                  <div className="overlay" />
                </Link>
                <div className="body">
                  <h3 className="h3">
                    <Link href={p.href}>{p.title}</Link>
                  </h3>
                  {p.excerpt && <p className="excerpt">{p.excerpt}</p>}
                  <time className="date">{p.date}</time>
                </div>
              </article>
            ))}
          </div>

          {/* Right compact list */}
          <aside className="side" aria-label="More insights">
            {side.map((p, i) => (
              <Link
                href={p.href}
                key={p.id}
                className="row"
                data-anim={features.length + i + 1}
              >
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

          background: radial-gradient(
              1000px 500px at 10% -10%,
              rgba(32, 199, 118, 0.12),
              transparent
            ),
            #f9fbf9;
          padding: clamp(56px, 7vw, 100px) 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: clamp(32px, 4vw, 48px);
        }

        .title {
          font-family: "Inter Tight", sans-serif;
          font-weight: 900;
          font-size: clamp(32px, 5vw, 46px);
          margin: 0;
          position: relative;
        }
        .accent {
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 80px;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
        }
        .all {
          text-decoration: none;
          font-weight: 800;
          font-size: 15px;
          color: var(--plant-700);
          transition: color 0.25s ease;
        }
        .all:hover {
          color: var(--plant);
        }

        .grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 28px;
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
          gap: 24px;
        }
        @media (max-width: 700px) {
          .features {
            grid-template-columns: 1fr;
          }
        }

        .card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;

          /* stato iniziale nascosto */
          opacity: 0;
          transform: translateY(24px) scale(0.98) rotate(-1deg);
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
        .is-visible [data-anim="4"] {
          transition-delay: 0.44s;
        }
        .is-visible [data-anim="5"] {
          transition-delay: 0.57s;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
        }

        .imageWrap {
          position: relative;
          display: block;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .imageWrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .card:hover .imageWrap img {
          transform: scale(1.05);
        }
        .badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-size: 12px;
          font-weight: 700;
          background: var(--plant);
          color: #fff;
          padding: 4px 10px;
          border-radius: 999px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 40%,
            rgba(0, 0, 0, 0.35) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card:hover .overlay {
          opacity: 1;
        }

        .body {
          padding: 18px 20px 22px;
        }
        .h3 {
          font-size: 19px;
          margin: 0 0 10px;
          line-height: 1.3;
        }
        .h3 a {
          text-decoration: none;
          color: #0a0b14;
          transition: color 0.25s ease;
        }
        .h3 a:hover {
          color: var(--plant-700);
        }
        .excerpt {
          font-size: 15px;
          color: var(--muted);
          margin: 0 0 12px;
        }
        .date {
          font-size: 13px;
          color: var(--muted);
        }

        /* Side list */
        .side {
          display: grid;
          gap: 16px;
        }
        .row {
          display: grid;
          grid-template-columns: 88px 1fr;
          gap: 14px;
          background: #fff;
          border-radius: 14px;
          padding: 10px;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;

          opacity: 0;
          transform: translateY(18px) scale(0.98);
        }
        .row:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.1);
        }
        .is-visible [data-anim].row {
          opacity: 1;
          transform: none;
          transition: opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .thumb {
          width: 88px;
          height: 88px;
          overflow: hidden;
          border-radius: 12px;
          flex-shrink: 0;
        }
        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }
        .row:hover .thumb img {
          transform: scale(1.08);
        }
        .info {
          display: grid;
          gap: 6px;
          align-content: center;
        }
        .cat {
          font-size: 11px;
          font-weight: 700;
          color: var(--plant-700);
          text-transform: uppercase;
          letter-spacing: 0.05em;
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
