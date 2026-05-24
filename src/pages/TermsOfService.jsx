// src/pages/TermsOfService.jsx
import React, { useEffect } from 'react';

import LandingNavbar  from '../components/landing/LandingNavbar';
import LandingFooter  from '../components/landing/LandingFooter';
import { LANDING_CONFIG } from '../components/landing/landingConfig';

import '../styles/landing.css';

export default function TermsOfService() {
  useEffect(() => {
    document.title = `Terms of Service | ${LANDING_CONFIG.brandName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tp-landing">
      <LandingNavbar />
      <main className="tp-policy">
        <div className="tp-container tp-policy-inner">
          <h1>Terms of Service</h1>
          <div className="tp-policy-meta">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}
          </div>

          <div className="tp-policy-callout">
            This is a starter terms of service template. Before public
            launch, have it reviewed by a qualified attorney to ensure it
            properly addresses your specific business model, jurisdiction,
            and risk profile.
          </div>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the certification study services provided
            by {LANDING_CONFIG.legalName} (&quot;TemperedPro&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree
            to be bound by these Terms of Service. If you do not agree to
            these terms, do not use the Service.
          </p>

          <h2>2. The Service</h2>
          <p>
            TemperedPro provides web-based study tools for professional
            certification exam preparation. The Service is provided on a
            subscription basis. Features and content may change over time.
          </p>

          <h2>3. Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activity that occurs under your
            account. You must provide accurate information when creating
            an account and notify us immediately of any unauthorized
            access.
          </p>

          <h2>4. Subscriptions and Billing</h2>
          <p>
            Subscriptions are billed monthly in advance through our payment
            processor, Stripe. By starting a subscription, you authorize
            recurring charges to your payment method.
          </p>
          <ul>
            <li>
              <strong>Free trial:</strong> New users receive a 3-day free
              trial. A valid payment method is required at signup. If you
              do not cancel before the trial ends, your subscription will
              automatically convert to a paid monthly subscription at the
              listed price.
            </li>
            <li>
              <strong>Cancellation:</strong> You may cancel your
              subscription at any time. Cancellation takes effect at the
              end of your current billing period; you retain access until
              that date.
            </li>
            <li>
              <strong>Refunds:</strong> We do not generally offer refunds
              for partial subscription periods. Contact us if you believe
              you have been charged in error.
            </li>
          </ul>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Share your account credentials with others or allow multiple
              users to access a single account.
            </li>
            <li>
              Reproduce, distribute, sell, or sublicense any content from
              the Service.
            </li>
            <li>
              Use automated tools to scrape or extract content from the
              Service.
            </li>
            <li>
              Reverse engineer, decompile, or attempt to extract source
              code from the Service.
            </li>
            <li>
              Use the Service for any unlawful purpose or in violation of
              applicable laws or regulations.
            </li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            All content provided through the Service — including questions,
            scenarios, explanations, and software — is the property of
            TemperedPro or its licensors and is protected by copyright and
            other intellectual property laws. Your subscription grants you
            a limited, non-exclusive, non-transferable license to use the
            Service for personal study purposes only.
          </p>

          <h2>7. No Pass Guarantee</h2>
          <p>
            TemperedPro is a study aid. We do not guarantee that use of the
            Service will result in passing any certification exam. Exam
            outcomes depend on many factors outside our control.
          </p>

          <h2>8. Third-Party Marks</h2>
          <p>
            PMP, PMBOK, and other certification names mentioned on the
            Service are registered marks of their respective owners,
            including the Project Management Institute, Inc. TemperedPro
            is an independent study platform and is not affiliated with,
            endorsed by, or sponsored by these organizations.
          </p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, either express
            or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, TemperedPro shall not
            be liable for any indirect, incidental, special, consequential,
            or punitive damages arising out of or related to your use of
            the Service. Our total liability for any claim related to the
            Service is limited to the amount you paid us in the twelve
            months preceding the claim.
          </p>

          <h2>11. Termination</h2>
          <p>
            We may suspend or terminate your access to the Service at any
            time for violation of these Terms or for any other reason at
            our discretion. You may terminate your account at any time by
            cancelling your subscription and contacting us to delete your
            data.
          </p>

          <h2>12. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Material changes
            will be posted on this page with an updated effective date.
            Continued use of the Service after changes take effect
            constitutes acceptance of the revised Terms.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Ohio,
            United States, without regard to its conflict of law
            provisions.
          </p>

          <h2>14. Contact</h2>
          <p>
            Questions about these Terms can be sent to{' '}
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
