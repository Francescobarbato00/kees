import React from "react";

/**
 * TeamShowcase
 * Props opzionali:
 * - members: [{ name, role, photo, linkedin? }]
 */
export default function TeamShowcase({ members }) {
  const data =
    members?.length
      ? members
      : [
          { name: "Mat Zalman", role: "CEO", photo: "/foto.jpg", linkedin: "#" },
          { name: "Megan Palms", role: "Marketing Director", photo: "/foto.jpg", linkedin: "#" },
          { name: "Joe Nicklason", role: "Senior Backend Developer", photo: "/foto.jpg" },
          { name: "Anton Thorne", role: "Senior Developer", photo: "/foto.jpg" },
        ];

  return (
    <section className="team-showcase" aria-labelledby="team-title">
      <div className="container">
        {/* Head */}
        <div className="header">
          <h2 id="team-title" className="title">
            Meet some of our <span className="accent">80+</span> <br className="br" />
            team members
          </h2>
          <a href="#" className="view-all" aria-label="View all team members">
            View all team →
          </a>
        </div>

        {/* Cards */}
        <div className="grid" role="list">
          {data.map((m, i) => (
            <article className="card" key={`${m.name}-${i}`} role="listitem" tabIndex={0}>
              <div className="border" aria-hidden />
              <figure className="media">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1200px) 280px, (min-width: 768px) 40vw, 90vw"
                />
              </figure>

              <div className="info">
                <h3 className="name">{m.name}</h3>
                <p className="role">{m.role}</p>
                {m.linkedin ? (
                  <a className="link" href={m.linkedin} aria-label={`Open ${m.name}'s LinkedIn`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                      <path
                        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.06c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.14V24h-4v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V24h-4V8z"
                        fill="currentColor"
                      />
                    </svg>
                    LinkedIn
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --brand: #6b6eff;
          --brand-600: #5454d4;
          --ink: #0a0b14;
          --muted: #6b7280;
        }

        .team-showcase {
          background: linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%);
          padding: clamp(56px, 7vw, 96px) 20px;
          position: relative;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 16px;
          margin-bottom: clamp(28px, 4vw, 40px);
        }
        @media (max-width: 720px) {
          .header { grid-template-columns: 1fr; align-items: start; gap: 8px; }
        }

        .title {
          margin: 0;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
          font-weight: 800;
          font-size: clamp(28px, 5vw, 48px);
          line-height: 1.16;
          color: rgb(10, 13, 49);
          letter-spacing: -0.3px;
        }
        .accent {
          background: linear-gradient(90deg, #b8b9ff, var(--brand), #b6b7ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .br { display: none; }
        @media (min-width: 640px) { .br { display: inline; } }

        .view-all {
          justify-self: end;
          align-self: center;
          font-family: "Inter Tight", sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #4f46e5;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 10px;
          transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .view-all:hover {
          color: #3730a3;
          background: rgba(79, 70, 229, 0.08);
          transform: translateY(-1px);
        }
        .view-all:focus-visible {
          outline: 2px solid var(--brand);
          outline-offset: 3px;
        }
        @media (max-width: 720px) { .view-all { justify-self: start; padding-left: 0; background: transparent; } }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        @media (min-width: 640px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .grid { grid-template-columns: repeat(4, 1fr); }
        }

        .card {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          background: #0b0d19;
          box-shadow: 0 12px 30px rgba(13, 16, 28, 0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          outline: none;
        }
        .card:hover { transform: translateY(-4px); box-shadow: 0 18px 44px rgba(13, 16, 28, 0.16); }

        /* bordo sfumato */
        .border {
          position: absolute;
          inset: -1px;
          border-radius: 20px;
          background: linear-gradient(120deg, rgba(107,110,255,0.6), rgba(84,84,212,0.25), rgba(255,255,255,0.12));
          pointer-events: none;
          z-index: 0;
        }

        .media {
          position: relative;
          margin: 0;
          aspect-ratio: 4/5; /* taglio verticale gradevole */
          overflow: hidden;
          z-index: 1;
        }
        .media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 0.5s cubic-bezier(.2,.8,.2,1), filter 0.5s ease;
          filter: saturate(0.98) contrast(1.02);
        }
        .card:hover .media img { transform: scale(1.06); filter: saturate(1) contrast(1.05); }

        .info {
          position: absolute;
          inset: auto 0 0 0;
          padding: 14px 14px 16px;
          background: linear-gradient(to top, rgba(6, 8, 18, 0.9) 0%, rgba(6, 8, 18, 0.35) 60%, transparent 100%);
          color: #fff;
          z-index: 2;
        }
        .name {
          margin: 0 0 2px 0;
          font-family: "Inter Tight", sans-serif;
          font-weight: 800;
          font-size: 18px;
          letter-spacing: 0.2px;
          text-shadow: 0 6px 24px rgba(0,0,0,0.45);
        }
        .role {
          margin: 0 0 8px 0;
          font-size: 13.5px;
          color: rgba(255,255,255,0.85);
        }

        .link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 32px;
          padding: 0 10px;
          border-radius: 999px;
          font-size: 12.5px;
          font-weight: 800;
          text-decoration: none;
          color: #0b0d19;
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(13, 16, 28, 0.22);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .link:hover { transform: translateY(-1px); box-shadow: 0 12px 26px rgba(13, 16, 28, 0.3); }
        .link:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }

      `}</style>
    </section>
  );
}
