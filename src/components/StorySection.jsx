import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import TitleFlourish from './TitleFlourish';

export default function StorySection() {
  const whatsappUrl = "https://wa.me/923002539947?text=Assalam-o-Alaikum%20Hijaz%20Dairy%20Shop%2C%20I%20would%20like%20to%20know%20more%20about%20your%20dairy%20products.";

  return (
    <section id="story" className="et_pb_section et_pb_section_2 decorated-story-section">
      {/* Top Right Corner Ornament */}
      <div className="corner-ornament corner-tr" aria-hidden="true">
        <svg viewBox="0 0 140 140" fill="none">
          <path d="M140,0 L0,0 C40,40 100,100 140,140 Z" fill="rgba(0, 89, 80, 0.05)" />
          <path d="M130,50 Q90,50 90,10" stroke="rgba(226, 155, 56, 0.35)" strokeWidth="2" fill="none" />
          <circle cx="110" cy="30" r="16" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container story-container">
        <div className="story-row">
          {/* Left Column: Image with 24px border radius & gold badge */}
          <div className="story-col-image">
            <div className="story-image-wrap">
              <img
                src="/images/hero-family.jpg"
                alt="Hijaz Dairy Shop Pure Dairy Heritage"
                className="story-img"
              />
              <div className="heritage-badge">
                <ShieldCheck size={18} className="badge-shield-icon" />
                <span>100% Traditional Purity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Text & CTA */}
          <div className="story-col-text">
            <h3 className="story-title">
              Traditional Taste, Uncompromised Purity for Your Family.
            </h3>
            <div style={{ marginLeft: 0, textAlign: 'left' }}>
              <TitleFlourish color="var(--color-primary)" />
            </div>

            <p className="story-desc">
              At <strong>Hijaz Dairy Shop</strong>, located in the heart of Saddar, Karachi,
              we take pride in bringing back the genuine taste of authentic dairy.
              From slow-simmered aromatic Pure Desi Ghee to freshly churned White Butter,
              paneer, and thick yogurt, every batch is made without additives, chemicals, or compromises.
            </p>

            <p className="story-desc">
              Rated <strong>4.5 ★ by 49+ satisfied customers</strong> across Karachi,
              we ensure that health, hygiene, and wholesome richness reach your kitchen every day.
            </p>

            <div className="story-cta">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="et_pb_button whatsapp-story-btn"
              >
                <MessageCircle size={16} />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .decorated-story-section {
          position: relative;
          background-color: var(--color-cream);
          padding: 6rem 0;
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
        .story-container {
          position: relative;
          z-index: 2;
        }
        .story-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4.5rem;
          align-items: center;
        }
        .story-image-wrap {
          position: relative;
          border-radius: var(--radius-card);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 6px solid #ffffff;
        }
        .story-img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform var(--transition-base);
        }
        .story-image-wrap:hover .story-img {
          transform: scale(1.02);
        }
        .heritage-badge {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          background: rgba(0, 61, 54, 0.92);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-accent);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          font-weight: 700;
          box-shadow: var(--shadow-md);
        }
        .badge-shield-icon {
          color: var(--color-accent);
        }
        .story-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.2vw, 2.8rem);
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.15;
          margin-bottom: 0.8rem;
        }
        .story-desc {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--color-text);
          margin-bottom: 1.25rem;
        }
        .story-cta {
          margin-top: 1.8rem;
        }
        .whatsapp-story-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media (max-width: 900px) {
          .story-row {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
