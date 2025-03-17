// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  // Stile per i titoli (h4)
  const titleStyle = {
    fontFamily: '"Inter Tight", sans-serif',
    fontStyle: 'normal',
    fontWeight: 600,
    color: 'rgb(10, 13, 49)',
    fontSize: '24px',
    lineHeight: '31px',
    marginBottom: '16px'
  };

  return (
    <footer
      style={{
        backgroundColor: '#F6F7FF',
        padding: '80px 20px',
        color: '#0F0F0F'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* PARTE SUPERIORE: TITOLO, FORM E SEDI */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Colonna sinistra: testo e form */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2
              style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontSize: '48px',
                fontWeight: 700,
                marginBottom: '20px'
              }}
            >
              Start your journey <br />
              to better business
            </h2>

            {/* Campo input */}
            <input
              type="text"
              placeholder="Don't miss out updates"
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />

            {/* Checkbox e label */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', lineHeight: '1.5' }}>
                <input
                  type="checkbox"
                  style={{ marginRight: '8px' }}
                />
                I agree to the Privacy Policy and give my permission to process my personal data
                for the purposes specified in the Privacy Policy.
              </label>
            </div>

            {/* Pulsante Invia */}
            <button
              style={{
                backgroundColor: '#6b6eff',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '4px',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Send &rarr;
            </button>
          </div>

          {/* Colonna destra: sedi */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <div style={{ marginBottom: '20px' }}>
              <h4 style={titleStyle}>New York</h4>
              <p style={{ margin: '0 0 16px 0', lineHeight: '1.5' }}>
                Seventh Ave, 20th Floor <br />
                New York, NY 10018 <br />
                T: 1-800-356-8933
              </p>

              <h4 style={titleStyle}>Boston</h4>
              <p style={{ margin: '0 0 16px 0', lineHeight: '1.5' }}>
                45 Myrtle Street, 02114 <br />
                Boston, MA <br />
                T: 1-900-322-8422
              </p>

              <Link href="/locations" style={{ color: '#6b6eff', textDecoration: 'none' }}>
                View all locations
              </Link>
            </div>
          </div>
        </div>

        {/* LINEA DIVISORIA */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #e0e0e0',
            marginBottom: '40px'
          }}
        />

        {/* PARTE INFERIORE: LINK A COLONNE */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            rowGap: '40px'
          }}
        >
          {/* Colonna: Solutions */}
          <div style={{ minWidth: '150px' }}>
            <h4 style={titleStyle}>Solutions</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>NFT Development</li>
              <li style={{ marginBottom: '8px' }}>Mobile App Development</li>
              <li style={{ marginBottom: '8px' }}>Web App Development</li>
              <li style={{ marginBottom: '8px' }}>Software Development</li>
              <li style={{ marginBottom: '8px' }}>Android Development</li>
              <li style={{ marginBottom: '8px' }}>iOS Development</li>
              <li style={{ marginBottom: '8px' }}>Staff augmentation</li>
              <li style={{ marginBottom: '8px' }}>Hybrid App Development</li>
            </ul>
          </div>

          {/* Colonna: Company */}
          <div style={{ minWidth: '150px' }}>
            <h4 style={titleStyle}>Company</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>About us</li>
              <li style={{ marginBottom: '8px' }}>Team</li>
              <li style={{ marginBottom: '8px' }}>Partners & Certifications</li>
              <li style={{ marginBottom: '8px' }}>Reviews & Awards</li>
            </ul>
          </div>

          {/* Colonna: Resources */}
          <div style={{ minWidth: '150px' }}>
            <h4 style={titleStyle}>Resources</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>Blog</li>
              <li style={{ marginBottom: '8px' }}>Case studies</li>
              <li style={{ marginBottom: '8px' }}>Events</li>
              <li style={{ marginBottom: '8px' }}>FAQ</li>
            </ul>
          </div>

          {/* Colonna: Join us */}
          <div style={{ minWidth: '150px' }}>
            <h4 style={titleStyle}>Join us</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>Careers</li>
              <li style={{ marginBottom: '8px' }}>Open Positions</li>
            </ul>
            <button
              style={{
                marginTop: '8px',
                backgroundColor: '#6b6eff',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '4px',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              We are hiring
            </button>
          </div>
        </div>

        {/* COPYRIGHT E SOCIAL */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '40px'
          }}
        >
          <div style={{ fontSize: '14px', color: '#666' }}>
            © 2025 VamTam. All rights reserved. &nbsp;
            <Link href="#" style={{ color: '#666', textDecoration: 'none', marginRight: '8px' }}>
              Terms & Conditions
            </Link>
            <Link href="#" style={{ color: '#666', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
          </div>

          {/* Icone social ufficiali con effetto hover */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
            <Link href="#" className="footer-icon">
              <FaLinkedin size={24} />
            </Link>
            <Link href="#" className="footer-icon">
              <FaGithub size={24} />
            </Link>
            <Link href="#" className="footer-icon">
              <FaTwitter size={24} />
            </Link>
            <Link href="#" className="footer-icon">
              <FaFacebook size={24} />
            </Link>
            <Link href="#" className="footer-icon">
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Stili CSS in linea per le icone con effetto hover */}
      <style jsx>{`
        .footer-icon {
          color: blue;
          transition: transform 0.3s ease;
        }
        .footer-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </footer>
  );
}
