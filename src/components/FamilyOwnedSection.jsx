import React from 'react';
import { MessageCircle } from 'lucide-react';
import TitleFlourish from './TitleFlourish';

export default function FamilyOwnedSection() {
  const whatsappUrl = "https://wa.me/923002539947?text=Assalam-o-Alaikum%20Hijaz%20Dairy%20Shop%2C%20I%20want%20to%20order%20products.";

  return (
    <section className="et_pb_section et_pb_section_1 decorated-section">
      {/* Top Left Corner Print */}
      <div className="corner-ornament corner-tl" aria-hidden="true">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L140,0 C100,40 40,100 0,140 Z" fill="rgba(0, 89, 80, 0.05)" />
          <path d="M10,50 Q50,50 50,10" stroke="rgba(0, 89, 80, 0.25)" strokeWidth="2" fill="none" />
          <path d="M18,80 Q80,80 80,18" stroke="rgba(226, 155, 56, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="30" cy="30" r="16" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" />
          <circle cx="95" cy="22" r="5" fill="rgba(226, 155, 56, 0.4)" />
          <circle cx="22" cy="95" r="5" fill="rgba(226, 155, 56, 0.4)" />
        </svg>
      </div>

      {/* Bottom Right Corner Print */}
      <div className="corner-ornament corner-br" aria-hidden="true">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140,140 L0,140 C40,100 100,40 140,0 Z" fill="rgba(0, 89, 80, 0.05)" />
          <path d="M130,90 Q90,90 90,130" stroke="rgba(0, 89, 80, 0.25)" strokeWidth="2" fill="none" />
          <path d="M122,60 Q60,60 60,122" stroke="rgba(226, 155, 56, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="110" cy="110" r="16" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" />
          <circle cx="45" cy="118" r="5" fill="rgba(226, 155, 56, 0.4)" />
          <circle cx="118" cy="45" r="5" fill="rgba(226, 155, 56, 0.4)" />
        </svg>
      </div>

      {/* Center Ambient Glow */}
      <div className="ambient-backdrop"></div>

      <div className="container family-container">
        <h2 className="family-title">Hijaz Dairy Shop – Saddar, Karachi</h2>
        <TitleFlourish />

        <p className="family-lead">
          <strong>Hijaz Dairy Shop</strong> is your trusted neighborhood dairy shop in{' '}
          <span className="family-link">Saddar, Karachi</span>, specializing in{' '}
          <span className="family-link">Pure Desi Ghee</span>,{' '}
          <span className="family-link">White Butter (Makhan)</span>,{' '}
          <span className="family-link">Fresh Paneer</span>,{' '}
          <span className="family-link">Thick Yogurt</span>, and{' '}
          <span className="family-link">Pure Fresh Milk</span>.
          Crafted with genuine traditional standards, directly from farm to your kitchen.
        </p>

        <div className="family-cta">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="et_pb_button whatsapp-family-btn"
          >
            <MessageCircle size={16} />
            <span>Order via WhatsApp (+92 300 2539947)</span>
          </a>
        </div>
      </div>

      <style>{`
        .decorated-section {
          position: relative;
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(247, 244, 236, 0.93) 100%),
                      url('/images/cows-pasture.png') center/cover no-repeat;
          text-align: center;
          overflow: hidden;
        }
        .ambient-backdrop {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(247, 244, 236, 0.85) 100%);
          pointer-events: none;
        }
        .corner-ornament {
          position: absolute;
          width: 140px;
          height: 140px;
          pointer-events: none;
          z-index: 1;
        }
        .corner-tl {
          top: 0;
          left: 0;
        }
        .corner-br {
          bottom: 0;
          right: 0;
        }
        .family-container {
          position: relative;
          z-index: 2;
          max-width: 860px;
          margin: 0 auto;
        }
        .family-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
        }
        .family-lead {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--color-text);
          margin-bottom: 2rem;
        }
        .family-link {
          color: var(--color-primary);
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .family-cta {
          margin-top: 2rem;
        }
        .whatsapp-family-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #25D366;
          border-color: #25D366;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
        }
        .whatsapp-family-btn:hover {
          background-color: #1eb956;
          border-color: #1eb956;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45);
        }
      `}</style>
    </section>
  );
}
