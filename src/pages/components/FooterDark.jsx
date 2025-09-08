import React from "react";
import Link from "next/link";

export default function FooterDark() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="promo">
        <div className="promoInner">
          <p className="promoText">
            Want to know more about data-driven growing? Sign up for our monthly newsletter.
          </p>
          <button className="promoBtn">Sign up</button>
        </div>
      </div>

      <div className="divider" aria-hidden />

      <div className="container">
        <div className="col logoCol">
          <div className="logo">
            <span className="sprout">🌱</span>
            <span className="brand">PLANTTEC</span>
          </div>
        </div>

        <nav className="col">
          <h4 className="h4">For whom</h4>
          <ul>
            <li><Link href="#">Production companies</Link></li>
            <li><Link href="#">Managers</Link></li>
            <li><Link href="#">Investors</Link></li>
            <li><Link href="#">Crop consultants</Link></li>
            <li><Link href="#">Suppliers</Link></li>
          </ul>
        </nav>

        <nav className="col">
          <h4 className="h4">Looking for</h4>
          <ul>
            <li><Link href="#">Solutions</Link></li>
            <li><Link href="#">Strategy Manager</Link></li>
            <li><Link href="#">HortiFootprint Calculator</Link></li>
            <li><Link href="#">Plant Empowerment</Link></li>
            <li><Link href="#">Meteo map of NL</Link></li>
          </ul>
        </nav>

        <nav className="col">
          <h4 className="h4">Planttec.com</h4>
          <ul>
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Login</Link></li>
            <li><Link href="#">Register</Link></li>
          </ul>
          <Link href="#" className="cta">Get in touch</Link>
        </nav>
      </div>

      <div className="bottom">
        <p className="legal">
          © Planttec 2025 | Privacy and cookie statement | Terms and conditions
        </p>
        <div className="social">
          <a href="#">in</a>
          <a href="#">yt</a>
          <a href="#">ig</a>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #050907;
          color: #e9f4ef;
          padding: 30px 20px;
        }

        .promoInner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto 20px;
        }

        .promoText {
          margin: 0;
          font-weight: 700;
        }

        .promoBtn {
          background: linear-gradient(90deg, #2ecc71, #1fa45a);
          border: none;
          color: #062a1a;
          font-weight: 800;
          border-radius: 999px;
          padding: 10px 18px;
          cursor: pointer;
        }

        .divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          max-width: 1200px;
          margin: 0 auto 30px;
        }

        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 20px;
          font-weight: 900;
          display: flex;
          gap: 8px;
        }

        .h4 {
          margin: 0 0 10px;
          font-size: 18px;
          font-weight: 800;
        }

        .col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 8px;
        }

        .col a {
          color: #e9f4ef;
          text-decoration: none;
        }

        .col a:hover {
          text-decoration: underline;
        }

        .cta {
          display: inline-block;
          margin-top: 12px;
          background: linear-gradient(90deg, #2ecc71, #1fa45a);
          color: #062a1a;
          font-weight: 800;
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
        }

        .bottom {
          max-width: 1200px;
          margin: 30px auto 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .legal {
          margin: 0;
          font-size: 14px;
          color: #98b3a9;
        }

        .social {
          display: flex;
          gap: 10px;
        }

        .social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #e9f4ef;
          font-weight: 800;
          text-decoration: none;
        }

        .social a:hover {
          background: rgba(46, 204, 113, 0.2);
        }
      `}</style>
    </footer>
  );
}
