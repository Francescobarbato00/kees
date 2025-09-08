import React, { useState } from "react";

export default function ContactVideoForm({
  mp4 = "/green-globe.mp4", // metti qui il tuo video
  onSubmit,
}) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    setLoading(true);
    try {
      if (onSubmit) await onSubmit(data);
      if (!onSubmit) await new Promise((r) => setTimeout(r, 800)); // finta API
      setSent(true);
      e.currentTarget.reset();
    } finally {
      setLoading(false);
      setTimeout(() => setSent(false), 3500);
    }
  };

  return (
    <section className="cvf" aria-label="Contact form with video background">
      {/* Video background */}
      <div className="bg">
        <video className="vid" autoPlay muted loop playsInline preload="auto">
          <source src={mp4} type="video/mp4" />
        </video>
        <div className="overlay top" />
        <div className="overlay vignette" />
      </div>

      {/* Content */}
      <div className="wrap">
        <div className="card" role="region" aria-labelledby="cvf-title">
          <header className="head">
            <h2 id="cvf-title" className="title">
              Let’s talk about your greenhouse goals
            </h2>
            <p className="sub">
              Tell us a little about your project: we’ll get back to you within
              one business day.
            </p>
          </header>

          <form className="form" onSubmit={handleSubmit}>
            <Field name="name" label="Your name*" required />
            <Field name="email" label="Email address*" type="email" required />
            <Field name="phone" label="Phone" type="tel" />
            <Field name="company" label="Company" />

            <div className="row full">
              <div className="floating">
                <textarea id="message" name="message" placeholder=" " rows={4} required />
                <label htmlFor="message">Message*</label>
              </div>
            </div>

            <div className="actions">
              <button className="btn" type="submit" disabled={loading}>
                {loading ? "Sending…" : "Send request"}
              </button>
            </div>

            <div className={`toast ${sent ? "show" : ""}`} role="status" aria-live="polite">
              ✅ Request sent. We’ll reach out shortly.
            </div>
          </form>
        </div>
      </div>

      {/* Scoped styles */}
      <style jsx>{`
        .cvf {
          --ink: #f8fafc;
          --edge: rgba(255, 255, 255, 0.12);
          --brand: #2ecc71;
          --brand-700: #1fa45a;
          position: relative;
          isolation: isolate;
          min-height: 80vh;
          display: grid;
          place-items: center;
          padding: clamp(24px, 4vw, 48px) 20px;
          color: var(--ink);
        }
        .bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          overflow: hidden;
          background: #000;
        }
        .vid {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.9) contrast(1.05) brightness(0.9) hue-rotate(320deg);
        }
        .overlay.top {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              1200px 500px at 15% 15%,
              rgba(46, 204, 113, 0.25),
              transparent 60%
            ),
            radial-gradient(
              1000px 600px at 85% 85%,
              rgba(46, 204, 113, 0.14),
              transparent 70%
            );
          mix-blend-mode: screen;
        }
        .overlay.vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(75% 60% at 50% 50%, transparent 52%, rgba(0, 0, 0, 0.75) 100%);
        }
        .wrap {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }
        .card {
          backdrop-filter: blur(10px);
          background: rgba(6, 12, 20, 0.28);
          border: 1px solid var(--edge);
          border-radius: 20px;
          padding: 24px;
        }
        .title {
          margin: 0 0 8px;
          font-weight: 900;
          font-size: clamp(26px, 3.6vw, 38px);
        }
        .sub {
          margin: 0;
          opacity: 0.8;
        }
        .form {
          margin-top: 14px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .row.full {
          grid-column: 1 / -1;
        }
        .floating {
          position: relative;
        }
        .floating input,
        .floating textarea {
          width: 100%;
          border: 1px solid var(--edge);
          background: rgba(255, 255, 255, 0.95);
          color: #0b0f16;
          border-radius: 12px;
          padding: 14px 12px;
          font-size: 15px;
          outline: none;
        }
        .floating label {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 13px;
          color: #394150;
          pointer-events: none;
          transition: 0.2s;
        }
        .floating input:focus + label,
        .floating input:not(:placeholder-shown) + label,
        .floating textarea:focus + label,
        .floating textarea:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 11px;
          color: #111827;
          background: #fff;
          padding: 0 4px;
          border-radius: 4px;
        }
        .actions {
          grid-column: 1 / -1;
          display: flex;
          justify-content: flex-end;
          margin-top: 12px;
        }
        .btn {
          min-width: 160px;
          height: 44px;
          border-radius: 10px;
          border: none;
          font-weight: 900;
          background: linear-gradient(90deg, var(--brand), var(--brand-700));
          color: #062013;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(46, 204, 113, 0.35);
        }
        .toast {
          grid-column: 1 / -1;
          margin-top: 10px;
          background: rgba(10, 191, 83, 0.9);
          color: #fff;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .toast.show {
          opacity: 1;
        }
        @media (max-width: 720px) {
          .form {
            grid-template-columns: 1fr;
          }
          .actions {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

function Field({ name, label, type = "text", required = false }) {
  return (
    <div className="floating">
      <input id={name} name={name} type={type} placeholder=" " required={required} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
