// src/components/landing/landingConfig.js
// Single source of truth for landing page links and copy bits.
// Edit these to match your existing app routes — the components import from here.

export const LANDING_CONFIG = {
  // Auth routes live on the app subdomain.
  signupPath:  'https://app.temperedpro.com/signup',
  loginPath:   'https://app.temperedpro.com/login',
  appPath:     'https://app.temperedpro.com',

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
