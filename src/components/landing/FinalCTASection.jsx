// src/components/landing/FinalCTASection.jsx
import React from 'react';
import { LANDING_CONFIG } from './landingConfig';

export default function FinalCTASection() {
  return (
    <section className="tp-final-cta" id="get-started">
      <div className="tp-container tp-final-cta-inner">
        <h2>
          Start building exam <span className="tp-flame">readiness</span> today.
        </h2>
        <p>
          Three days at no charge. Full access to the PMP suite. Cancel
          anytime before day four if it isn&apos;t right for you.
        </p>

        <a
          href={LANDING_CONFIG.signupPath}
          className="tp-btn tp-btn-primary tp-btn-large"
        >
          Start 3-Day Free Trial
        </a>

        <p className="tp-final-cta-meta">
          Card required · Cancel anytime · No long-term commitment
        </p>
      </div>
    </section>
  );
}
