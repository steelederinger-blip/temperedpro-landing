// src/components/landing/LandingFooter.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { LANDING_CONFIG } from './landingConfig';
import wordmark from '../../assets/wordmark-footer.png';

export default function LandingFooter() {
  return (
    <footer className="tp-footer">
      <div className="tp-container">
        <div className="tp-footer-grid">
          <div>
            <img
              src={wordmark}
              alt="TemperedPro"
              className="tp-footer-brand-img"
            />
            <p className="tp-footer-blurb">
              Simulation-based study tools for serious certification candidates.
            </p>
          </div>

          <div className="tp-footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#tools">Tools</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#roadmap">Coming Soon</a></li>
              <li><Link to={LANDING_CONFIG.loginPath}>Sign In</Link></li>
            </ul>
          </div>

          <div className="tp-footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href={`mailto:${LANDING_CONFIG.supportEmail}`}>
                  Support
                </a>
              </li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="tp-footer-bottom">
          <div className="tp-footer-copy">
            © {LANDING_CONFIG.copyrightYear} {LANDING_CONFIG.legalName}. All
            rights reserved.
          </div>
          <div className="tp-footer-disclaimer">
            PMP and PMBOK are registered marks of the Project Management
            Institute, Inc. TemperedPro is an independent study platform and
            is not affiliated with, endorsed by, or sponsored by PMI.
          </div>
        </div>
      </div>
    </footer>
  );
}
