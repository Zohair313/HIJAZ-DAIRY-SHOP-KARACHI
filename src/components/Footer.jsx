import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Star, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [queryText, setQueryText] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const whatsappBase = "https://wa.me/923002539947";

  const handleSendWhatsAppQuery = (e) => {
    e.preventDefault();
    if (queryText.trim()) {
      const fullUrl = `${whatsappBase}?text=${encodeURIComponent('Assalam-o-Alaikum Hijaz Dairy Shop, ' + queryText)}`;
      window.open(fullUrl, '_blank');
      setSentNotice(true);
      setTimeout(() => setSentNotice(false), 5000);
    }
  };

  return (
    <footer id="contact" className="footer-wrap">
      {/* Top Footer Section - Cream background */}
      <div className="et_pb_section_0_tb_footer">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Customer WhatsApp Query Box */}
            <div className="footer-col">
              <h3 className="footer-title">Customer WhatsApp Query</h3>
              <p className="footer-text">
                Apna sawal ya order details yahan likhein aur foran WhatsApp par humse rabta karein:
              </p>
              <form onSubmit={handleSendWhatsAppQuery} className="newsletter-form">
                <div className="newsletter-box">
                  <input
                    type="text"
                    value={queryText}
                    onChange={(e) => setQueryText(e.target.value)}
                    placeholder="Enter product inquiry or order details..."
                    className="newsletter-field"
                    required
                  />
                  <button type="submit" className="et_pb_button whatsapp-submit-btn">
                    <MessageCircle size={15} />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>
                {sentNotice && (
                  <div className="subscribe-notice">
                    <CheckCircle2 size={16} />
                    <span>Opening WhatsApp chat with Hijaz Dairy Shop...</span>
                  </div>
                )}
              </form>
            </div>

            {/* Col 2: Quick Links / Products */}
            <div className="footer-col">
              <h3 className="footer-title">Our Pure Products</h3>
              <ul className="footer-nav-list">
                <li><a href="#products">Pure Desi Ghee</a></li>
                <li><a href="#products">Fresh White Butter (Makhan)</a></li>
                <li><a href="#products">Dairy Fresh Paneer</a></li>
                <li><a href="#products">Thick Sweet &amp; Plain Yogurt (Dahi)</a></li>
                <li><a href="#products">100% Pure Fresh Milk</a></li>
                <li><a href="#story">About Hijaz Dairy</a></li>
              </ul>
            </div>

            {/* Col 3: Contact Us Details */}
            <div className="footer-col">
              <h3 className="footer-title">Contact Hijaz Dairy Shop</h3>
              <div className="footer-contact-info">
                {/* Rating */}
                <div className="footer-rating-pill">
                  <Star size={14} className="star-icon" />
                  <strong>4.5 ★ Rating</strong> (49 Customer Reviews)
                </div>

                <div className="contact-detail-item">
                  <Phone size={18} className="contact-icon" />
                  <div>
                    <span className="contact-label">Call &amp; WhatsApp:</span><br />
                    <a href="tel:+923002539947" className="contact-phone">+92 300 2539947</a><br />
                    <span className="contact-sub">Active Pakistani Mobile (0300)</span>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <MapPin size={18} className="contact-icon" />
                  <div>
                    <span className="contact-label">Shop Location:</span><br />
                    <address className="contact-address">
                      Saddar, Karachi, Sindh, Pakistan
                    </address>
                  </div>
                </div>

                <div className="direct-wa-box">
                  <a
                    href="https://wa.me/923002539947?text=Assalam-o-Alaikum%20Hijaz%20Dairy%20Shop%2C%20I%20have%20an%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-wa-link"
                  >
                    <MessageCircle size={16} />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="et_pb_section_1_tb_footer">
        <div className="container footer-bottom-inner">
          <div className="footer-brand-text">
            <span className="fb-name">HIJAZ DAIRY SHOP</span>
            <span className="fb-tagline">SADDAR, KARACHI • PURE DESI GHEE &amp; DAIRY SPECIALISTS</span>
          </div>
          <p className="footer-copy">
            &copy; 2026 Hijaz Dairy Shop, Karachi. All Rights Reserved.
          </p>
        </div>
      </div>

      <style>{`
        .et_pb_section_0_tb_footer {
          background-color: var(--color-cream);
          padding: 5rem 0;
          border-top: 1px solid var(--color-border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.3fr;
          gap: 3.5rem;
        }
        .footer-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
        }
        .footer-text {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-text);
          margin-bottom: 1.25rem;
        }
        .newsletter-box {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          max-width: 380px;
        }
        .newsletter-field {
          padding: 0.85rem 1.2rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: 15px;
          outline: none;
          background: #ffffff;
          transition: border-color var(--transition-fast);
        }
        .newsletter-field:focus {
          border-color: var(--color-primary);
        }
        .whatsapp-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background-color: #25D366;
          border-color: #25D366;
          width: fit-content;
          padding: 0.75rem 1.8rem;
          font-size: 13px;
        }
        .whatsapp-submit-btn:hover {
          background-color: #1eb956;
          border-color: #1eb956;
        }
        .subscribe-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #166534;
          font-weight: 600;
          font-size: 0.95rem;
          margin-top: 0.8rem;
        }
        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-nav-list a {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-primary);
          transition: color var(--transition-fast);
        }
        .footer-nav-list a:hover {
          color: var(--color-accent);
          padding-left: 4px;
        }
        .footer-contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          font-size: 1.05rem;
          color: var(--color-text);
        }
        .footer-rating-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(226, 155, 56, 0.2);
          color: var(--color-primary);
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          width: fit-content;
        }
        .star-icon {
          color: var(--color-accent);
          fill: var(--color-accent);
        }
        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .contact-icon {
          color: var(--color-primary);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }
        .contact-label {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-text-muted);
        }
        .contact-phone {
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--color-primary);
        }
        .contact-sub {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }
        .contact-address {
          font-style: normal;
          font-weight: 600;
          color: var(--color-text);
        }
        .direct-wa-box {
          margin-top: 0.5rem;
        }
        .direct-wa-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #128C7E;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: underline;
        }
        .direct-wa-link:hover {
          color: #075E54;
        }
        .et_pb_section_1_tb_footer {
          background-color: var(--color-primary-dark);
          padding: 2.5rem 0;
          text-align: center;
        }
        .footer-bottom-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .footer-brand-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }
        .fb-name {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.05em;
        }
        .fb-tagline {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-accent);
          letter-spacing: 0.12em;
        }
        .footer-copy {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.92rem;
          margin: 0;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
