// components/FundedCompaniesBanner.js

import React from 'react';

export default function FundedCompaniesBanner() {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '80px 20px'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Titolo principale */}
        <h1
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '56px',
            color: '#0F0F0F',
            marginBottom: '20px'
          }}
        >
          Mobile app development <br />
          for funded companies
        </h1>

        {/* Linea orizzontale sottile */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #E5E7EB',
            marginBottom: '40px'
          }}
        />

        {/* Contenitore statistiche + bottone */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap', // in caso di schermi piccoli
            gap: '20px'
          }}
        >
          {/* Statistiche */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              flexWrap: 'wrap'
            }}
          >
            {/* Stat 1 */}
            <div style={{ minWidth: '140px' }}>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: '#0F0F0F',
                  marginBottom: '4px'
                }}
              >
                10 Years
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#6B7280'
                }}
              >
                in business
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{ minWidth: '140px' }}>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: '#0F0F0F',
                  marginBottom: '4px'
                }}
              >
                7+ Years
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#6B7280'
                }}
              >
                in app development
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{ minWidth: '140px' }}>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: '#0F0F0F',
                  marginBottom: '4px'
                }}
              >
                10+ Startups
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#6B7280'
                }}
              >
                unicorns built
              </div>
            </div>

            {/* Stat 4 */}
            <div style={{ minWidth: '140px' }}>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: '#0F0F0F',
                  marginBottom: '4px'
                }}
              >
                #1 Development
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#6B7280'
                }}
              >
                company in USA
              </div>
            </div>
          </div>

          {/* Bottone "Get in touch" */}
          <div>
            <a
              href="#"
              style={{
                display: 'inline-block',
                backgroundColor: '#1E40AF',
                color: '#fff',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                padding: '12px 24px',
                borderRadius: '6px'
              }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
