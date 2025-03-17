// components/LatestInsight.js

import React from 'react';

export default function LatestInsight() {
  return (
    <section className="latest-insight">
      <div className="latestInsightContainer">
        {/* Titolo sezione */}
        <h2 className="latestInsightTitle">Latest Insight</h2>

        {/* Contenitore delle 3 card */}
        <div className="cardsWrapper">
          {/* Card 1 */}
          <div className="card">
            <img src="/images1.jpg" alt="Card 1" className="cardImage" />
            <div className="cardContent">
              <div className="cardLabel">PRODUCT ENGINEERING</div>
              <h3 className="cardTitle">
                Identify the best technologies for your business with Tecnologia's new tool
              </h3>
              <a href="#" className="cardLink">
                Learn more
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src="/images2.jpg" alt="Card 2" className="cardImage" />
            <div className="cardContent">
              <div className="cardLabel">AI</div>
              <h3 className="cardTitle">
                How Chat GPT is Revolutionizing the Way We Find Information
              </h3>
              <a href="#" className="cardLink">
                Learn more
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src="/images3.jpg" alt="Card 3" className="cardImage" />
            <div className="cardContent">
              <div className="cardLabel">COMPANY</div>
              <h3 className="cardTitle">
                Clutch Recognizes Tecnologia Among New York's Top Development for 2023
              </h3>
              <a href="#" className="cardLink">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .latest-insight {
          background-color: #fefefe;
          padding: 60px 20px;
        }
        .latestInsightContainer {
          max-width: 1200px;
          margin: 0 auto;
        }
        .latestInsightTitle {
          font-family: "Inter Tight", sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #0f0f0f;
          margin-bottom: 40px;
          text-align: center;
        }
        .cardsWrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .card {
          flex: 0 0 calc(33.333% - 20px);
          background-color: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }
        .cardImage {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .cardContent {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .cardLabel {
          font-family: "Inter Tight", sans-serif;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          color: #9ea5b4;
          margin-bottom: 8px;
          letter-spacing: 0.05em;
        }
        .cardTitle {
          font-family: "Inter Tight", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #0f0f0f;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .cardLink {
          font-family: "Inter Tight", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #9ea5b4;
          text-decoration: none;
          transition: color 0.3s ease;
          align-self: flex-start;
        }
        .cardLink:hover {
          color: #1e40af;
        }
        @media (max-width: 768px) {
          .card {
            flex: 0 0 calc(50% - 20px);
          }
        }
        @media (max-width: 480px) {
          .card {
            flex: 0 0 100%;
          }
        }
      `}</style>
    </section>
  );
}
