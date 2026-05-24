# TemperedPro Landing Page — Integration Guide (v2)

This package adds a marketing landing page (plus Privacy Policy and Terms of
Service pages) to your existing `temperedpro-app` React project. It does
**not** touch your existing app code, auth flow, or Stripe integration.

---

## What changed in v2

- **Brand palette updated** to match the new shield logo: steel blue + flame orange (was navy + gold).
- **Typography updated** to Bricolage Grotesque (display) + IBM Plex Sans (body), more in line with the bolder brand identity.
- **Tagline integrated**: "Resilience through prepared knowledge" appears in the footer.
- **Logo image** included as a hero feature.
- **PMP positioning softened** so the page reads as "platform with PMP available today" rather than "PMP is the platform" — makes adding CIH/CSP/CHP later a content swap, not a redesign.

---

## Files in this package

```
src/
├── pages/
│   ├── LandingPage.jsx
│   ├── PrivacyPolicy.jsx
│   └── TermsOfService.jsx
├── components/landing/
│   ├── landingConfig.js       ← edit CTA destinations here
│   ├── LandingNavbar.jsx
│   ├── HeroSection.jsx
│   ├── TrustBar.jsx
│   ├── ToolsSection.jsx
│   ├── ExamSimulatorSection.jsx
│   ├── ScenarioSection.jsx
│   ├── HowItWorksSection.jsx
│   ├── PricingSection.jsx
│   ├── RoadmapSection.jsx
│   ├── FinalCTASection.jsx
│   └── LandingFooter.jsx
├── styles/
│   └── landing.css            ← all landing styles, namespaced under .tp-landing
└── assets/
    ├── logo.png               ← extracted logo (see "Logo file" note below)
    ├── logo-nav.png           ← small version
    ├── logo-hero.png          ← hero-sized version
    └── logo-original.jpg      ← original mockup, kept for reference
```

---

## Logo file — IMPORTANT

The logo you sent is a **rendered mockup** with a textured dark gray
background and concentric ripples around the shield. I extracted the shield
itself by color-keying the background, but a fair amount of grayscale
texture remains around the edges because the mockup's background is not
uniform.

**For the launch this works**, because the hero displays the logo on a
warm off-white that's similar enough to the shield's silver/blue palette
that the residual texture reads as a subtle drop-shadow rather than a
problem. The navbar and footer use a styled text wordmark
(`Tempered` in blue + `Pro` in orange) instead of the image, so the logo
quality issue doesn't appear there.

**For production, you should commission a clean version of this logo:**
- A vector SVG (best — scales infinitely, tiny file size)
- Or a transparent PNG of just the shield + wordmark (no mockup texture)

Once you have either, drop it in `src/assets/` and update the `import` in
`HeroSection.jsx`. Total job: 30 seconds.

---

## Step 1 — Drop the files in

Copy the `src/` folders from this package into your `temperedpro-app` repo's
`src/` directory. The structure mirrors the spec.

The CSS is **namespaced** under `.tp-landing` so it can't bleed into your
existing app styles.

---

## Step 2 — Add the routes

This package assumes you're using **react-router-dom** (v6+). If you're on
v5 or using a different router, adjust accordingly.

In your app's main router file (likely `src/App.jsx` or `src/main.jsx`),
add three new routes:

```jsx
import LandingPage      from './pages/LandingPage';
import PrivacyPolicy    from './pages/PrivacyPolicy';
import TermsOfService   from './pages/TermsOfService';

// inside your <Routes>:
<Route path="/"        element={<LandingPage />} />
<Route path="/privacy" element={<PrivacyPolicy />} />
<Route path="/terms"   element={<TermsOfService />} />

// keep your existing app routes (/quiz, /exam, /signup, /login, etc.) below
```

If `/` was previously routed to your app dashboard, move that to a different
path like `/app` — and update `LANDING_CONFIG.appPath` accordingly.

---

## Step 3 — Configure CTA destinations

Open `src/components/landing/landingConfig.js` and update the paths to
match your real signup, login, and dashboard routes:

```js
export const LANDING_CONFIG = {
  signupPath:   '/signup',     // ← your real signup route
  loginPath:    '/login',      // ← your real login route
  appPath:      '/app',        // ← your post-login destination
  supportEmail: 'support@temperedpro.com',
  ...
};
```

---

## Step 4 — Domain routing on Netlify

To make the landing page live at `temperedpro.com`:

1. **Point both domains at the same Netlify site.** In Netlify → Site
   settings → Domain management, add both `temperedpro.com` and
   `app.temperedpro.com` as custom domains.

2. **Update DNS at GoDaddy** to point `temperedpro.com` (the apex) at
   Netlify. Wix needs to be removed from this domain — keep DNS at GoDaddy,
   add Netlify's nameservers OR an A record pointing at Netlify's load
   balancer (Netlify will give you the exact records).

3. After DNS propagates, `temperedpro.com` will hit `LandingPage.jsx`.
   `app.temperedpro.com` will hit the same React app — users typing the
   subdomain still get routed by React Router based on the path.

If you'd prefer the subdomain to skip the landing entirely (e.g.,
`app.temperedpro.com/` goes straight to the dashboard), that's a redirect
rule in `netlify.toml` rather than a code change. Let me know if you want
that wired up.

---

## Step 5 — SPA fallback (if not already configured)

For React Router to handle `/privacy` and `/terms` correctly on direct
loads, your Netlify deploy needs an SPA fallback. If you don't already
have this, add a `public/_redirects` file with:

```
/*    /index.html   200
```

---

## Step 6 — Smoke test before deploy

```bash
npm run dev
```

Then open:

- `http://localhost:5173/`         → Landing page
- `http://localhost:5173/privacy`  → Privacy Policy
- `http://localhost:5173/terms`    → Terms of Service
- `http://localhost:5173/signup`   → your existing signup (CTA destination)

Click through every CTA. Check on a phone width (devtools responsive mode
at ~375px).

---

## App brand consistency

Your existing study app uses navy + gold theming. The landing page now
uses steel blue + orange to match the new shield logo. **These don't
match.**

Two options going forward:

1. **Keep them divergent for now.** Get the landing page live first; revisit
   the app theme in a later session. The handoff between
   `temperedpro.com` (new brand) and `app.temperedpro.com` (old theme)
   will feel a bit jarring but isn't blocking.

2. **Reskin the app to match.** A separate task — basically swapping the
   app's navy/gold CSS variables for the new steel-blue/orange ones. I
   can do this in a follow-up session whenever you're ready.

Recommend Option 1 for now: ship the landing page, get users, then
unify the brand once revenue is flowing.

---

## Things to know

### Fonts
Loads **Bricolage Grotesque** (display) and **IBM Plex Sans** (body) from
Google Fonts via `@import` at the top of `landing.css`. If you'd rather
self-host or use `<link>` tags in `index.html` for performance, move it
there and remove the import.

### CSS scoping
Every selector in `landing.css` is prefixed with `.tp-` and the whole tree
is wrapped in `<div className="tp-landing">`. It will not affect your app
pages.

### Mobile menu
The mobile hamburger currently scrolls to pricing as a placeholder. If you
want a real slide-out menu, that's a small additional change.

### Animation
Subtle staggered fade-up reveal in the hero. Respects
`prefers-reduced-motion`. No animation libraries.

### SEO
`<title>` and `<meta name="description">` are set via a `useEffect` hook in
`LandingPage.jsx` — no `react-helmet` dependency.

### Legal pages
Privacy Policy and Terms of Service include a **callout banner** advising
attorney review before launch. Stripe technically requires these to exist,
but you should have a lawyer look at them before taking real customer money.

---

## Pre-launch checklist

- [ ] Drop files into repo
- [ ] Add three routes to your router
- [ ] Update `landingConfig.js` paths to match your real routes
- [ ] Smoke test locally
- [ ] Add `_redirects` if not already there
- [ ] Push → Netlify auto-deploys
- [ ] Add `temperedpro.com` to Netlify custom domains
- [ ] Update GoDaddy DNS, remove Wix from this domain
- [ ] Cancel your Stripe test subscription
- [ ] Remove debug `console.log` lines from `stripe-webhook.js`
- [ ] Test the cancellation flow end to end
- [ ] (Optional) Wire up Stripe Customer Portal so users can self-cancel
- [ ] Have privacy/terms reviewed by an attorney
- [ ] (Recommended) Get a clean SVG/transparent PNG of the logo
- [ ] Launch

---

Questions or changes — let me know.
