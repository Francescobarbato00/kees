// components/TeamShowcase.js
import React from 'react';

export default function TeamShowcase() {
  return (
    <section className="team-showcase">
      <div className="container">
        {/* Titolo + Link "View all team" */}
        <div className="header">
          <h2>
            Meet some of our 80+ <br /> team members
          </h2>
          <a href="#" className="view-all">
            View all team
          </a>
        </div>

        {/* Card dei membri */}
        <div className="cards">
          {/* Card 1 */}
          <div className="card">
            <img src="/foto.jpg" alt="Mat Zalman" />
            <h3>Mat Zalman</h3>
            <p>CEO</p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src="/foto.jpg" alt="Megan Palms" />
            <h3>Megan Palms</h3>
            <p>Marketing Director</p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src="/foto.jpg" alt="Joe Nicklason" />
            <h3>Joe Nicklason</h3>
            <p>Senior Backend Developer</p>
          </div>

          {/* Card 4 */}
          <div className="card">
            <img src="/foto.jpg" alt="Anton Thorne" />
            <h3>Anton Thorne</h3>
            <p>Senior Developer</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .team-showcase {
          background-color: #fff;
          padding: 80px 20px;
          position: relative;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .header {
          margin-bottom: 40px;
        }
        .header h2 {
          font-family: "Inter Tight", sans-serif;
          font-weight: 700;
          font-size: 48px;
          line-height: 58px;
          color: rgb(10, 13, 49);
          margin: 0 0 8px 0;
        }
        .view-all {
          font-family: Inter, sans-serif;
          font-size: 16px;
          color: #4f46e5;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .view-all:hover {
          color: #3730a3;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-between;
        }
        .card {
          flex: 0 0 calc(25% - 20px);
          min-width: 220px;
          text-align: center;
          padding: 20px;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .card img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          margin-bottom: 16px;
          object-fit: cover;
        }
        .card h3 {
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: #0f0f0f;
          margin: 0 0 4px 0;
        }
        .card p {
          font-family: "Inter", sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #6b7280;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
