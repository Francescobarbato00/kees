import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * LogosCarousel
 * - Responsive: mobile 2, tablet 4, desktop 6 loghi visibili
 * - Autoplay infinito (pause su hover, focus fuori pagina o durante drag)
 * - Drag/Touch per scorrere manualmente
 * - Edge fade con mask per un look elegante
 * - Grayscale -> color & lift on hover/focus
 *
 * Personalizza:
 * - Cambia --brand se vuoi armonizzare l'accent
 * - Regola LOGO_MAX_H per l'altezza massima dei loghi
 */
export default function LogosCarousel({ items }) {
  // Fallback ai tuoi 5 loghi se non passati come prop
  const baseLogos = items?.length ? items : ["/1.svg", "/2.svg", "/3.svg", "/4.svg", "/5.svg"];

  // Visibilità responsive
  const getVisible = () => {
    if (typeof window === "undefined") return 4;
    const w = window.innerWidth;
    if (w < 640) return 2; // mobile
    if (w < 1024) return 4; // tablet
    return 6; // desktop
  };
  const [visible, setVisible] = useState(getVisible());

  // Duplico per effetto infinito (+ visible elementi per seamless loop)
  const extended = useMemo(() => {
    const dup = [...baseLogos, ...baseLogos, ...baseLogos];
    return [...dup, ...dup.slice(0, visible)];
  }, [baseLogos, visible]);

  const containerRef = useRef(null);
  const [containerW, setContainerW] = useState(0);

  // misuro container e aggiorno breakpoints
  useEffect(() => {
    const measure = () => {
      setContainerW(containerRef.current?.clientWidth || 0);
      setVisible(getVisible());
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  const slotW = containerW > 0 ? containerW / visible : 0;
  const maxIndex = Math.max(0, extended.length - visible);

  // stato carousel
  const [idx, setIdx] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isActiveTab, setIsActiveTab] = useState(true);

  // autoplay
  const intervalRef = useRef(null);
  const startAuto = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setIdx((prev) => (prev < maxIndex ? prev + 1 : prev));
    }, 2500);
  };
  const stopAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // pausa se hover/drag o tab inattiva
  useEffect(() => {
    const onVis = () => setIsActiveTab(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  useEffect(() => {
    const shouldRun = !isDragging && !hovered && isActiveTab && slotW > 0;
    if (shouldRun) startAuto();
    else stopAuto();
    return () => stopAuto();
  }, [isDragging, hovered, isActiveTab, slotW]);

  // reset al loop
  useEffect(() => {
    if (idx === maxIndex && !isDragging) {
      const t = setTimeout(() => {
        setDisableTransition(true);
        setIdx(0);
      }, 450);
      return () => clearTimeout(t);
    }
  }, [idx, isDragging, maxIndex]);

  useEffect(() => {
    if (!disableTransition) return;
    const t = setTimeout(() => setDisableTransition(false), 30);
    return () => clearTimeout(t);
  }, [disableTransition]);

  // drag/touch
  const beginDrag = (x) => {
    stopAuto();
    setIsDragging(true);
    setStartX(x);
  };
  const moveDrag = (x) => {
    if (!isDragging) return;
    setDragOffset(x - startX);
  };
  const endDrag = () => {
    if (!isDragging) return;
    const threshold = slotW / 5;
    let next = idx;
    if (dragOffset > threshold && idx > 0) next = idx - 1;
    if (dragOffset < -threshold && idx < maxIndex) next = idx + 1;
    setIdx(next);
    setIsDragging(false);
    setDragOffset(0);
  };

  // keyboard (accessibilità)
  const onKey = (e) => {
    if (e.key === "ArrowRight") setIdx((p) => Math.min(p + 1, maxIndex));
    if (e.key === "ArrowLeft") setIdx((p) => Math.max(p - 1, 0));
  };

  return (
    <section className="logos" aria-label="I nostri partner">
      <div
        className="rail"
        ref={containerRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={(e) => beginDrag(e.clientX)}
        onMouseMove={(e) => moveDrag(e.clientX)}
        onMouseUp={endDrag}
        onMouseLeaveCapture={endDrag}
        onTouchStart={(e) => beginDrag(e.touches[0].clientX)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
        onTouchEnd={endDrag}
        onKeyDown={onKey}
        tabIndex={0}
        role="listbox"
        aria-roledescription="carousel"
        aria-label="Loghi dei clienti"
      >
        {/* track */}
        <div
          className="track"
          style={{
            width: `${extended.length * (slotW || 0)}px`,
            transform: `translateX(-${idx * (slotW || 0) - dragOffset}px)`,
            transition: disableTransition ? "none" : "transform 450ms cubic-bezier(.2,.8,.2,1)",
          }}
        >
          {extended.map((src, i) => (
            <div className="slot" key={`${src}-${i}`} role="option" aria-selected={i >= idx && i < idx + visible}>
              <figure className="card">
                <img src={src} alt={`Logo ${i + 1}`} loading="lazy" />
              </figure>
            </div>
          ))}
        </div>

        {/* controls (desktop) */}
        <button
          className="ctrl left"
          aria-label="Precedente"
          onClick={() => setIdx((p) => Math.max(p - 1, 0))}
        >
          ‹
        </button>
        <button
          className="ctrl right"
          aria-label="Successivo"
          onClick={() => setIdx((p) => Math.min(p + 1, maxIndex))}
        >
          ›
        </button>
      </div>

      <style jsx>{`
        :global(:root) {
          --brand: #6b6eff;
          --ink: #0a0b14;
        }
        .logos {
          padding: 48px 0;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%);
        }
        .rail {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
          user-select: none;
          outline: none;
          padding: 6px 0;
          /* edge fade (mask) */
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.9) 6%,
            rgba(0, 0, 0, 1) 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.9) 6%,
            rgba(0, 0, 0, 1) 94%,
            transparent 100%
          );
        }
        .track {
          display: flex;
          will-change: transform;
          cursor: ${isDragging ? "grabbing" : "grab"};
        }
        .slot {
          flex: 0 0 ${slotW}px;
          padding: 10px 14px;
          box-sizing: border-box;
        }
        .card {
          height: 72px;
          margin: 0;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, #ffffff 0%, #f2f4ff 100%);
          border: 1px solid rgba(13, 16, 28, 0.06);
          box-shadow: 0 6px 18px rgba(13, 16, 28, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .card:hover,
        .card:focus-within {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(13, 16, 28, 0.12);
          border-color: rgba(13, 16, 28, 0.14);
        }
        .card img {
          max-width: 80%;
          max-height: 40px; /* LOGO_MAX_H: cambia qui l'altezza massima */
          object-fit: contain;
          filter: grayscale(1) contrast(1.05) opacity(0.9);
          transition: filter 0.25s ease, transform 0.25s ease;
        }
        .card:hover img,
        .card:focus-within img {
          filter: grayscale(0) opacity(1);
          transform: scale(1.02);
        }

        /* Controls */
        .ctrl {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid rgba(10, 11, 20, 0.1);
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(13, 16, 28, 0.08);
          display: none;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          line-height: 1;
          color: var(--ink);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ctrl:hover {
          transform: translateY(-50%) translateY(-1px);
          box-shadow: 0 10px 24px rgba(13, 16, 28, 0.12);
        }
        .ctrl.left { left: 6px; }
        .ctrl.right { right: 6px; }
        @media (min-width: 1024px) {
          .ctrl { display: inline-flex; }
        }

        /* Focus ring per accessibilità */
        .rail:focus-visible {
          outline: 2px solid var(--brand);
          outline-offset: 4px;
          border-radius: 14px;
        }
      `}</style>
    </section>
  );
}
