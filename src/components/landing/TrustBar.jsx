// src/components/landing/TrustBar.jsx
import React from 'react';

const STATS = [
  { num: '1,500', sup: '+', label: 'PMP practice questions' },
  { num: '180',   sup: 'Q', label: 'Full exam simulator' },
  { num: '5',     sup: '',  label: 'Project scenario simulations' },
  { num: '488',   sup: '',  label: 'PMP terms in the match bank' },
];

export default function TrustBar() {
  return (
    <section className="tp-trust-bar" aria-label="Product highlights">
      <div className="tp-container">
        <div className="tp-trust-grid">
          {STATS.map((s) => (
            <div className="tp-trust-item" key={s.label}>
              <div className="tp-trust-num">
                {s.num}
                {s.sup && <sup>{s.sup}</sup>}
              </div>
              <div className="tp-trust-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
