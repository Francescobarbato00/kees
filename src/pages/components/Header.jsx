// components/Header.js
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span>Junior Jenova Space</span>
      </div>

      {/* Navigazione */}
      <nav className="nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/solutions">Per le Aziende</Link>
          </li>
          <li>
            <Link href="/company">Chi Siamo</Link>
          </li>
          <li>
            <Link href="/resources">Contatti</Link>
          </li>
        </ul>
      </nav>

      {/* Bottone CTA */}
      <div className="cta">
        <Link href="/contact">Get in Touch</Link>
      </div>

      <style jsx>{`
        .header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          color: #fff;
          z-index: 9999;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        .logo span {
          font-size: 18px;
          font-weight: bold;
          font-family: "Inter Tight", sans-serif;
        }
        .nav ul {
          list-style: none;
          display: flex;
          gap: 24px;
          margin: 0;
          padding: 0;
        }
        .nav li a {
          color: #fff;
          text-decoration: none;
          font-family: "Inter Tight", sans-serif;
          transition: color 0.3s ease;
        }
        .nav li a:hover {
          color: #6b6eff;
        }
        .cta a {
          background-color: #6b6eff;
          padding: 10px 20px;
          border-radius: 4px;
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          font-family: "Inter Tight", sans-serif;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .cta a:hover {
          background-color: #5454d4;
          transform: translateY(-2px);
        }
      `}</style>
    </header>
  );
}
