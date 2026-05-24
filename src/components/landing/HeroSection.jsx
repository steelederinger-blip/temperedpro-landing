// src/components/landing/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { LANDING_CONFIG } from './landingConfig';
import logoHero from '../../assets/logo-hero.png';

export default function HeroSection() {
  const handleExploreClick = (e) => {
    e.preventDefault();
    document
      .getElementById('tools')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="tp-hero" id="hero">
      <div className="tp-hero-bg" aria-hidden="true" />
      <div className="tp-container tp-hero-inner">
        <div className="tp-hero-content">
          <div className="tp-hero-platform">
            <span className="tp-hero-platform-dot" aria-hidden="true" />
            Available now: PMP · More credentials in development
          </div>

          <h1>
            Practice like the exam <span className="tp-flame">is real.</span>
          </h1>

          <p className="tp-hero-sub">
            TemperedPro provides simulation-based study tools for serious
            professionals preparing for high-stakes certification exams.
          </p>

          <div className="tp-hero-ctas">
            <Link
              to={LANDING_CONFIG.signupPath}
              className="tp-btn tp-btn-primary tp-btn-large"
            >
              Start 3-Day Free Trial
            </Link>
            <a
              href="#tools"
              className="tp-btn tp-btn-secondary tp-btn-large"
              onClick={handleExploreClick}
            >
              Explore PMP Tools
            </a>
          </div>

          <p className="tp-hero-meta">
            <span className="tp-hero-meta-dot" aria-hidden="true" />
            No charge for 3 days · Cancel anytime
          </p>
        </div>

        <div className="tp-hero-visual">
          <img
            src={logoHero}
            alt="TemperedPro shield logo with the tagline: Resilience through prepared knowledge"
            className="tp-hero-logo"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
