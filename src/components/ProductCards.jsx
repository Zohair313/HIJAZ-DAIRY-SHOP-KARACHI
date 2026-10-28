import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import TitleFlourish from './TitleFlourish';

export default function ProductCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: 'Pure Desi Ghee',
      subtitle: '100% Khallas • Traditional Danedar',
      image: '/images/product-organic.jpg',
      content: 'Our Pure Desi Ghee is prepared using time-honored slow-cooking methods. Rich in natural aroma, granular (danedar) texture, and essential vitamins with absolutely zero preservatives or artificial flavoring. The perfect golden touch for your daily meals, parathas, and sweets.',
      buttonText: 'Order Desi Ghee on WhatsApp',
      whatsappMsg: 'Assalam-o-Alaikum Hijaz Dairy Shop, I want to order / inquire about Pure Desi Ghee.'
    },
    {
      title: 'Fresh White Butter (Makhan)',
      subtitle: 'Daily Churned • Pure & Salt-Free',
      image: '/images/product-milk.jpg',
      content: 'Freshly churned white butter (desi makhan) packed with delicate flavor and velvet smoothness. Made pure every single day without chemical bleaching or added preservatives. Perfect for authentic breakfast parathas, baking, or direct table use.',
      buttonText: 'Order White Butter on WhatsApp',
      whatsappMsg: 'Assalam-o-Alaikum Hijaz Dairy Shop, I want to order Fresh White Butter (Makhan).'
    },
    {
      title: 'Fresh Paneer & Thick Yogurt',
      subtitle: 'Soft Cottage Cheese & Creamy Dahi',
      image: '/images/product-farm-visit.jpg',
      content: 'Our fresh dairy Paneer is soft, spongy, and rich in natural milk protein, ideal for restaurant-style dishes. Our thick sweet and plain Yogurt (Dahi) is set naturally with active cultures, delivering a smooth, refreshing bite every time.',
      buttonText: 'Order Paneer & Dahi on WhatsApp',
      whatsappMsg: 'Assalam-o-Alaikum Hijaz Dairy Shop, I want to order Fresh Paneer and Thick Yogurt.'
    },
    {
      title: '100% Pure Fresh Milk',
      subtitle: 'Hygienic Full Cream Milk • Karachi Delivery',
      image: '/images/product-delivery.jpg',
      content: 'Wholesome, unadulterated fresh milk tested for density and cleanliness. Free from synthetic hormones, water adulteration, or powdered additives. Delivered fresh to your home in Karachi to nourish your family with natural goodness.',
      buttonText: 'Order Fresh Milk on WhatsApp',
      whatsappMsg: 'Assalam-o-Alaikum Hijaz Dairy Shop, I want to order 100% Pure Fresh Milk.'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const current = items[currentIndex];
  const currentWhatsAppUrl = `https://wa.me/923002539947?text=${encodeURIComponent(current.whatsappMsg)}`;

  return (
    <section id="products" className="et_pb_section et_pb_section_4 dica_carousel_section decorated-carousel-section">
      {/* Top Left Corner Flourish Print */}
      <div className="corner-ornament corner-tl" aria-hidden="true">
        <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L150,0 C110,40 40,110 0,150 Z" fill="rgba(0, 89, 80, 0.05)" />
          <path d="M12,60 Q60,60 60,12" stroke="rgba(0, 89, 80, 0.25)" strokeWidth="2" fill="none" />
          <path d="M22,95 Q95,95 95,22" stroke="rgba(226, 155, 56, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="35" cy="35" r="18" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" />
          <circle cx="110" cy="25" r="5" fill="rgba(226, 155, 56, 0.4)" />
          <circle cx="25" cy="110" r="5" fill="rgba(226, 155, 56, 0.4)" />
        </svg>
      </div>

      {/* Bottom Right Corner Flourish Print */}
      <div className="corner-ornament corner-br" aria-hidden="true">
        <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150,150 L0,150 C40,110 110,40 150,0 Z" fill="rgba(0, 89, 80, 0.05)" />
          <path d="M138,90 Q90,90 90,138" stroke="rgba(0, 89, 80, 0.25)" strokeWidth="2" fill="none" />
          <path d="M128,55 Q55,55 55,128" stroke="rgba(226, 155, 56, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="115" cy="115" r="18" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" />
          <circle cx="40" cy="125" r="5" fill="rgba(226, 155, 56, 0.4)" />
          <circle cx="125" cy="40" r="5" fill="rgba(226, 155, 56, 0.4)" />
        </svg>
      </div>

      <div className="container carousel-container-relative">
        <div className="carousel-section-header text-center">
          <span className="badge-pill mb-2">Signature Specialties</span>
          <h2 className="section-title">Pure Dairy Selections</h2>
          <TitleFlourish />
          <p className="section-lead">
            Freshly prepared and delivered daily to your home in Karachi.
          </p>
        </div>

        <div className="carousel-wrapper">
          {/* Main Slide Card with soft elevation */}
          <div className="carousel-slide-box">
            <div className="carousel-slide">
              {/* Left Column: Image with 24px border radius & 3/4 aspect ratio */}
              <div className="carousel-image-container">
                <div className="image-frame">
                  <div className="product-ribbon">100% PURE</div>
                  <img
                    src={current.image}
                    alt={current.title}
                    className="carousel-item-image"
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="carousel-content-container">
                <span className="carousel-item-sub">{current.subtitle}</span>
                <h3 className="carousel-item-title">{current.title}</h3>
                <p className="carousel-item-desc">{current.content}</p>

                <div className="carousel-item-cta">
                  <a
                    href={currentWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="et_pb_button whatsapp-product-btn"
                  >
                    <MessageCircle size={18} />
                    <span>{current.buttonText}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Buttons & Pagination */}
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-btn prev"
              onClick={handlePrev}
              aria-label="Previous product"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="carousel-dots">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`dot-bullet ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to product ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-btn next"
              onClick={handleNext}
              aria-label="Next product"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .decorated-carousel-section {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(247, 244, 236, 0.92) 100%),
                      url('/images/cows-pasture.png') center/cover no-repeat;
          padding: 6.5rem 0;
          overflow: hidden;
        }
        .corner-ornament {
          position: absolute;
          width: 150px;
          height: 150px;
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
        .carousel-container-relative {
          position: relative;
          z-index: 2;
        }
        .carousel-wrapper {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
        }
        .carousel-slide-box {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid var(--color-border);
          border-radius: calc(var(--radius-card) + 8px);
          padding: 3rem 3.5rem;
          box-shadow: var(--shadow-lg);
        }
        .carousel-slide {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4rem;
          align-items: center;
          min-height: 480px;
          animation: fadeIn 0.4s ease;
        }
        .carousel-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .carousel-section-header {
          max-width: 650px;
          margin: 0 auto 3rem;
          text-align: center;
        }
        .carousel-section-header .section-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 3.5vw, 3rem);
          color: var(--color-primary);
          margin-bottom: 0.3rem;
        }
        .carousel-section-header .section-lead {
          font-size: 1.15rem;
          color: var(--color-text-muted);
        }
        .image-frame {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 3/4;
          border-radius: var(--radius-card);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 4px solid #ffffff;
        }
        .product-ribbon {
          position: absolute;
          top: 16px;
          left: 16px;
          background: var(--color-accent);
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          z-index: 3;
        }
        .carousel-item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform var(--transition-base);
        }
        .carousel-item-image:hover {
          transform: scale(1.03);
        }
        .carousel-content-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .carousel-item-sub {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.6rem;
        }
        .carousel-item-title {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 3.5vw, 3.2rem);
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .carousel-item-desc {
          font-size: 1.2rem;
          line-height: 1.7;
          color: var(--color-text);
          margin-bottom: 2rem;
        }
        .carousel-item-cta {
          margin-top: 0.5rem;
        }
        .whatsapp-product-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: #25D366;
          border-color: #25D366;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
          font-size: 15px;
          padding: 0.85rem 2rem;
        }
        .whatsapp-product-btn:hover {
          background-color: #1eb956;
          border-color: #1eb956;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.4);
        }

        /* Controls */
        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }
        .carousel-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid var(--color-border);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
          cursor: pointer;
        }
        .carousel-btn:hover {
          background-color: var(--color-primary);
          color: #ffffff;
          transform: scale(1.08);
        }
        .carousel-dots {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .dot-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #d1d5db;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .dot-bullet.active {
          background-color: var(--color-primary);
          width: 32px;
          border-radius: 6px;
        }
        @media (max-width: 900px) {
          .carousel-slide-box {
            padding: 2rem 1.5rem;
          }
          .carousel-slide {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .image-frame {
            max-width: 340px;
          }
        }
      `}</style>
    </section>
  );
}
