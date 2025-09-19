import React, { useEffect, useRef, useState } from "react";

export default function ContactBanner() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [flash, setFlash] = useState(false); // glow al landing

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Ascolta highlight dall'header
  useEffect(() => {
    const onHighlight = () => {
      setFlash(true);
      setTimeout(() => setFlash(false), 1200);
      // porta anche il focus per accessibilità
      rootRef.current?.focus?.();
    };
    window.addEventListener("contact-highlight", onHighlight);
    return () => window.removeEventListener("contact-highlight", onHighlight);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };

  return (
    <section
      id="contact"
      ref={rootRef}
      tabIndex={-1}
      className={`contact ${visible ? "is-visible" : ""} ${flash ? "ring-pop" : ""}`}
      aria-labelledby="contact-title"
    >
      <div aria-hidden className="decor mesh" />
      <div aria-hidden className="decor grain" />

      <div className="wrap">
        {/* Colonna sinistra */}
        <div className="info">
          <h2 id="contact-title" className="title" data-anim="1">
            Got a project?
            <br/> Let’s talk <span className="arrow">→</span>
          </h2>

          <p className="lead" data-anim="2">
            Tell us about your goals and needs — we’ll build the right solution together.
          </p>

          <ul className="contacts" aria-label="Contact details" data-anim="3">
            <li><span className="tag">T</span><a href="tel:18003568833" className="link">1-800-356-8833</a></li>
            <li><span className="tag">E</span><a href="mailto:hello@example.com" className="link">hello@example.com</a></li>
          </ul>

          <div className="note" data-anim="4">
            Want confidentiality? Check NDA in the form — we’ll send you a standard agreement to sign digitally.
          </div>
        </div>

        {/* Form */}
        <div className="formCard" role="region" aria-label="Contact form" data-anim="5">
          <form className="form" onSubmit={onSubmit}>
            <Field label="Your name" name="name" type="text" required />
            <Field label="Email address" name="email" type="email" required />
            <Field label="Phone number" name="phone" type="tel" />
            <Field label="Budget" name="budget" type="text" />

            <div className="row full">
              <div className="floating">
                <textarea id="message" name="message" rows={4} required placeholder=" " className="field" />
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
                {loading ? "Sending…" : "Send request"}
              </button>
            </div>

            <div className={`toast ${sent ? "show" : ""}`} role="status" aria-live="polite">
              ✅ Request sent! We’ll reply within 24h.
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact{
          --plant:#2ecc71; --plant-700:#1fa45a;
          max-width:1200px;
          margin: clamp(80px,10vh,120px) auto;
          border-radius:26px;
          padding: clamp(60px,7vw,100px) 28px;
          color:#fff;
          background:
            radial-gradient(1000px 600px at 12% 10%, rgba(46,204,113,.22), transparent 60%),
            conic-gradient(from 230deg at 80% 20%, rgba(31,164,90,.24), rgba(31,164,90,0) 40%),
            #0a1512;
          box-shadow:0 32px 90px rgba(0,0,0,.32);
          position:relative; overflow:hidden; isolation:isolate;
        }
        /* ring verde quando si atterra dalla navbar */
        .ring-pop{animation:ringpop .9s ease}
        @keyframes ringpop{
          0%{box-shadow:0 0 0 0 rgba(46,204,113,.0)}
          30%{box-shadow:0 0 0 6px rgba(46,204,113,.28)}
          100%{box-shadow:0 32px 90px rgba(0,0,0,.32)}
        }

        .decor.mesh{position:absolute; inset:0; pointer-events:none; opacity:.5;
          background:
            radial-gradient(900px 420px at 85% -10%, rgba(46,204,113,.18), transparent 65%),
            radial-gradient(700px 360px at 5% 110%, rgba(21,151,90,.18), transparent 60%);
        }
        .decor.grain{position:absolute; inset:0; pointer-events:none; opacity:.08; mix-blend-mode:overlay;
          background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=");
          background-size:220px;
        }

        .wrap{display:grid; grid-template-columns:1.1fr 1fr; gap:clamp(28px,5vw,44px); max-width:1100px; margin:0 auto;}
        @media (max-width:900px){.wrap{grid-template-columns:1fr}}

        /* Entrata (stagger) */
        [data-anim]{opacity:0; transform:translateY(18px) scale(.97);
          transition:opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1);}
        .is-visible [data-anim]{opacity:1; transform:none}
        .is-visible [data-anim="2"]{transition-delay:.1s}
        .is-visible [data-anim="3"]{transition-delay:.2s}
        .is-visible [data-anim="4"]{transition-delay:.3s}
        .is-visible [data-anim="5"]{transition-delay:.4s}

        .info{padding:clamp(8px,2vw,16px)}
        .title{margin:0 0 12px; font:900 clamp(34px,5vw,54px)/1.08 "Inter Tight",ui-sans-serif; text-shadow:0 12px 32px rgba(0,0,0,.4)}
        .arrow{display:inline-block; transition:transform .28s cubic-bezier(.16,1,.3,1)}
        .title:hover .arrow{transform:translateX(4px)}
        .lead{margin:8px 0 18px; font-size:clamp(16px,2vw,18px); line-height:1.6; opacity:.95}
        .contacts{list-style:none; padding:0; margin:0 0 14px; display:grid; gap:8px}
        .contacts li{display:flex; align-items:center; gap:10px}
        .tag{width:24px; height:24px; border-radius:6px; background:rgba(255,255,255,.14); display:grid; place-items:center; font:900 12px/1 system-ui}
        .link{color:#fff; font-weight:800; text-decoration:none}
        .link:hover{text-decoration:underline}
        .note{margin-top:12px; font-size:13.5px; opacity:.85}

        /* Card form bianca leggibile */
        .formCard{background:#fff; color:#0a0b14; border-radius:18px; padding:clamp(20px,3vw,28px);
          border:1px solid rgba(13,16,28,.08); box-shadow:0 18px 48px rgba(0,0,0,.12)}
        .form{display:grid; grid-template-columns:1fr 1fr; gap:14px; position:relative}
        .row.full{grid-column:1 / -1}

        .field{
          width:100%; background:#fff !important; border:1px solid #d1d5db !important;
          border-radius:12px; color:#111; font-size:14.5px; padding:14px 12px 12px;
          box-shadow:0 2px 8px rgba(0,0,0,.04); transition:border-color .2s, box-shadow .2s; outline:none;
        }
        .field:focus{border-color:var(--plant-700) !important; box-shadow:0 0 0 3px rgba(46,204,113,.25); background:#fff}
        .floating{position:relative; display:grid}
        .floating label{position:absolute; left:12px; top:14px; font-size:13px; color:#6b7280; pointer-events:none; transition:all .18s}
        .floating input.field{height:56px}
        .floating textarea.field{min-height:132px; resize:vertical}
        .floating input.field:not(:placeholder-shown) + label,
        .floating input.field:focus + label,
        .floating textarea.field:not(:placeholder-shown) + label,
        .floating textarea.field:focus + label{top:-8px; font-size:11px; color:var(--plant-700); background:#fff; padding:0 4px; border-radius:6px; box-shadow:0 0 0 4px #fff inset}

        .actions{display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:4px}
        .switch{display:inline-flex; align-items:center; gap:10px; cursor:pointer; user-select:none}
        .switch input{position:absolute; opacity:0; width:0; height:0}
        .track{width:46px; height:28px; border-radius:999px; background:#e5e7eb; border:1px solid rgba(0,0,0,.12); position:relative; transition:background .22s,border-color .22s}
        .track::after{content:""; position:absolute; top:50%; left:3px; transform:translateY(-50%); width:22px; height:22px; border-radius:999px; background:#fff; box-shadow:0 2px 6px rgba(0,0,0,.2); transition:left .22s}
        .switch input:checked + .track{background:linear-gradient(90deg,var(--plant),var(--plant-700)); border-color:transparent}
        .switch input:checked + .track::after{left:21px}
        .txt{font-size:14px; color:#0f172a}

        .btn{min-width:170px; height:48px; border:none; border-radius:12px; font-weight:900; font-family:"Inter Tight",ui-sans-serif;
          background:linear-gradient(90deg,var(--plant),var(--plant-700)); color:#062a1a; box-shadow:0 14px 34px rgba(46,204,113,.35);
          cursor:pointer; transition:transform .2s, box-shadow .2s}
        .btn:hover{transform:translateY(-2px); box-shadow:0 18px 42px rgba(46,204,113,.5)}
        .btn:disabled{opacity:.75; cursor:not-allowed}

        .toast{margin-top:12px; background:var(--plant-700); color:#fff; font-weight:700; font-size:14px;
          padding:10px 14px; border-radius:10px; opacity:0; transform:translateY(6px); transition:opacity .3s, transform .3s}
        .toast.show{opacity:1; transform:none}
      `}</style>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <div className="row">
      <div className="floating">
        <input
          id={name}
          name={name}
          type={type}
          className="field"
          placeholder=" "
          required={required}
          aria-required={required}
          autoComplete={name}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
}
