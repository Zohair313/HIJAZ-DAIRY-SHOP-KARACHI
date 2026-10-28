import React from 'react';

export default function EventsBanner() {
  return (
    <section id="farm-events" className="et_pb_section et_pb_section_5">
      <div className="container events-container">
        <h2 className="events-title">
          Join us on the farm for fun events the whole family will enjoy.
        </h2>

        <p className="events-desc">
          From calf feedings and catering to group tours and our ice cream store,
          there’s always something exciting to do!
        </p>

        <div className="events-cta">
          <a href="#events" className="et_pb_button">
            View Events
          </a>
        </div>
      </div>

      <style>{`
        .et_pb_section_5 {
          background-color: var(--color-cream);
          padding: 6rem 0;
          text-align: center;
        }
        .events-container {
          max-width: 840px;
          margin: 0 auto;
        }
        .events-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 3.6vw, 3.2rem);
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }
        .events-desc {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--color-text);
          margin-bottom: 2.2rem;
        }
        .events-cta {
          margin-top: 1rem;
        }
      `}</style>
    </section>
  );
}
