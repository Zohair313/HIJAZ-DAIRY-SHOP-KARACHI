import React from 'react';

export default function FarmingPractices() {
  const whatsappUrl = "https://wa.me/923002539947?text=Assalam-o-Alaikum%20Hijaz%20Dairy%20Shop%2C%20I%20would%20like%20to%20know%20more%20about%20your%20dairy%20purity%20standards.";

  return (
    <section id="practices" className="et_pb_section et_pb_section_7 farming-practices-section decorated-practices-section">
      {/* Top Right Corner Print */}
      <div className="corner-ornament corner-tr" aria-hidden="true">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140,0 L0,0 C40,40 100,100 140,140 Z" fill="rgba(0, 89, 80, 0.05)" />
          <path d="M130,50 Q90,50 90,10" stroke="rgba(0, 89, 80, 0.25)" strokeWidth="2" fill="none" />
          <path d="M122,80 Q60,80 60,18" stroke="rgba(226, 155, 56, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="110" cy="30" r="16" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" />
          <circle cx="45" cy="22" r="5" fill="rgba(226, 155, 56, 0.4)" />
        </svg>
      </div>

      {/* Bottom Left Corner Print */}
      <div className="corner-ornament corner-bl" aria-hidden="true">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,140 L140,140 C100,100 40,40 0,0 Z" fill="rgba(0, 89, 80, 0.05)" />
          <path d="M10,90 Q50,90 50,130" stroke="rgba(0, 89, 80, 0.25)" strokeWidth="2" fill="none" />
          <path d="M18,60 Q80,60 80,122" stroke="rgba(226, 155, 56, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="30" cy="110" r="16" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" />
          <circle cx="95" cy="118" r="5" fill="rgba(226, 155, 56, 0.4)" />
        </svg>
      </div>

      <div className="container practices-container">
        <div className="practices-row">
          {/* Left Column: Cow image with 24px border radius */}
          <div className="practices-col-img">
            <div className="practices-img-frame">
              <img
                src="/images/cows-pasture.png"
                alt="Hijaz Dairy Pure Cows in the field"
                className="practices-img"
              />
            </div>
          </div>

          {/* Right Column: Text & Button */}
          <div className="practices-col-text">
            <h2 className="practices-heading">Purity &amp; Dairy Standards</h2>

            <p className="practices-lead">
              It’s our pride and joy to create wholesome, nutritious dairy products with integrity,
              transparency, and honesty. At <strong>Hijaz Dairy Shop</strong>, we maintain strict hygiene,
              humane animal care, and zero tolerance for water or chemical adulteration.
            </p>

            <p className="practices-lead">
              Every drop of milk and every spoonful of Desi Ghee represents our commitment
              to pure health for you and your family in Karachi.
            </p>

            <div className="practices-cta">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="et_pb_button"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .decorated-practices-section {
          position: relative;
          background: linear-gradient(135deg, rgba(254, 252, 248, 0.94) 0%, rgba(247, 244, 236, 0.93) 100%),
                      url('/images/bg-events.jpg') center/cover no-repeat;
          padding: 6.5rem 0;
          overflow: hidden;
        }
        .corner-ornament {
          position: absolute;
          width: 140px;
          height: 140px;
          pointer-events: none;
          z-index: 1;
        }
        .corner-tr {
          top: 0;
          right: 0;
        }
        .corner-bl {
          bottom: 0;
          left: 0;
        }
        .practices-container {
          position: relative;
          z-index: 2;
        }
        .practices-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4.5rem;
          align-items: center;
        }
        .practices-img-frame {
          border-radius: var(--radius-card);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 5px solid #ffffff;
        }
        .practices-img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform var(--transition-base);
        }
        .practices-img-frame:hover .practices-img {
          transform: scale(1.02);
        }
        .practices-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 3.6vw, 3.2rem);
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }
        .practices-lead {
          font-size: 1.2rem;
          line-height: 1.75;
          color: var(--color-text);
          margin-bottom: 1.4rem;
        }
        .practices-cta {
          margin-top: 1.5rem;
        }
        @media (max-width: 900px) {
          .practices-row {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
