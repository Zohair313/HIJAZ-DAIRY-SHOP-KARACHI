import React from 'react';
import { Phone, MapPin, Star, MessageCircle } from 'lucide-react';

export default function TopBar() {
  const whatsappUrl = "https://wa.me/923002539947?text=Assalam-o-Alaikum%20Hijaz%20Dairy%20Shop%2C%20I%20would%20like%20to%20order%20%2F%20inquire%20about%20your%20products.";

  return (
    <div className="et_pb_section_0_tb_header">
      <div className="container top-bar-inner">
        {/* Left Side: Contact, Location, Rating */}
        <div className="top-bar-left">
          <a href="tel:+923002539947" className="top-info-item">
            <Phone size={13} className="top-icon" />
            <span>+92 300 2539947</span>
          </a>
          <span className="dot">•</span>
          <span className="top-info-item">
            <MapPin size={13} className="top-icon" />
            <span>Saddar, Karachi</span>
          </span>
          <span className="dot">•</span>
          <span className="top-rating">
            <Star size={13} className="star-icon" />
            <strong>4.5 ★</strong> (49 reviews)
          </span>
        </div>

        {/* Right Side: Links & Shop Online via WhatsApp */}
        <div className="top-bar-right">
          <a href="#products" className="top-menu-link">Our Products</a>
          <span className="dot">•</span>
          <a href="#contact" className="top-menu-link">Contact</a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="et_pb_button_0_tb_header"
          >
            <MessageCircle size={14} className="wa-btn-icon" />
            <span>Shop Online</span>
          </a>
        </div>
      </div>

      <style>{`
        .et_pb_section_0_tb_header {
          background-color: var(--color-cream);
          padding: 8px 0;
          border-bottom: 1px solid rgba(0, 89, 80, 0.1);
          font-size: 13px;
        }
        .top-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .top-info-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-weight: 600;
          color: var(--color-primary);
        }
        .top-icon {
          color: var(--color-accent);
        }
        .top-rating {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--color-text);
          font-size: 12px;
          background: rgba(226, 155, 56, 0.15);
          padding: 0.15rem 0.6rem;
          border-radius: var(--radius-full);
        }
        .star-icon {
          color: var(--color-accent);
          fill: var(--color-accent);
        }
        .top-menu-link {
          color: var(--color-primary);
          font-weight: 600;
          transition: color var(--transition-fast);
        }
        .top-menu-link:hover {
          color: var(--color-accent);
        }
        .dot {
          color: rgba(0, 89, 80, 0.3);
          font-size: 10px;
        }
        .et_pb_button_0_tb_header {
          background-color: #25D366; /* WhatsApp Green */
          color: #ffffff;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.04em;
          padding: 0.4rem 1.15rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 2px 6px rgba(37, 211, 102, 0.3);
        }
        .et_pb_button_0_tb_header:hover {
          background-color: #1eb956;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        }
        .wa-btn-icon {
          flex-shrink: 0;
        }
        @media (max-width: 820px) {
          .top-bar-inner {
            justify-content: center;
          }
          .top-bar-left {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
