// components/BlogShowcaseLite.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

export default function BlogShowcaseLite() {
  /* -------------------- DATI DEMO (hardcoded) -------------------- */
  const posts = [
    {
      id: "p1",
      title: "Plant Balance Metrics: A Virtual Sensor",
      category: "PRESS",
      date: "2025-09-04",
      minutes: 4,
      image: "/hero-1.jpg",
      excerpt: "Quantify plant balance and predict yield with a data-first approach.",
      tags: ["AI", "Sensors", "Yield"],
      href: "#",
      featured: true,
    },
    {
      id: "p2",
      title: "Beyond Accuracy: Adaptability > Accuracy",
      category: "BLOG",
      date: "2025-08-04",
      minutes: 6,
      image: "/hero-2.jpg",
      excerpt: "Why adaptability beats raw accuracy when markets get noisy.",
      tags: ["Forecasting", "Strategy"],
      href: "#",
      featured: true,
    },
    {
      id: "p3",
      title: "Future-Proof Your Operation",
      category: "BLOG",
      date: "2025-07-04",
      minutes: 7,
      image: "/hero-3.jpg",
      excerpt: "De-risk decisions before the season starts.",
      tags: ["Operations", "Playbooks"],
      href: "#",
    },
    {
      id: "p4",
      title: "Irrigation Control: Closing the Loop",
      category: "BLOG",
      date: "2025-06-15",
      minutes: 5,
      image: "/hero-1.jpg",
      excerpt: "From rules to predictive strategies in irrigation.",
      tags: ["Irrigation", "Models"],
      href: "#",
    },
    {
      id: "p5",
      title: "Co-op & Planttec Partnership",
      category: "PRESS",
      date: "2025-06-05",
      minutes: 3,
      image: "/hero-2.jpg",
      excerpt: "Scaling data-driven growing across sites.",
      tags: ["Partnership"],
      href: "#",
    },
    {
      id: "p6",
      title: "Edge Sensing in Harsh Environments",
      category: "BLOG",
      date: "2025-05-18",
      minutes: 8,
      image: "/hero-3.jpg",
      excerpt: "Designing robust on-site sensing.",
      tags: ["Sensors", "Edge"],
      href: "#",
    },
  ];

  /* --------------------------- STATI MINIMALI --------------------------- */
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("ALL"); // ALL | BLOG | PRESS
  const [tag, setTag] = useState(null); // singolo tag (UX semplice)

  const allTags = useMemo(
    () =>
      Array.from(new Set(posts.flatMap((p) => p.tags))).sort((a, b) =>
        a.localeCompare(b)
      ),
    [posts]
  );

  /* ------------------------ LISTA DERIVATA (semplice) ------------------------ */
  const list = useMemo(() => {
    const byQ = (p) =>
      !q ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase());
    const byC = (p) => cat === "ALL" || p.category === cat;
    const byT = (p) => !tag || p.tags.includes(tag);

    return posts
      .filter((p) => byQ(p) && byC(p) && byT(p))
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [q, cat, tag, posts]);

  const featured = list.filter((p) => p.featured).slice(0, 2);
  const rest = list.filter((p) => !p.featured);

  /* --------------------- ANIMAZIONE INGRESSO SEZIONE --------------------- */
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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
    <section ref={rootRef} className={`blogX ${visible ? "is-visible" : ""}`} aria-labelledby="blog-title">
      {/* decor sotto al contenuto */}
      <div className="decor mesh" aria-hidden />
      <div className="decor grain" aria-hidden />

      <div className="container">
        {/* HERO / TITLE */}
        <header className="hero">
          <p className="eyebrow" data-i="0">INSIGHTS</p>
          <h1 id="blog-title" className="title" data-i="1">
            <span>BLOG</span>
            <i className="glow" aria-hidden />
          </h1>
          <p className="subtitle" data-i="2">
            Stories, releases and deep dives on data-driven growing.
          </p>
        </header>

        {/* FILTRI MINIMI */}
        <div className="filters" role="region" aria-label="Filters" data-i="3">
          {/* Search */}
          <div className="search">
            <input
              type="search"
              placeholder="Search articles…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search articles"
            />
            <span className="icon" aria-hidden>🔎</span>
          </div>

          {/* Tabs categoria */}
          <div className="tabs" role="tablist" aria-label="Category">
            {["ALL", "BLOG", "PRESS"].map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                className={cat === c ? "on" : ""}
                onClick={() => setCat(c)}
              >
                {c === "ALL" ? "All" : c === "BLOG" ? "Blog" : "Press"}
              </button>
            ))}
          </div>

          {/* Tag chips (orizzontale, pochi e click singolo) */}
          <div className="chips" role="listbox" aria-label="Tags">
            {allTags.slice(0, 8).map((t) => (
              <button
                key={t}
                role="option"
                aria-selected={tag === t}
                className={`chip ${tag === t ? "on" : ""}`}
                onClick={() => setTag(tag === t ? null : t)}
              >
                {t}
              </button>
            ))}
            {(q || tag || cat !== "ALL") && (
              <button className="clear" onClick={() => { setQ(""); setCat("ALL"); setTag(null); }}>
                Reset
              </button>
            )}
          </div>
        </div>

        {/* FEATURED (collage) */}
        {!!featured.length && (
          <div className="featuredRow">
            {featured.map((p, i) => (
              <article key={p.id} className="card featured" data-i={i}>
                <Link href={p.href} className="media" aria-label={p.title}>
                  <img src={p.image} alt="" />
                  <span className="badge">{p.category}</span>
                  <span className="time">{p.minutes} min</span>
                  <span className="grad" aria-hidden />
                </Link>
                <div className="body">
                  <h3 className="h3"><Link href={p.href}>{p.title}</Link></h3>
                  <p className="excerpt">{p.excerpt}</p>
                  <div className="meta">
                    <time dateTime={p.date}>
                      {new Date(p.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                    </time>
                    <span className="dot" />
                    <span className="author">Editorial</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* GRID RESTO */}
        <div className="grid" role="list">
          {rest.map((p, i) => (
            <article key={p.id} role="listitem" className="card" data-i={i + 3}>
              <Link href={p.href} className="media" aria-label={p.title}>
                <img src={p.image} alt="" />
                <span className="badge">{p.category}</span>
                <span className="time">{p.minutes} min</span>
                <span className="grad" aria-hidden />
              </Link>
              <div className="body">
                <h3 className="h3"><Link href={p.href}>{p.title}</Link></h3>
                <p className="excerpt">{p.excerpt}</p>
                <div className="tagline">
                  {p.tags.map((t) => (
                    <button key={t} className={`t ${tag === t ? "on" : ""}`} onClick={() => setTag(tag === t ? null : t)} aria-pressed={tag === t}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ---------- Palette e background (mezzo bianco / mezzo dark) ---------- */
        .blogX{
          --b-ink:#0a0b14;
          --b-muted:#6b7380;
          --b-green:#2ecc71;
          --b-green-700:#1fa45a;
          --b-edge:rgba(12,18,28,.10);
          position:relative; overflow:hidden; isolation:isolate;
          padding: clamp(52px, 7vw, 100px) 20px;
          /* split sfumato: in alto chiaro -> in basso dark */
          background:
            radial-gradient(1200px 520px at 10% -8%, rgba(46,204,113,.12), transparent 60%),
            radial-gradient(1200px 520px at 110% 0%, rgba(31,164,90,.10), transparent 60%),
            linear-gradient(180deg, #f7fbf7 0%, #f7fbf7 48%, #0b1310 52%, #0b1310 100%);
          color:#fff;
        }
        .decor.mesh{position:absolute; inset:0; pointer-events:none; opacity:.45;
          background:
            radial-gradient(900px 420px at -10% 110%, rgba(255,255,255,.06), transparent 60%),
            radial-gradient(780px 360px at 86% 10%, rgba(46,204,113,.18), transparent 60%);
        }
        .decor.grain{position:absolute; inset:0; opacity:.08; mix-blend-mode:overlay; pointer-events:none;
          background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=");
          background-size:220px;
        }
        .container{max-width:1200px; margin:0 auto; position:relative; z-index:1;}

        /* ---------- HERO ---------- */
        .hero{text-align:center; margin-bottom: clamp(22px, 5vw, 40px);}
        .eyebrow{letter-spacing:.18em; font-weight:900; font-size:11px; color:#0b1310; opacity:.7;}
        .title{margin: 6px 0 6px; font-family:"Inter Tight",ui-sans-serif,system-ui; font-weight:900; font-size: clamp(34px, 7.2vw, 72px); line-height:1; position:relative; display:inline-block;}
        .title span{
          background: linear-gradient(90deg, #0b1310, #2b493a, #eafff2);
          -webkit-background-clip:text; background-clip:text; color:transparent;
          text-shadow:0 18px 60px rgba(0,0,0,.35);
        }
        .title .glow{position:absolute; inset:-18% -10%; border-radius:40%;
          background: radial-gradient(60% 60% at 50% 60%, rgba(46,204,113,.28), transparent 70%);
          filter:blur(26px);
        }
        .subtitle{margin:8px auto 0; max-width:760px; color:#0b1310; opacity:.75;}

        /* ---------- Animazioni ingresso (stagger) ---------- */
        [data-i]{opacity:0; transform: translateY(14px) scale(.98);
          transition: opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1);}
        .is-visible [data-i]{opacity:1; transform:none;}
        .is-visible [data-i="1"]{transition-delay:.06s}
        .is-visible [data-i="2"]{transition-delay:.12s}
        .is-visible [data-i="3"]{transition-delay:.18s}

        /* ---------- FILTRI MINIMI ---------- */
        .filters{
          display:grid; gap:10px;
          background: rgba(255,255,255,.55);
          border:1px solid rgba(12,18,28,.08);
          border-radius:18px;
          padding:12px;
          box-shadow:0 18px 40px rgba(0,0,0,.10);
        }
        /* su dark metà, schiarisco con glass scuro */
        @media (prefers-color-scheme: dark){
          .filters{background: rgba(12,18,28,.45); border-color: rgba(255,255,255,.12);}
        }

        .search{position:relative;}
        .search input{
          width:100%; height:46px; border-radius:12px; outline:none;
          border:1px solid rgba(12,18,28,.18);
          background:#fff; color:#0a0b14; padding:0 36px 0 12px;
          transition:border-color .2s, box-shadow .2s;
        }
        .search input::placeholder{color:#64748b;}
        .search input:focus{border-color:#1fa45a; box-shadow:0 0 0 3px rgba(46,204,113,.22);}
        .search .icon{position:absolute; right:10px; top:50%; transform:translateY(-50%); opacity:.7;}

        .tabs{display:inline-flex; align-items:center; gap:6px; margin-top:6px;}
        .tabs button{
          height:34px; padding:0 12px; border-radius:999px; border:1px solid rgba(12,18,28,.16);
          background:#fff; color:#0b1310; font-weight:900; cursor:pointer; transition:transform .18s, box-shadow .18s, background .18s;
        }
        .tabs button.on{
          background: linear-gradient(90deg, var(--b-green), var(--b-green-700));
          color:#06150d; border-color:transparent; box-shadow:0 10px 22px rgba(46,204,113,.35);
        }

        .chips{display:flex; flex-wrap:wrap; gap:8px; margin-top:6px;}
        .chip{
          height:30px; padding:0 12px; border-radius:999px; border:1px solid rgba(12,18,28,.16);
          background:#fff; color:#0b1310; font-weight:900; cursor:pointer; transition:transform .18s, box-shadow .18s;
        }
        .chip.on{ background: linear-gradient(90deg, var(--b-green), var(--b-green-700)); color:#06150d; box-shadow:0 10px 22px rgba(46,204,113,.35); border-color:transparent;}
        .clear{height:30px; padding:0 10px; border-radius:999px; border:1px dashed rgba(12,18,28,.25); background:transparent; color:#0b1310; font-weight:900;}

        /* ---------- FEATURED (collage) ---------- */
        .featuredRow{display:grid; gap:16px; grid-template-columns: 1.2fr 1fr; margin:18px 0;}
        @media (max-width:900px){ .featuredRow{grid-template-columns:1fr;} }
        .card{
          display:flex; flex-direction:column; border-radius:18px; overflow:hidden;
          background:#fff; border:1px solid var(--b-edge);
          box-shadow:0 18px 40px rgba(0,0,0,.12);
          transform: translateY(16px) scale(.985); opacity:0;
        }
        .is-visible .card{
          opacity:1; transform:none;
          transition: opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1);
        }
        .is-visible .card[data-i="0"]{transition-delay:.06s}
        .is-visible .card[data-i="1"]{transition-delay:.12s}
        .is-visible .card[data-i="3"]{transition-delay:.18s}
        .is-visible .card[data-i="4"]{transition-delay:.24s}
        .is-visible .card[data-i="5"]{transition-delay:.30s}

        .featured .media{aspect-ratio: 16 / 9;}
        .media{position:relative; display:block; aspect-ratio:4/3; overflow:hidden;}
        .media img{width:100%; height:100%; object-fit:cover; transform:scale(1.04); transition:transform .5s ease;}
        .card:hover .media img{transform:scale(1.08);}
        .grad{position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.35) 100%); opacity:0; transition:opacity .3s;}
        .card:hover .grad{opacity:1;}
        .badge{
          position:absolute; top:12px; left:12px; height:28px; padding:0 12px; border-radius:999px;
          font-weight:900; font-size:12px; color:#06150d;
          background: linear-gradient(90deg, var(--b-green), var(--b-green-700));
          box-shadow:0 10px 22px rgba(46,204,113,.35);
        }
        .time{
          position:absolute; right:12px; bottom:12px; height:28px; padding:0 10px; border-radius:999px;
          color:#fff; font-weight:800; font-size:12px; background:rgba(0,0,0,.45); border:1px solid rgba(255,255,255,.14); backdrop-filter: blur(6px);
        }

        .body{padding:14px 16px 18px;}
        .h3{margin:0 0 8px; font-size:18px; line-height:1.3;}
        .h3 a{color:#0b1310; text-decoration:none;}
        .h3 a:hover{color:#1fa45a;}
        .excerpt{margin:0 0 10px; color:#475569; font-size:14.5px;}
        .meta{display:inline-flex; align-items:center; gap:8px; font-size:12.5px; color:#64748b;}
        .meta .dot{width:4px; height:4px; border-radius:999px; background:#94a3b8;}

        .tagline{display:flex; gap:6px; flex-wrap:wrap; margin-top:8px;}
        .t{height:26px; padding:0 10px; border-radius:999px; font-size:12px; font-weight:900; color:#06150d; background: linear-gradient(90deg, var(--b-green), var(--b-green-700)); box-shadow:0 8px 20px rgba(46,204,113,.3); border:none; cursor:pointer;}
        .t.on{outline:2px solid #0b1310; outline-offset:2px;}

        /* ---------- GRID RESTO ---------- */
        .grid{display:grid; gap:16px; grid-template-columns: repeat(3, minmax(0,1fr));}
        @media (max-width:1000px){ .grid{grid-template-columns: repeat(2, minmax(0,1fr));} }
        @media (max-width:640px){ .grid{grid-template-columns: 1fr;} }
      `}</style>
    </section>
  );
}
