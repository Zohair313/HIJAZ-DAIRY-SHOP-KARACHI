import React from 'react';
import { ArrowRight, Star, MessageCircle, Phone, CheckCircle2, Award } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/923002539947?text=Assalam-o-Alaikum%20Hijaz%20Dairy%20Shop%2C%20I%20would%20like%20to%20order%20pure%20dairy%20products.";

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Shop Location & Rating Badge */}
          <div className="hero-badge">
            <span className="badge-location">Saddar, Karachi</span>
            <span className="badge-sep">•</span>
            <span className="badge-rating">
              <Star size={14} className="badge-star" />
              <strong>4.5 ★</strong> (49 Reviews)
            </span>
          </div>

          <h1 className="hero-title">
            Pure Desi Ghee, White Butter, <br />
            <span className="hero-title-highlight">Paneer, Yogurt &amp; Fresh Milk</span>
          </h1>

          <p className="hero-subtitle">
            Welcome to <strong>Hijaz Dairy Shop</strong>. Handcrafted with traditional purity,
            free from preservatives or adulteration — wholesome dairy delivered fresh to your door in Karachi.
          </p>

          <div className="hero-actions">
            {/* Primary WhatsApp Order CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>Order on WhatsApp (Shop Online)</span>
              <ArrowRight size={18} />
            </a>

            {/* Direct Phone Call CTA */}
            <a href="tel:+923002539947" className="btn btn-outline-white btn-lg">
              <Phone size={18} />
              <span>Call: +92 300 2539947</span>
            </a>
          </div>

          {/* Quick trust metrics */}
          <div className="hero-features">
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="feature-icon" />
              <span>100% Khallas Desi Ghee</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="feature-icon" />
              <span>Fresh White Butter &amp; Paneer</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={16} className="feature-icon" />
              <span>Direct Daily Home Supply</span>
            </div>
          </div>
        </div>

        {/* Decorative Floating Artisan Purity Seal */}
        <div className="hero-purity-seal" aria-hidden="true">
          <div className="seal-circle">
            <svg viewBox="0 0 160 160" className="seal-svg">
              <defs>
                <path
                  id="sealTextPath"
                  d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                />
              </defs>
              <circle cx="80" cy="80" r="74" stroke="rgba(226, 155, 56, 0.4)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <circle cx="80" cy="80" r="50" fill="rgba(0, 61, 54, 0.85)" stroke="var(--color-accent)" strokeWidth="2" />
              <text className="seal-text" fill="var(--color-accent)">
                <textPath href="#sealTextPath" startOffset="0%">
                  ★ 100% PURE &amp; NATURAL • HIJAZ DAIRY • SADDAR KARACHI
                </textPath>
              </text>
            </svg>
            <div className="seal-center-icon">
              <Award size={32} className="seal-award" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Milk Wave Flow Divider */}
      <div className="hero-wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="#faf8f3">
          <path d="M0,0 C320,50 640,10 960,40 C1200,60 1360,20 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(0, 61, 54, 0.93) 0%, rgba(0, 89, 80, 0.86) 100%),
                      url('/images/cows-pasture.png') center/cover no-repeat;
          color: #ffffff;
          padding: 6.5rem 0 7rem;
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(226, 155, 56, 0.22), transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(0, 89, 80, 0.4), transparent 50%);
          pointer-events: none;
        }
        .hero-container {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          padding: 0.45rem 1.4rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .badge-star {
          color: var(--color-accent);
          fill: var(--color-accent);
          vertical-align: -2px;
          margin-right: 0.25rem;
        }
        .badge-sep {
          opacity: 0.5;
        }
        .hero-title {
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
          font-size: clamp(2.4rem, 4.8vw, 4.2rem);
        }
        .hero-title-highlight {
          color: var(--color-accent);
          font-style: italic;
        }
        .hero-subtitle {
          color: rgba(255, 255, 255, 0.95);
          font-size: clamp(1.15rem, 2vw, 1.35rem);
          max-width: 760px;
          margin-bottom: 2.8rem;
          line-height: 1.65;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .btn-whatsapp {
          background-color: #25D366;
          color: #ffffff;
          border: 2px solid #25D366;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.35);
        }
        .btn-whatsapp:hover {
          background-color: #1eb956;
          border-color: #1eb956;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.45);
        }
        .btn-lg {
          padding: 0.95rem 2.2rem;
          font-size: 1rem;
        }
        .hero-features {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 2rem;
          flex-wrap: wrap;
        }
        .hero-feature-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.98rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.92);
        }
        .feature-icon {
          color: var(--color-accent);
        }

        /* Artisan Purity Seal */
        .hero-purity-seal {
          position: absolute;
          top: 30px;
          right: 20px;
          z-index: 5;
        }
        .seal-circle {
          position: relative;
          width: 130px;
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
        }
        .seal-svg {
          width: 100%;
          height: 100%;
          animation: spinSeal 25s linear infinite;
        }
        @keyframes spinSeal {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .seal-text {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 2px;
        }
        .seal-center-icon {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .seal-award {
          color: var(--color-accent);
        }

        /* Bottom Milk Wave */
        .hero-wave-bottom {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          line-height: 0;
          pointer-events: none;
          z-index: 3;
        }
        .hero-wave-bottom svg {
          display: block;
          width: 100%;
          height: 48px;
        }

        @media (max-width: 900px) {
          .hero-purity-seal {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .hero-section {
            padding: 4.5rem 0 5.5rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
          .hero-features {
            flex-direction: column;
            gap: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
