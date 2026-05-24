// src/components/landing/LandingNavbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LANDING_CONFIG } from './landingConfig';
import wordmark from '../../assets/wordmark-nav.png';

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnchor = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleMobileAnchor = (e, id) => {
    handleAnchor(e, id);
    setMenuOpen(false);
  };

  return (
    <nav className="tp-navbar" aria-label="Primary">
      <div className="tp-navbar-inner">
        <Link to="/" className="tp-logo" aria-label="TemperedPro home">
          <img
            src={wordmark}
            alt="TemperedPro"
            className="tp-logo-img"
          />
        </Link>

        {/* Desktop nav — unchanged */}
        <div className="tp-nav-links">
          <a
            href="#tools"
            className="tp-nav-link"
            onClick={(e) => handleAnchor(e, 'tools')}
          >
            Tools
          </a>
          <a
            href="#pricing"
            className="tp-nav-link"
            onClick={(e) => handleAnchor(e, 'pricing')}
          >
            Pricing
          </a>
          <a
            href="#roadmap"
            className="tp-nav-link"
            onClick={(e) => handleAnchor(e, 'roadmap')}
          >
            Coming Soon
          </a>
          <a href={LANDING_CONFIG.loginPath} className="tp-nav-link">
            Sign In
          </a>
        </div>

        <a
          href={LANDING_CONFIG.signupPath}
          className="tp-btn tp-btn-primary tp-nav-cta"
        >
          Start Free Trial
        </a>

        {/* Mobile toggle — now controls menu state */}
        <button
          className="tp-nav-mobile-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="tp-nav-mobile-menu" role="menu">
          <a
            href="#tools"
            className="tp-nav-mobile-link"
            role="menuitem"
            onClick={(e) => handleMobileAnchor(e, 'tools')}
          >
            Tools
          </a>
          <a
            href="#pricing"
            className="tp-nav-mobile-link"
            role="menuitem"
            onClick={(e) => handleMobileAnchor(e, 'pricing')}
          >
            Pricing
          </a>
          <a
            href="#roadmap"
            className="tp-nav-mobile-link"
            role="menuitem"
            onClick={(e) => handleMobileAnchor(e, 'roadmap')}
          >
            Coming Soon
          </a>
          <a
            href={LANDING_CONFIG.loginPath}
            className="tp-nav-mobile-link"
            role="menuitem"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </a>
          <a
            href={LANDING_CONFIG.signupPath}
            className="tp-btn tp-btn-primary tp-nav-mobile-cta"
            role="menuitem"
            onClick={() => setMenuOpen(false)}
          >
            Start Free Trial
          </a>
        </div>
      )}
    </nav>
  );
}
