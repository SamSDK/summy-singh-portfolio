# Summy Singh — Personal UGC Creator Brand Site

**Date:** 2026-08-09
**Status:** Approved for planning

## Purpose

A single-page personal brand website for Summy Singh, positioned as a UGC (user-generated content) creator, modeled structurally on ugcbyniki.com. Primary goal is booking UGC/content clients (brands); secondary goal is growing personal audience/following.

## Reference

https://www.ugcbyniki.com/ — single-page portfolio: hero with name/tagline/CTAs, "Who Am I" personality bullet list, testimonials, contact.

## Sections (page order)

1. **Hero** — name badge ("SUMMY SINGH"), tagline ("Premium UGC Creator"), hero photo, two CTAs: "Email Me" and "Book a Call"
2. **Who Am I** — bullet list mixing professional traits (e.g. "UGC Creator") with personal/lifestyle traits (e.g. "Coffee First", "Chicago Based"). Ships with placeholder bullets, clearly marked for the user to replace with real details.
3. **Services** — glass cards listing content types offered (e.g. UGC videos, photo sets, testimonials/reviews). Placeholder copy.
4. **Portfolio/Gallery** — photo grid of content samples, using hotlinked stock/placeholder imagery (e.g. Unsplash), swappable later.
5. **Testimonials** — 1–2 placeholder client quotes in glass cards, structured like real testimonials so swapping in real ones is a data edit.
6. **Contact/CTA** — closing call-to-action, email + booking link (mirrors Hero CTAs).

No routing — single scrollable page, matching the reference site.

## Visual Direction: "Warm & Airy" Glassmorphism

Selected via visual brainstorming companion from three options (Warm & Airy / Moody & Bold / Quiet & Editorial).

- **Background:** warm mesh gradient — radial blends of peach, sky-blue, and gold over a warm off-white base (`#f5f1eb`)
- **Cards:** frosted glass — `backdrop-filter: blur(16px) saturate(160%)`, semi-transparent white fill (`rgba(255,255,255,0.55)`), soft white border, warm-toned drop shadow
- **Text:** dark warm-neutral (`#1c1a17`), not pure black
- **Type:** editorial scale — large hero name/tagline, uppercase small-caps labels for tags/pills, generous line-height on body copy
- **Spacing:** generous whitespace between sections, cards breathe rather than tile tightly

Reference mockup: `.superpowers/brainstorm/8188-1786329582/content/visual-style.html` (option A).

## Tech Stack

- **React + Vite** (per user preference, not the static-HTML pattern used by Desker-Site)
- **Plain CSS** (no Tailwind) — glass effects and custom gradients are easier to hand-tune without a utility-class layer fighting them
- **No backend** — all content is static, hardcoded in a data layer (see below)
- **No CMS** for v1 — can be added later without restructuring components, since content is already isolated from markup

## Project Structure

```
Summy-Singh-Portfolio/
  src/
    components/
      Hero.jsx
      WhoAmI.jsx
      Services.jsx
      Portfolio.jsx
      Testimonials.jsx
      Contact.jsx
    data/
      content.js       # all placeholder/real copy, image URLs, testimonials
    App.jsx             # composes sections in order
    index.css           # global styles: gradient background, glass card class, type scale
  index.html
  vite.config.js
  docs/superpowers/specs/   # this file
```

**Data/component separation:** every piece of user-editable content (personality bullets, services list, testimonial quotes, image URLs, CTA links) lives in `src/data/content.js`, imported by components. Components contain no hardcoded copy. This means swapping placeholder content for real content later is a data-file edit, not a code change — no risk of breaking layout while updating text.

**Placeholder marking:** `src/data/content.js` uses a leading comment block per section (`// PLACEHOLDER — replace with real ...`) so it's unambiguous what's real vs. filler when the user opens the file.

## Deployment

GitHub Pages, matching the [Desker-Site](C:\Users\Sam\Claude\Projects\Desker-Site) pattern:
- `vite.config.js` sets `base` for the Pages subpath
- Build output (`dist/`) published via `gh-pages` branch or a GitHub Actions workflow

Repo creation and first push are out of scope for the initial implementation — the project will be fully buildable and previewable locally first; deployment wiring happens once the user is ready to go live.

## Out of Scope (v1)

- Real photos/video (stock placeholders only, swappable via `content.js`)
- Real personality/services/testimonial copy (placeholders only)
- CMS integration
- Contact form backend (CTAs link to `mailto:` and an external booking link placeholder, no form submission handling)
- Custom domain setup

## Testing / Verification

No business logic to unit test — this is a static content site. Verification is:
- `npm run build` succeeds with no errors
- Dev server preview: all sections render, glass/gradient effects visible, responsive at mobile/tablet/desktop widths, no console errors
- Visual check against the approved "Warm & Airy" mockup direction
