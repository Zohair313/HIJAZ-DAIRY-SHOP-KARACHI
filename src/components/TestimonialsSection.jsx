import React from 'react';
import { Star, Quote } from 'lucide-react';
import TitleFlourish from './TitleFlourish';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Tariq Mehmood',
      location: 'PECHS, Karachi',
      review: 'Hijaz Dairy Shop’s Pure Desi Ghee has that rich traditional aroma and genuine danedar granular texture that is almost impossible to find in Karachi today. Pure perfection!',
      rating: 5,
      date: 'Verified Customer'
    },
    {
      name: 'Dr. Samina & Family',
      location: 'Clifton, Karachi',
      review: 'Their fresh white butter (desi makhan) and soft paneer are always super fresh and delicious. My kids love their pure milk. WhatsApp ordering is smooth and fast.',
      rating: 5,
      date: 'Regular Buyer'
    },
    {
      name: 'Farhan Khan',
      location: 'Gulshan-e-Iqbal, Karachi',
      review: '100% pure thick yogurt (dahi) and unadulterated milk. You can taste the genuine quality from the first bite. Highest recommendation for anyone wanting clean dairy.',
      rating: 5,
      date: 'Satisfied Client'
    }
  ];

  return (
    <section className="et_pb_section testimonials-section">
      {/* Corner Prints */}
      <div className="corner-ornament corner-tl" aria-hidden="true">
        <svg viewBox="0 0 140 140" fill="none">
          <path d="M0,0 L140,0 C100,40 40,100 0,140 Z" fill="rgba(226, 155, 56, 0.06)" />
          <path d="M10,50 Q50,50 50,10" stroke="rgba(226, 155, 56, 0.3)" strokeWidth="2" fill="none" />
          <circle cx="30" cy="30" r="16" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="corner-ornament corner-br" aria-hidden="true">
        <svg viewBox="0 0 140 140" fill="none">
          <path d="M140,140 L0,140 C40,100 100,40 140,0 Z" fill="rgba(226, 155, 56, 0.06)" />
          <path d="M130,90 Q90,90 90,130" stroke="rgba(226, 155, 56, 0.3)" strokeWidth="2" fill="none" />
          <circle cx="110" cy="110" r="16" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container testimonials-container">
        <div className="text-center mb-5">
          <div className="overall-rating-badge">
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="star-filled" />
              ))}
            </div>
            <span>Rated <strong>4.5 ★</strong> out of 5 based on <strong>49+ verified reviews</strong></span>
          </div>

          <h2 className="testimonials-title">What Our Customers in Karachi Say</h2>
          <TitleFlourish />
          <p className="testimonials-subtitle">
            Generations of trust and pure dairy goodness delivered directly to homes across Karachi.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((item, idx) => (
            <div key={idx} className="review-card">
              <div className="quote-icon-wrap">
                <Quote size={28} className="quote-icon" />
              </div>

              <div className="card-stars">
                {[...Array(item.rating)].map((_, s) => (
                  <Star key={s} size={15} className="star-filled" />
                ))}
              </div>

              <p className="review-text">"{item.review}"</p>

              <div className="review-author">
                <div className="author-avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-loc">{item.location} • {item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          position: relative;
          background: linear-gradient(135deg, rgba(254, 252, 248, 0.95) 0%, rgba(247, 244, 236, 0.93) 100%),
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
        .corner-tl { top: 0; left: 0; }
        .corner-br { bottom: 0; right: 0; }
        .testimonials-container {
          position: relative;
          z-index: 2;
        }
        .text-center {
          text-align: center;
        }
        .mb-5 {
          margin-bottom: 3.5rem;
        }
        .overall-rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffffff;
          padding: 0.4rem 1.25rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          font-size: 0.92rem;
          color: var(--color-primary);
          margin-bottom: 1.2rem;
        }
        .stars-row {
          display: flex;
          gap: 0.2rem;
        }
        .star-filled {
          color: var(--color-accent);
          fill: var(--color-accent);
        }
        .testimonials-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }
        .testimonials-subtitle {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          max-width: 650px;
          margin: 0 auto;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.2rem;
        }
        .review-card {
          position: relative;
          background: #ffffff;
          border-radius: var(--radius-card);
          padding: 2.5rem 2rem;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: all var(--transition-base);
        }
        .review-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-accent);
        }
        .quote-icon-wrap {
          margin-bottom: 1rem;
        }
        .quote-icon {
          color: var(--color-accent);
          opacity: 0.4;
        }
        .card-stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }
        .review-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--color-text);
          margin-bottom: 1.8rem;
          flex-grow: 1;
          font-style: italic;
        }
        .review-author {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          border-top: 1px solid rgba(0, 89, 80, 0.08);
          padding-top: 1.2rem;
        }
        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2px solid var(--color-accent);
        }
        .author-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-primary);
          margin: 0;
        }
        .author-loc {
          font-size: 0.82rem;
          color: var(--color-text-muted);
        }
        @media (max-width: 992px) {
          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}
