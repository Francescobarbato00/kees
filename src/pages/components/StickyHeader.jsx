// components/StickyHeader.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyHeader() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra l'header sticky quando l'utente scorre oltre 80px
      if (window.scrollY > 80) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky-header ${showHeader ? 'visible' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <span>Junior Jenova Space</span>
      </div>

      {/* Navigazione */}
      <nav className="sticky-nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">Per le Aziende</Link>
          </li>
          <li>
            <Link href="#">Chi Siamo</Link>
          </li>
          <li>
            <Link href="#">Contatti</Link>
          </li>
        </ul>
      </nav>

      {/* Bottone CTA */}
      <div className="cta">
        <Link href="#">Get in touch</Link>
      </div>

      <style jsx>{`
        /* Contenitore Header Sticky */
        .sticky-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          transform: translateY(-100%);
          transition: transform 0.4s ease;
          z-index: 9999;

          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 40px;
        }
        /* Mostra l'header quando lo state showHeader è true */
        .sticky-header.visible {
          transform: translateY(0);
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .logo span {
          font-family: "Inter Tight", sans-serif;
          font-weight: bold;
          font-size: 18px;
          color: #0000ff; /* Blu */
        }

        /* Navigazione */
        .sticky-nav ul {
          list-style: none;
          display: flex;
          gap: 24px;
          margin: 0;
          padding: 0;
        }
        .sticky-nav li a {
          text-decoration: none;
          font-family: "Inter Tight", sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: #0000ff; /* Blu */
          position: relative;
          transition: color 0.3s ease;
        }
        /* Freccina ▼ come nel main header (se non serve, rimuovila) */
        .sticky-nav li a::after {
          content: " ▼";
          font-size: 10px;
          color: #0000ff;
          margin-left: 4px;
        }
        .sticky-nav li a:hover {
          color: #1e40af; /* Blu più scuro in hover */
          text-decoration: underline;
        }

        /* Bottone CTA */
        .cta a {
          background-color: #e0e0ff;
          padding: 8px 16px;
          border-radius: 6px;
          color: #0000ff; /* Blu */
          text-decoration: none;
          font-family: "Inter Tight", sans-serif;
          font-weight: 600;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .cta a:hover {
          background-color: #c7c7ff;
          transform: translateY(-2px);
        }
      `}</style>
    </header>
  );
}
