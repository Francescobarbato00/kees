// components/AwardWinningServices.js

import React from 'react';

export default function AwardWinningServices() {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '80px 20px'
      }}
    >
      <style>{`
        /* Link "View all services" */
        .servicesLink {
          color: rgba(0, 0, 0, 0.6);
          text-decoration: none;
          transition: color 0.3s ease, text-decoration 0.3s ease;
        }
        .servicesLink:hover {
          color: #1E40AF; /* Blu */
          text-decoration: underline;
        }

        /* Titolo sotto l'icona: Inter Tight 600, 20px, line-height 26px.
           Nero di base, blu (rgb(1,14,208)) su hover */
        .serviceTitle {
          font-family: "Inter Tight", sans-serif;
          font-weight: 600;
          font-size: 20px;
          line-height: 26px;
          color: #000;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }
        .serviceTitle:hover {
          color: rgb(1, 14, 208);
        }

        /* Testo descrittivo: 3 righe forzate con <br /> */
        .serviceText {
          font-family: Helvetica, sans-serif;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.6);
          font-size: 16px;
          line-height: 22px;
          margin: 0;
        }
      `}</style>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'left'
        }}
      >
        {/* Titolo principale */}
        <h2
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 700,
            color: 'rgb(10, 13, 49)',
            fontSize: '48px',
            lineHeight: '58px',
            marginBottom: '40px'
          }}
        >
          We provide clients <br />
          with award-winning services
        </h2>

        {/* 4 card su un’unica riga */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',  // forza i 4 box su una sola riga
            gap: '20px'
          }}
        >
          {/* Prima card */}
          <div style={{ flex: '0 0 calc(25% - 20px)', minWidth: '220px' }}>
            <img
              src="/Innovative.svg"
              alt="Icon 1"
              style={{
                marginBottom: '16px',
                maxWidth: '60px',   // icona più piccola
                height: 'auto'
              }}
            />
            <h3 className="serviceTitle">NFT Development</h3>
            <p className="serviceText">
              Non Fungible Tokens are in trend.<br />
              We've been building them<br />
              since 2016
            </p>
          </div>

          {/* Seconda card */}
          <div style={{ flex: '0 0 calc(25% - 20px)', minWidth: '220px' }}>
            <img
              src="/Cost-effectiveness.svg"
              alt="Icon 2"
              style={{
                marginBottom: '16px',
                maxWidth: '60px',
                height: 'auto'
              }}
            />
            <h3 className="serviceTitle">Mobile App Development</h3>
            <p className="serviceText">
              From Social Media Apps like TikTok<br />
              to Fitness Tracking and<br />
              Marketplaces
            </p>
          </div>

          {/* Terza card */}
          <div style={{ flex: '0 0 calc(25% - 20px)', minWidth: '220px' }}>
            <img
              src="/Industry.svg"
              alt="Icon 3"
              style={{
                marginBottom: '16px',
                maxWidth: '60px',
                height: 'auto'
              }}
            />
            <h3 className="serviceTitle">Web App Development</h3>
            <p className="serviceText">
              From Social Media Apps like TikTok<br />
              to Fitness Tracking and<br />
              Marketplaces
            </p>
          </div>

          {/* Quarta card */}
          <div style={{ flex: '0 0 calc(25% - 20px)', minWidth: '220px' }}>
            <img
              src="/Scalability.svg"
              alt="Icon 4"
              style={{
                marginBottom: '16px',
                maxWidth: '60px',
                height: 'auto'
              }}
            />
            <h3 className="serviceTitle">Software Development</h3>
            <p className="serviceText">
              From a custom CRM to<br />
              Transportation Management<br />
              System, we’ve built it all
            </p>
          </div>
        </div>

        {/* Link "View all services" */}
        <div style={{ marginTop: '20px' }}>
          <a href="#" className="servicesLink">
            View all services
          </a>
        </div>
      </div>
    </section>
  );
}
