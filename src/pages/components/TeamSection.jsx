// components/TeamSection.js

import React from 'react';

export default function TeamSection() {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '40px 20px',  // spaziatura intorno
        display: 'flex',
        justifyContent: 'center' // centra orizzontalmente il contenitore
      }}
    >
      {/* Contenitore dell'immagine */}
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          overflow: 'hidden',        // per arrotondare gli angoli superiori
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)' // ombra leggera
        }}
      >
        <img
          src="/team.jpg"
          alt="Team at work"
          style={{
            width: '100%',
            display: 'block'
            // Se vuoi arrotondare anche i bordi inferiori, aggiungi borderRadius qui
          }}
        />
      </div>
    </section>
  );
}
