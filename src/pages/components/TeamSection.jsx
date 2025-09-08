import React from "react";

export default function TeamSection() {
  return (
    <section className="team" aria-label="Il nostro team">
      <div className="wrap">
        <figure className="card">
          {/* gradient border */}
          <div className="border" aria-hidden />
          {/* immagine */}
          <picture>
            {/* Se hai varianti responsive, aggiungile qui con <source> */}
            <img
              src="/team.jpg"
              alt="Il team al lavoro"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1200px) 1200px, 100vw"
            />
          </picture>

          {/* overlay contenuti */}
          <figcaption className="overlay">
            <div className="copy">
              <h2 className="title">
                Persone prima del codice.
              </h2>
              <p className="subtitle">
                Un team multidisciplinare che unisce strategia, design e
                sviluppo per generare valore misurabile.
              </p>

              <div className="badges" role="list">
                <span className="badge" role="listitem">20+ progetti/anno</span>
                <span className="badge" role="listitem">Time-to-value rapido</span>
                <span className="badge" role="listitem">Remote-friendly</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>

      <style jsx>{`
        :global(:root) {
          --brand: #6b6eff;
          --brand-600: #5454d4;
          --ink: #0a0b14;
        }
        .team {
          background: linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%);
          padding: clamp(40px, 6vw, 80px) 20px;
          display: flex;
          justify-content: center;
        }
        .wrap {
          width: 100%;
          max-width: 1200px;
        }

        .card {
          position: relative;
          margin: 0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(10, 11, 20, 0.12);
          background: #0b0d19;
          transform: translateZ(0);
        }
        /* bordo sfumato sottile */
        .border {
          position: absolute;
          inset: -1px;
          border-radius: 26px;
          background: linear-gradient(120deg, rgba(107,110,255,0.6), rgba(84,84,212,0.25), rgba(255,255,255,0.1));
          z-index: 0;
          pointer-events: none;
        }

        picture, img {
          display: block;
          width: 100%;
          height: auto;
          position: relative;
          z-index: 1;
        }
        img {
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 0.6s cubic-bezier(.2,.8,.2,1), filter 0.6s ease;
          filter: saturate(0.96) contrast(1.02);
        }

        /* overlay con copy */
        .overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: grid;
          align-items: end;
          background: linear-gradient(
            to top,
            rgba(5,7,16,0.78) 0%,
            rgba(5,7,16,0.38) 40%,
            rgba(5,7,16,0) 70%
          );
          padding: clamp(18px, 3vw, 28px);
        }
        .copy {
          color: #fff;
          max-width: 760px;
          padding: clamp(12px, 2vw, 18px);
          backdrop-filter: blur(4px);
        }
        .title {
          margin: 0 0 6px 0;
          font-family: "Inter Tight", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
          font-weight: 800;
          font-size: clamp(28px, 4.8vw, 48px);
          line-height: 1.08;
          letter-spacing: -0.3px;
          text-shadow: 0 8px 30px rgba(0,0,0,0.45);
        }
        .subtitle {
          margin: 0 0 14px 0;
          font-size: clamp(16px, 2.1vw, 18px);
          line-height: 1.6;
          opacity: 0.92;
        }
        .badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 36px;
          padding: 0 12px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.2px;
          color: #fff;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .badge:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,255,255,0.32);
        }

        /* microinterazioni al hover */
        .card:hover img {
          transform: scale(1.05);
          filter: saturate(1) contrast(1.05);
        }
        .card:hover .border {
          background: linear-gradient(120deg, rgba(107,110,255,0.9), rgba(84,84,212,0.4), rgba(255,255,255,0.18));
        }

        /* parallax leggero su mouse */
        .card:hover .overlay {
          animation: none;
        }

        /* accessibilità: focus ring se la sezione ottiene focus */
        .team :global(a):focus-visible,
        .team :global(button):focus-visible,
        .team :global(.badge):focus-visible {
          outline: 2px solid #fff;
          outline-offset: 2px;
          border-radius: 12px;
        }

        @media (max-width: 640px) {
          .badge { height: 34px; font-size: 12px; }
        }
      `}</style>
    </section>
  );
}
