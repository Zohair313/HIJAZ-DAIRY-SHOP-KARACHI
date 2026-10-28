import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/923002539947?text=Assalam-o-Alaikum%20Hijaz%20Dairy%20Shop%2C%20I%20would%20like%20to%20order%20%2F%20inquire%20about%20your%20dairy%20products.";

  return (
    <aside aria-label="WhatsApp Support">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Chat with Hijaz Dairy Shop on WhatsApp (+92 300 2539947)"
      >
        <div className="wa-icon-wrap">
          <MessageCircle size={28} />
        </div>
        <span className="wa-text-badge">
          Order on WhatsApp
        </span>
      </a>

      <style>{`
        .floating-wa-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background-color: #25D366;
          color: #ffffff;
          padding: 0.6rem 1.1rem 0.6rem 0.6rem;
          border-radius: var(--radius-full);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
        }
        .floating-wa-btn:hover {
          background-color: #1eb956;
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 10px 28px rgba(37, 211, 102, 0.6);
          color: #ffffff;
        }
        .wa-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .wa-text-badge {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        @media (max-width: 600px) {
          .floating-wa-btn {
            bottom: 18px;
            right: 18px;
            padding: 0.5rem;
          }
          .wa-text-badge {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
