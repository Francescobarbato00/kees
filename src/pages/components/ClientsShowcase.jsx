// components/ClientsShowcase.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ClientsShowcase() {
  const showcase = [
    {
      img: "/hero-1.jpg",
      title: "Vereijken",
      desc: "High-tech tomato production across Europe, powered by AI-driven strategies.",
    },
    {
      img: "/hero-2.jpg",
      title: "Finka",
      desc: "Sustainable greenhouse operations delivering consistent quality in Latin America.",
    },
    {
      img: "/hero-3.jpg",
      title: "Growers United",
      desc: "A cooperative leveraging data to optimize yield and market positioning.",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % showcase.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="inner">
        {/* colonna sinistra */}
        <div className="lead">
          <h2 id="clients-title" className="title">
            Satisfied <span className="highlight">customers</span>
            <br /> across the globe
          </h2>
          <p className="intro">
            We collaborate with more than <strong>2,000 clients</strong> in{" "}
            <strong>45+ countries</strong>. Discover how they scale their
            operations with Planttec.
          </p>
          <p>
            Every project combines <strong>data</strong>,{" "}
            <strong>predictive insights</strong> and{" "}
            <strong>sustainable practices</strong> to deliver results that last.
          </p>
          <Link href="/cases" className="cta">
            Read success stories <ArrowRight />
          </Link>
        </div>

        {/* colonna destra */}
        <div className="slideshow">
          {showcase.map((c, i) => (
            <figure
              key={i}
              className={`slide ${i === active ? "is-active" : ""}`}
            >
              <img src={c.img} alt={c.title} />
              <figcaption>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </figcaption>
            </figure>
          ))}
          <div className="dots">
            {showcase.map((_, i) => (
              <button
                key={i}
                className={i === active ? "on" : ""}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .clients {
          --green: #2ecc71;
          --green-700: #1fa45a;
          --ink: #0b1320;
          --muted: #667085;

          padding: clamp(64px, 8vw, 110px) 20px;
          background: radial-gradient(
              900px 480px at 90% 10%,
              rgba(46, 204, 113, 0.06),
              transparent 60%
            ),
            #f9fbf9;
        }
        .inner {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 5vw, 60px);
          align-items: center;
        }

        /* testo */
        .title {
          margin: 0 0 20px;
          font-family: "Inter Tight", sans-serif;
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 900;
          line-height: 1.08;
          color: var(--ink);
        }
        .highlight {
          background: linear-gradient(90deg, var(--green), var(--green-700));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .intro {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 18px;
          color: var(--muted);
        }
        .lead p {
          margin: 0 0 16px;
          color: var(--muted);
        }
        .cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
          background: linear-gradient(90deg, var(--green), var(--green-700));
          color: #052013;
          box-shadow: 0 10px 28px rgba(46, 204, 113, 0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 38px rgba(46, 204, 113, 0.5);
        }

        /* slideshow */
        .slideshow {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.12);
          min-height: 420px;
        }
        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .slide.is-active {
          opacity: 1;
          transform: translateX(0);
          z-index: 1;
        }
        .slide img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 20px 20px 0 0;
        }
        figcaption {
          background: #fff;
          padding: 18px 20px;
          border-top: 3px solid var(--green);
        }
        figcaption h3 {
          margin: 0 0 6px;
          font-size: 20px;
          font-weight: 800;
          color: var(--ink);
        }
        figcaption p {
          margin: 0;
          font-size: 14.5px;
          line-height: 1.5;
          color: var(--muted);
        }

        .dots {
          position: absolute;
          bottom: 14px;
          right: 14px;
          display: flex;
          gap: 8px;
        }
        .dots button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .dots button.on {
          background: var(--green);
        }

        @media (max-width: 900px) {
          .inner {
            grid-template-columns: 1fr;
          }
          .slideshow {
            margin-top: 32px;
          }
        }
      `}</style>
    </section>
  );
}

/* Icona freccia */
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
