// src/pages/PrivacyPolicy.jsx
import React, { useEffect } from 'react';

import LandingNavbar  from '../components/landing/LandingNavbar';
import LandingFooter  from '../components/landing/LandingFooter';
import { LANDING_CONFIG } from '../components/landing/landingConfig';

import '../styles/landing.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = `Privacy Policy | ${LANDING_CONFIG.brandName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tp-landing">
      <LandingNavbar />
      <main className="tp-policy">
        <div className="tp-container tp-policy-inner">
          <h1>Privacy Policy</h1>
          <div className="tp-policy-meta">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}
          </div>

          <div className="tp-policy-callout">
            This is a starter privacy policy template. Before public launch,
            have it reviewed by a qualified attorney to ensure compliance
            with applicable laws in your jurisdiction (including GDPR if you
            serve EU customers, CCPA if you serve California residents, and
            general U.S. consumer protection requirements).
          </div>

          <h2>1. Introduction</h2>
          <p>
            {LANDING_CONFIG.legalName} (&quot;TemperedPro&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the
            certification study platform available at temperedpro.com and
            app.temperedpro.com (the &quot;Service&quot;). This Privacy
            Policy explains what information we collect, how we use it, and
            the choices you have regarding your information.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect the following categories of information:</p>
          <ul>
            <li>
              <strong>Account information</strong> — name, email address,
              and password when you create an account.
            </li>
            <li>
              <strong>Payment information</strong> — handled by our payment
              processor, Stripe. We do not store full credit card numbers
              on our servers.
            </li>
            <li>
              <strong>Usage data</strong> — questions answered, scores,
              study session length, and feature usage, used to provide and
              improve the Service.
            </li>
            <li>
              <strong>Device and log data</strong> — IP address, browser
              type, operating system, and approximate location, collected
              automatically when you use the Service.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service.</li>
            <li>Process payments and manage subscriptions.</li>
            <li>Send transactional emails about your account.</li>
            <li>
              Communicate with you about product updates and support
              requests.
            </li>
            <li>Detect, prevent, and address fraud or abuse.</li>
          </ul>

          <h2>4. How We Share Your Information</h2>
          <p>
            We do not sell your personal information. We share information
            only with service providers who help us operate the Service,
            including:
          </p>
          <ul>
            <li><strong>Stripe</strong> — for payment processing.</li>
            <li><strong>Supabase</strong> — for authentication and database hosting.</li>
            <li><strong>Netlify</strong> — for application hosting.</li>
          </ul>
          <p>
            We may also disclose information if required by law or to
            protect our rights, users, or the public.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your account information for as long as your account
            is active. You may request deletion of your account and
            associated data by emailing{' '}
            <a href={`mailto:${LANDING_CONFIG.supportEmail}`}>
              {LANDING_CONFIG.supportEmail}
            </a>.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access,
            correct, or delete your personal information, and to object to
            or restrict certain processing. Contact us at{' '}
            <a href={`mailto:${LANDING_CONFIG.supportEmail}`}>
              {LANDING_CONFIG.supportEmail}
            </a>{' '}
            to exercise these rights.
          </p>

          <h2>7. Security</h2>
          <p>
            We use industry-standard security practices to protect your
            information. No method of transmission or storage is completely
            secure, but we work to safeguard your data using encryption in
            transit and at rest where appropriate.
          </p>

          <h2>8. Children</h2>
          <p>
            The Service is not directed to children under 16 and we do not
            knowingly collect personal information from children under 16.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be posted on this page with an updated effective
            date.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about this Privacy Policy can be sent to{' '}
            <a href={`mailto:${LANDING_CONFIG.supportEmail}`}>
              {LANDING_CONFIG.supportEmail}
            </a>.
          </p>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
