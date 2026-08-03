# Executive Profile

A React + Vite + Tailwind rebuild of an executive personal site, in a "sleek dark
corporate" direction — ink-black background, brass accent, Fraunces/Inter/IBM Plex Mono
type system, and a fixed dossier-style sidebar nav.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    Layout.jsx        shared page shell
    Nav.jsx            fixed sidebar nav (collapses to a top bar on mobile)
    SectionMarker.jsx  the "ledger tick" section heading used on every page
  pages/
    Profile.jsx        home / hero
    Experience.jsx
    FocusAreas.jsx
    Advisory.jsx
    CaseStudies.jsx
    Impact.jsx
    Insights.jsx
    Contact.jsx        working form UI (currently just shows a confirmation state —
                        wire handleSubmit up to your email/form backend of choice)
```

## Customizing

- **Content:** every page currently has placeholder copy (name, roles, stats, case
  studies). Search each file in `src/pages/` and swap in your own.
- **Colors / fonts:** edit the `theme.extend` block in `tailwind.config.js`.
- **Nav / pages:** add or remove routes in `src/App.jsx` and `src/components/Nav.jsx`
  (the `links` array).
- **Contact form:** hook `handleSubmit` in `src/pages/Contact.jsx` up to a service like
  Formspree, Resend, or your own API.
