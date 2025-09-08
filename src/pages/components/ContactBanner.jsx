import React, { useState } from "react";

export default function ContactBanner() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: sostituisci con la tua chiamata API
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  return (
    <section className="contact" aria-labelledby="contact-title">
      <div className="wrap">
        {/* Colonna sinistra */}
        <div className="info">
          <h2 id="contact-title" className="title">
            Got a project?
            <br /> Let’s talk <span className="arrow">→</span>
          </h2>

          <p className="lead">
            Raccontaci obiettivi, tempi e budget: costruiremo insieme la
            soluzione più adatta.
          </p>

          <ul className="contacts" aria-label="Contact details">
            <li>
              <span className="tag">T</span>
              <a href="tel:18003568833" className="link">1-800-356-8833</a>
            </li>
            <li>
              <span className="tag">E</span>
              <a href="mailto:office@tecnologia.com" className="link">office@tecnologia.com</a>
            </li>
          </ul>

          <div className="note">
            Preferisci la riservatezza? Spunta l’NDA nel form: ti invieremo un
            accordo standard da firmare digitalmente.
          </div>
        </div>

        {/* Colonna destra: Form */}
        <div className="formCard" role="region" aria-label="Contact form">
          <form className="form" onSubmit={onSubmit}>
            <Field label="Your name" name="name" type="text" required />
            <Field label="Email address" name="email" type="email" required />
            <Field label="Phone number" name="phone" type="tel" />
            <Field label="What is your budget?" name="budget" type="text" />

            <div className="row full">
              <div className="floating">
                <textarea id="message" name="message" rows={4} required placeholder=" " />
                <label htmlFor="message">Message</label>
              </div>
            </div>

            <div className="row full actions">
              <label className="switch">
                <input type="checkbox" name="nda" />
                <span className="track" aria-hidden />
                <span className="txt">I want an NDA to protect my idea</span>
              </label>

              <button type="submit" className="btn" disabled={loading} aria-live="polite">
                {loading ? "Sending…" : "Send a request"}
              </button>
            </div>

            {/* toast di successo */}
            <div className={`toast ${sent ? "show" : ""}`} role="status" aria-live="polite">
              ✅ Request sent! Ti risponderemo entro 24 ore.
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --plant: #2ecc71;
          --plant-700: #1fa45a;
          --ink: #eaf5ee;
        }

        .contact {
          padding: clamp(44px, 6vw, 90px) 20px;
          display: flex;
          justify-content: center;
          color: #fff;
          border-radius: 24px;
          max-width: 1200px;
          margin: 0 auto;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
          /* dark green + glow Planttec */
          background:
            radial-gradient(1200px 600px at 12% 10%, rgba(46,204,113,0.22), transparent 60%),
            conic-gradient(from 230deg at 80% 20%, rgba(31,164,90,0.28), rgba(31,164,90,0) 40%),
            #0a1512;
          background-blend-mode: screen, normal, normal;
        }

        .wrap {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(20px, 4vw, 36px);
          width: 100%;
          max-width: 1100px;
        }
        @media (max-width: 900px) { .wrap { grid-template-columns: 1fr; } }

        /* INFO */
        .info { padding: clamp(10px, 2vw, 16px); }
        .title {
          margin: 0 0 8px;
          font-family: "Inter Tight", ui-sans-serif, system-ui;
          font-weight: 900;
          font-size: clamp(30px, 4.8vw, 50px);
          line-height: 1.06;
          letter-spacing: -0.4px;
          text-shadow: 0 14px 40px rgba(0,0,0,.45);
        }
        .arrow { display: inline-block; transition: transform .25s ease; }
        .title:hover .arrow { transform: translateX(4px); }

        .lead {
          margin: 6px 0 16px;
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.6;
          color: var(--ink);
          opacity: .92;
        }

        .contacts {
          list-style: none; padding: 0; margin: 0 0 14px;
          display: grid; gap: 8px;
        }
        .contacts li { display: inline-flex; align-items: center; gap: 10px; }
        .tag {
          display: inline-grid; place-items: center;
          width: 22px; height: 22px; border-radius: 6px;
          background: rgba(255,255,255,.14);
          border: 1px solid rgba(255,255,255,.22);
          font-weight: 900; font-size: 12px;
        }
        .link { color: #fff; text-decoration: none; font-weight: 800; }
        .link:hover { text-decoration: underline; }

        .note { margin-top: 10px; font-size: 13.5px; opacity: .85; color: var(--ink); }

        /* FORM */
        .formCard {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px) saturate(120%);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 18px;
          padding: clamp(16px, 3.2vw, 22px);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06);
        }

        .form {
          display: grid; grid-template-columns: 1fr 1fr; gap: 14px; position: relative;
        }
        .row.full { grid-column: 1 / -1; }

        /* Floating inputs */
        .floating { position: relative; display: grid; }
        .floating input,
        .floating textarea {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.94);
          color: #0f0f0f;
          border-radius: 12px;
          padding: 14px 12px 12px;
          font-size: 14.5px;
          transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
          outline: none;
        }
        .floating textarea { resize: vertical; }
        .floating input:focus,
        .floating textarea:focus {
          border-color: var(--plant-700);
          box-shadow: 0 0 0 3px rgba(46,204,113,.25);
          background: #fff;
        }
        .floating label {
          position: absolute; left: 12px; top: 12px;
          font-size: 13px; color: rgba(10, 11, 20, 0.6);
          transition: transform .18s ease, color .18s ease, font-size .18s ease, top .18s ease;
          pointer-events: none; padding: 0 4px;
        }
        .floating input:not(:placeholder-shown) + label,
        .floating input:focus + label,
        .floating textarea:not(:placeholder-shown) + label,
        .floating textarea:focus + label {
          top: -8px; transform: translateY(-2px); font-size: 11px; color: #1f2937;
          background: #fff; border-radius: 6px; box-shadow: 0 0 0 4px #fff inset;
        }

        /* Switch NDA – verde */
        .switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; }
        .switch input { position: absolute; opacity: 0; width: 0; height: 0; }
        .track {
          width: 44px; height: 26px; border-radius: 999px;
          background: rgba(255,255,255,.75); border: 1px solid rgba(0,0,0,.12);
          position: relative; transition: background .2s ease, border-color .2s ease;
        }
        .track::after {
          content: ""; position: absolute; top: 50%; left: 3px; transform: translateY(-50%);
          width: 20px; height: 20px; border-radius: 999px; background: #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,.25); transition: left .2s ease;
        }
        .switch input:checked + .track {
          background: linear-gradient(90deg, var(--plant), var(--plant-700)); border-color: transparent;
        }
        .switch input:checked + .track::after { left: 21px; }
        .txt { font-size: 14px; color: #fff; opacity: .95; }

        /* Azioni */
        .actions { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-top: 2px; }
        .btn {
          min-width: 170px; height: 48px; padding: 0 18px; border-radius: 12px; border: none;
          font-weight: 900; font-family: "Inter Tight", ui-sans-serif;
          background: linear-gradient(90deg, var(--plant), var(--plant-700));
          color: #062a1a;
          box-shadow: 0 14px 34px rgba(46,204,113,.35);
          cursor: pointer; transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
        }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 18px 42px rgba(46,204,113,.5); }
        .btn:disabled { opacity: .7; cursor: not-allowed; }

        /* Toast */
        .toast {
          position: absolute; right: 0; bottom: -10px; transform: translateY(8px);
          opacity: 0; background: var(--plant-700); color: #062a1a;
          font-weight: 900; padding: 10px 14px; border-radius: 10px;
          box-shadow: 0 10px 24px rgba(0,0,0,.2); transition: opacity .25s ease, transform .25s ease;
        }
        .toast.show { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  );
}

/* ---------- Subcomponent: Field with floating label ---------- */
function Field({ label, name, type = "text", required = false }) {
  return (
    <div className="row">
      <div className="floating">
        <input
          id={name}
          name={name}
          type={type}
          placeholder=" "
          required={required}
          aria-required={required}
          autoComplete={name}
        />
        <label htmlFor={name}>{label}</label>
      </div>

      <style jsx>{`
        .floating { position: relative; display: grid; }
        input {
          width: 100%;
          border: 1px solid rgba(255,255,255,.22);
          background: rgba(255,255,255,.94);
          color: #0f0f0f;
          border-radius: 12px;
          padding: 14px 12px 12px;
          font-size: 14.5px;
          transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
          outline: none;
        }
        input:focus { border-color: var(--plant-700); box-shadow: 0 0 0 3px rgba(46,204,113,.25); background: #fff; }
        label {
          position: absolute; left: 12px; top: 12px; font-size: 13px; color: rgba(10,11,20,.6);
          transition: transform .18s ease, color .18s ease, font-size .18s ease, top .18s ease;
          pointer-events: none; padding: 0 4px;
        }
        input:not(:placeholder-shown) + label,
        input:focus + label {
          top: -8px; transform: translateY(-2px); font-size: 11px; color: #1f2937;
          background: #fff; border-radius: 6px; box-shadow: 0 0 0 4px #fff inset;
        }
      `}</style>
    </div>
  );
}
