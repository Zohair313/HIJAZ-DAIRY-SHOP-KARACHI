import React from 'react';

export default function ValuePillars() {
  const pillars = [
    {
      title: 'Non-GMO',
      icon: '/images/badge-non-gmo.png',
      desc: '100% natural feeding, zero chemicals or artificial additives.'
    },
    {
      title: 'Grass-Fed',
      icon: '/images/badge-grass-fed.png',
      desc: 'Pasture-fed dairy producing wholesome nutrition and natural flavor.'
    },
    {
      title: 'Farmer-Owned',
      icon: '/images/badge-farmer-owned.png',
      desc: 'Independent, genuine family craftsmanship with traditional values.'
    }
  ];

  return (
    <section className="et_pb_section et_pb_section_3 decorated-pillars-section">
      {/* Top Right Corner Print */}
      <div className="corner-ornament corner-tr" aria-hidden="true">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140,0 L0,0 C40,40 100,100 140,140 Z" fill="rgba(226, 155, 56, 0.08)" />
          <path d="M130,50 Q90,50 90,10" stroke="rgba(226, 155, 56, 0.35)" strokeWidth="2" fill="none" />
          <path d="M122,80 Q60,80 60,18" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="110" cy="30" r="16" stroke="rgba(226, 155, 56, 0.3)" strokeWidth="1.5" />
          <circle cx="45" cy="22" r="5" fill="rgba(0, 89, 80, 0.25)" />
        </svg>
      </div>

      {/* Bottom Left Corner Print */}
      <div className="corner-ornament corner-bl" aria-hidden="true">
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,140 L140,140 C100,100 40,40 0,0 Z" fill="rgba(226, 155, 56, 0.08)" />
          <path d="M10,90 Q50,90 50,130" stroke="rgba(226, 155, 56, 0.35)" strokeWidth="2" fill="none" />
          <path d="M18,60 Q80,60 80,122" stroke="rgba(0, 89, 80, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="30" cy="110" r="16" stroke="rgba(226, 155, 56, 0.3)" strokeWidth="1.5" />
          <circle cx="95" cy="118" r="5" fill="rgba(0, 89, 80, 0.25)" />
        </svg>
      </div>

      <div className="container pillars-container">
        <div className="pillars-row">
          {pillars.map((p, idx) => (
            <div key={idx} className="pillar-item">
              <div className="pillar-card-box">
                <div className="pillar-icon-wrap">
                  <img src={p.icon} alt={`${p.title} icon`} className="pillar-icon" />
                </div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pillars-quote">
          <p>
            "Our wholesome products are created right here at Hijaz Dairy Shop,
            prepared fresh daily and delivered pure to your family’s table."
          </p>
        </div>
      </div>

      <style>{`
        .decorated-pillars-section {
          position: relative;
          padding: 6rem 0;
          background: linear-gradient(135deg, rgba(254, 252, 248, 0.94) 0%, rgba(247, 244, 236, 0.92) 100%),
                      url('/images/bg-events.jpg') center/cover no-repeat;
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
        .pillars-container {
          position: relative;
          z-index: 2;
        }
        .pillars-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }
        .pillar-card-box {
          background: #ffffff;
          border-radius: var(--radius-card);
          padding: 2.8rem 2rem;
          text-align: center;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-base);
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pillar-card-box:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary-light);
        }
        .pillar-icon-wrap {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .pillar-icon {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform var(--transition-base);
        }
        .pillar-card-box:hover .pillar-icon {
          transform: scale(1.08);
        }
        .pillar-title {
          font-family: var(--font-heading);
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }
        .pillar-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-text-muted);
          margin: 0;
        }
        .pillars-quote {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          background: #ffffff;
          padding: 2rem 2.5rem;
          border-radius: var(--radius-card);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .pillars-quote p {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-style: italic;
          color: var(--color-primary);
          line-height: 1.6;
          margin: 0;
        }
        @media (max-width: 768px) {
          .pillars-row {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .pillars-quote {
            padding: 1.5rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}
