// components/ContactBanner.js

import React from 'react';

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container">
        {/* COLONNA SINISTRA */}
        <div className="info">
          <h2>
            Got a project? <br />
            Let’s talk &rarr;
          </h2>
          <p className="contact-detail">T: 1-800-356-8833</p>
          <p className="contact-detail">
            E:{' '}
            <a href="mailto:office@tecnologia.com">
              office@tecnologia.com
            </a>
          </p>
        </div>

        {/* COLONNA DESTRA: FORM */}
        <div className="form-container">
          <form className="contact-form">
            <input
              type="text"
              placeholder="Your name"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email address"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="input-field"
            />
            <input
              type="text"
              placeholder="What is your budget?"
              className="input-field"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="input-field textarea-field"
            />
            <div className="checkbox-container">
              <label>
                <input type="checkbox" className="checkbox" />
                <span>I want an NDA to protect my idea</span>
              </label>
              <button type="submit">Send a request</button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-banner {
          background: url("/diamond-pattern.svg") 50px center no-repeat, #1E40AF;
          border-radius: 20px;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
          color: #fff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }
        .info {
          flex: 1 1 300px;
          min-width: 280px;
        }
        .info h2 {
          font-family: "Inter Tight", sans-serif;
          font-weight: 700;
          font-size: 32px;
          line-height: 38px;
          margin-bottom: 20px;
        }
        .contact-detail {
          margin: 0 0 8px;
          font-size: 16px;
        }
        .info a {
          color: #fff;
          text-decoration: underline;
        }
        .form-container {
          flex: 1 1 400px;
          min-width: 280px;
        }
        .contact-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: start;
        }
        .input-field {
          width: 100%;
          padding: 12px;
          border-radius: 6px;
          border: none;
          font-size: 14px;
          font-family: inherit;
          background-color: #fff;
          color: #000;
          box-sizing: border-box;
          outline: none;
        }
        .textarea-field {
          grid-column: 1 / 3;
          resize: vertical;
        }
        .checkbox-container {
          grid-column: 1 / 3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 8px;
        }
        .checkbox-container label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #000;
          font-size: 14px;
        }
        .checkbox {
          transform: scale(1.2);
          cursor: pointer;
        }
        .checkbox-container button {
          background-color: #fff;
          color: #1E40AF;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          padding: 12px 20px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .checkbox-container button:hover {
          background-color: #e5e5e5;
          transform: translateY(-2px);
        }
        /* Placeholder styling */
        .input-field::placeholder {
          color: #000;
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
}
