// components/NewHero.jsx
import React from "react";
import Link from "next/link";

export default function NewHero({
  title = (
    <>
      AI solutions for <br /> smarter greenhouse <br /> cultivation
    </>
  ),
  subtitle = `Built with growers, for growers. Our solutions enable smarter decisions, 
  optimized operations and higher yields.`,
  ctaHref = "/solutions",
  ctaText = "Our solutions",
  images = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg",
  ],
}) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="bg" aria-hidden />
      <div className="container">
        {/* Left: copy */}
        <div className="copy">
          <h1 id="hero-title" className="title">{title}</h1>

          <p className="subtitle">{subtitle}</p>

          <div className="actions">
            <Link href={ctaHref} className="cta">
              {ctaText} <ArrowRight />
            </Link>
            <Link href="/contact" className="ghost">Get in touch</Link>
          </div>

          <ul className="badges" role="list" aria-label="Highlights">
            <li><span className="dot" /> Data-driven growing</li>
            <li><span className="dot" /> Proven ROI</li>
            <li><span className="dot" /> Built with growers</li>
          </ul>
        </div>

        {/* Right: image stack */}
        <div className="gallery" aria-hidden>
          {images.slice(0, 3).map((src, i) => (
            <figure key={i} className={`card card-${i}`}>
              <img src={src} alt="" />
            </figure>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(:root){
          --plant:#2ecc71;
          --plant-700:#1fa45a;
          --paper:#f6fbf8;      /* light verdino */
          --ink:#0a0b14;
          --muted:#4b5563;
          --edge:rgba(13,16,28,.08);
        }
        .hero{
          position:relative;
          overflow:hidden;
          background:var(--paper);
          padding: clamp(56px, 8vw, 120px) 20px;
        }
        .bg{
          position:absolute; inset:0; pointer-events:none;
          background:
            radial-gradient(900px 520px at 0% 30%, rgba(46,204,113,.18), transparent 60%),
            radial-gradient(700px 480px at 110% 80%, rgba(46,204,113,.14), transparent 60%);
        }

        .container{
          max-width:1200px; margin:0 auto;
          display:grid; gap: clamp(22px, 4vw, 48px);
          grid-template-columns: 1.1fr 1fr;
          align-items:center;
        }
        @media (max-width: 980px){ .container{ grid-template-columns: 1fr; } }

        .copy{ max-width: 760px; }
        .title{
          margin:0 0 14px;
          font-family:"Inter Tight", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
          font-weight:900;
          letter-spacing:-.6px;
          line-height:1.03;
          color:var(--ink);
          font-size: clamp(42px, 7.2vw, 92px);
        }
        .subtitle{
          margin: 8px 0 18px;
          color:var(--muted);
          font-size: clamp(18px, 2vw, 20px);
          line-height: 1.65;
          max-width: 640px;
        }

        .actions{ display:flex; gap:12px; flex-wrap:wrap; margin-top: 6px; }
        .cta{
          display:inline-flex; align-items:center; gap:8px;
          height:52px; padding:0 22px; border-radius:999px; text-decoration:none;
          font-weight:900; color:#062a1a;
          background:linear-gradient(90deg, var(--plant), var(--plant-700));
          box-shadow:0 16px 34px rgba(46,204,113,.35);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .cta:hover{ transform: translateY(-2px); box-shadow:0 22px 44px rgba(46,204,113,.5); }

        .ghost{
          display:inline-flex; align-items:center; justify-content:center;
          height:52px; padding:0 18px; border-radius:999px; text-decoration:none;
          font-weight:900; color:#0f172a;
          background:#fff; border:1px solid var(--edge);
          transition: transform .18s ease, background .18s ease;
        }
        .ghost:hover{ transform: translateY(-2px); background:#f9fafb; }

        .badges{
          list-style:none; padding:0; margin:16px 0 0;
          display:flex; gap:12px 16px; flex-wrap:wrap; color:#1f2937; font-weight:700;
          font-size:14.5px;
        }
        .badges li{ display:inline-flex; align-items:center; gap:8px; }
        .dot{ width:8px; height:8px; border-radius:999px; background:var(--plant); }

        /* gallery */
        .gallery{
          display:grid; gap:14px;
          grid-template-rows: repeat(3, min(24vh, 220px));
        }
        @media (max-width:980px){ .gallery{ order:-1; grid-template-rows: repeat(3, 180px); } }

        .card{
          position:relative; overflow:hidden; border-radius:18px;
          background:#fff; border:1px solid var(--edge);
          box-shadow:0 16px 36px rgba(13,16,28,.08);
        }
        .card img{
          width:100%; height:100%; object-fit:cover; display:block;
          transform: scale(1.02);
          transition: transform .5s ease;
        }
        .card:hover img{ transform: scale(1.06); }
        .card-0{ }
        .card-1{ }
        .card-2{ }

      `}</style>
    </section>
  );
}

/* icon */
function ArrowRight(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
