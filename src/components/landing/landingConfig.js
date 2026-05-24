// src/components/landing/landingConfig.js
// Single source of truth for landing page links and copy bits.
// Edit these to match your existing app routes — the components import from here.

export const LANDING_CONFIG = {
  // Existing app routes — adjust to match your real signup/login paths.
  // These are React Router paths (same React app).
  signupPath:  '/signup',
  loginPath:   '/login',
  appPath:     '/app', // wherever the post-login dashboard lives

  // External / informational
  supportEmail: 'support@temperedpro.com',

  // SEO
  pageTitle: 'TemperedPro | Professional Certification Study Tools',
  pageDescription:
    'Simulation-based study tools for professional certification exams, starting with PMP exam preparation.',

  // Brand
  brandName: 'TemperedPro',
  legalName: 'TemperedPro LLC',
  copyrightYear: new Date().getFullYear(),
};
