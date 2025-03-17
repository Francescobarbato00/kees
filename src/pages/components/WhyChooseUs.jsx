// components/WhyChooseUs.js

import React from 'react';

export default function WhyChooseUs() {
  return (
    <section
      style={{
        backgroundColor: '#fff',   // sfondo bianco
        padding: '80px 20px',      // spaziatura interna
        textAlign: 'left'          // testo allineato a sinistra
      }}
    >
      {/* Inseriamo uno style block con la classe per il pulsante */}
      <style>{`
        .ctaButton {
          display: inline-block;
          background-color: #E8ECFF;
          padding: 14px 28px;
          border-radius: 6px;
          color: #0F0F0F;
          text-decoration: none;
          font-family: "Inter Tight", sans-serif;
          font-weight: 600;
          font-size: 18px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .ctaButton:hover {
          background-color: #1E40AF; /* Blu scuro in hover */
          color: #ffffff;            /* Testo bianco in hover */
        }
      `}</style>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '58px',
            color: '#0F0F0F',
            marginBottom: '40px'
          }}
        >
          Experienced teams and a agile framework, we prioritise 
          the commercial goals of the client to deliver 
          the highest business value.
        </h2>

        {/* Pulsante CTA con classe ctaButton */}
        <a href="#" className="ctaButton">
          Why to choose us
        </a>
      </div>
    </section>
  );
}
