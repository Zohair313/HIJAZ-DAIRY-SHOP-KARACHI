import React from 'react';
import { MapPin, Phone, Star, MessageCircle } from 'lucide-react';

export default function StoreAndMarkets() {
  const whatsappUrl = "https://wa.me/923002539947?text=Assalam-o-Alaikum%20Hijaz%20Dairy%20Shop%2C%20I%20would%20like%20to%20visit%20your%20shop%20in%20Saddar%20Karachi%20%2F%20place%20an%20order.";

  return (
    <section id="markets" className="et_pb_section et_pb_section_6 store-markets-section">
      <div className="store-markets-overlay"></div>
      <div className="container store-markets-container">
        <div className="store-rating-badge">
          <Star size={16} className="star-icon" />
          <span>4.5 ★ Rated (49 Customer Reviews)</span>
        </div>

        <h2 className="store-markets-title">Visit Hijaz Dairy Shop in Saddar, Karachi</h2>

        <p className="store-markets-subtitle">
          Experience the authentic aroma and taste of fresh dairy products.
          Serving Karachi with pure Desi Ghee, White Butter, Fresh Paneer, and Milk daily.
        </p>

        <div className="store-contact-row">
          <div className="store-contact-badge">
            <MapPin size={18} className="badge-icon" />
            <span>Saddar, Karachi</span>
          </div>
          <div className="store-contact-badge">
            <Phone size={18} className="badge-icon" />
            <span>+92 300 2539947 (Call &amp; WhatsApp)</span>
          </div>
        </div>

        <div className="store-markets-cta">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="et_pb_button whatsapp-store-btn"
          >
            <MessageCircle size={18} />
            <span>Send Customer Query on WhatsApp</span>
          </a>
        </div>
      </div>

      <style>{`
        .store-markets-section {
          position: relative;
          background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
                      url('/images/bg-markets.jpg') center/cover no-repeat;
          background-attachment: fixed;
          padding: 8rem 0;
          text-align: center;
          color: #ffffff;
        }
        .store-markets-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 61, 54, 0.45);
          pointer-events: none;
        }
        .store-markets-container {
          position: relative;
          z-index: 2;
          max-width: 860px;
          margin: 0 auto;
        }
        .store-rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          padding: 0.4rem 1.25rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.9rem;
          color: #ffffff;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .star-icon {
          color: var(--color-accent);
          fill: var(--color-accent);
        }
        .store-markets-title {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 4.2vw, 3.8rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 1.4rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }
        .store-markets-subtitle {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }
        .store-contact-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .store-contact-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 1rem;
        }
        .badge-icon {
          color: var(--color-accent);
        }
        .store-markets-cta {
          display: flex;
          justify-content: center;
        }
        .whatsapp-store-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: #25D366;
          border-color: #25D366;
          font-size: 16px;
          padding: 0.9rem 2.4rem;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        }
        .whatsapp-store-btn:hover {
          background-color: #1eb956;
          border-color: #1eb956;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5);
        }
      `}</style>
    </section>
  );
}
