// src/components/landing/RoadmapSection.jsx
import React from 'react';

const COMING = ['CIH', 'CSP', 'CHP'];

export default function RoadmapSection() {
  return (
    <section className="tp-section" id="roadmap" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="tp-container">
        <div className="tp-roadmap">
          <div className="tp-roadmap-inner">
            <div className="tp-roadmap-text">
              <h3>More credentials in development.</h3>
              <p>
                The same simulation-first approach, applied to additional
                certifications.
              </p>
            </div>
            <div className="tp-roadmap-creds">
              {COMING.map((c) => (
                <div className="tp-roadmap-cred" key={c}>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
