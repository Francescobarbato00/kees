// components/Hero.js

import React from 'react';

export default function Hero() {
  return (
    <section
      style={{
        // Sfondo
        backgroundImage: 'url("/sfondo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        // Dimensioni e layout
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: '#fff'
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fadeIn {
          animation: fadeIn 2s ease-in-out forwards;
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .slideUp {
          animation: slideUp 2s ease-in-out forwards;
        }
      `}</style>

      <div
        style={{
          maxWidth: '700px',
          marginLeft: '60px',
          padding: '40px 0'
        }}
      >
        <h1
          className="fadeIn"
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 600,
            fontSize: '80px',
            lineHeight: '88px',
            marginBottom: '24px'
          }}
        >
          Con Jenova <br />
          il cambiamento <br />
          è opportunità
        </h1>

        <p
          className="slideUp"
          style={{
            fontFamily: 'Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: '30px',
            lineHeight: '42px'
          }}
        >
          Rivoluziona il tuo Business con la nostra <br />
          Passione e Professionalità
        </p>
      </div>
    </section>
  );
}
