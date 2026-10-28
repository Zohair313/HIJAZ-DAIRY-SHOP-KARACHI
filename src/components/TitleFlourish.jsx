import React from 'react';

export default function TitleFlourish({ color = "var(--color-accent)" }) {
  return (
    <div className="title-flourish" aria-hidden="true">
      <span className="flourish-line"></span>
      <svg className="flourish-icon" width="28" height="18" viewBox="0 0 28 18" fill="none">
        <path d="M14 0L17.5 9L14 18L10.5 9L14 0Z" fill={color} />
        <circle cx="4" cy="9" r="2.5" fill={color} opacity="0.6" />
        <circle cx="24" cy="9" r="2.5" fill={color} opacity="0.6" />
      </svg>
      <span className="flourish-line"></span>

      <style>{`
        .title-flourish {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin: 0.8rem auto 1.6rem;
          max-width: 220px;
        }
        .flourish-line {
          flex: 1;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, ${color}, transparent);
        }
        .flourish-icon {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
