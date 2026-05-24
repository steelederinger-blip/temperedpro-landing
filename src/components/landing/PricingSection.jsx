// src/components/landing/PricingSection.jsx
import React from 'react';
import { LANDING_CONFIG } from './landingConfig';

const FEATURES = [
  'All four PMP study modes',
  '1,500+ practice questions across all domains',
  '180-question Full Exam Simulator',
  'Five scenario simulations (125 decisions)',
  '488-term Terms Matching Game',
  'Mobile-friendly — study anywhere',
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3.5 9.5l3.5 3.5 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section className="tp-section" id="pricing">
      <div className="tp-container">
        <div
          className="tp-section-header"
          style={{ textAlign: 'center', margin: '0 auto 56px' }}
        >
          <span className="tp-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="tp-section-num">§ 05</span> Pricing
          </span>
          <h2>One subscription, every PMP study mode.</h2>
          <p>
            Try the platform for three days at no charge. If it doesn&apos;t
            help you prepare, cancel before day four.
          </p>
        </div>

        <div className="tp-pricing-wrap">
          <div className="tp-price-card">
            <div className="tp-price-tier">PMP Access</div>

            <div className="tp-price-amount">
              <span className="price-num">$19</span>
              <span className="price-cents">.99</span>
            </div>
            <div className="tp-price-period">per month · cancel anytime</div>
            <div className="tp-price-other">
              Additional certifications and an all-access plan are in development.
            </div>

            <ul className="tp-price-features">
              {FEATURES.map((f) => (
                <li key={f}>
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={LANDING_CONFIG.signupPath}
              className="tp-btn tp-btn-primary tp-btn-large tp-price-cta"
            >
              Start 3-Day Free Trial
            </a>

            <p className="tp-price-disclosure">
              Card required at signup. Trial converts to paid subscription
              after 3 days unless cancelled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
