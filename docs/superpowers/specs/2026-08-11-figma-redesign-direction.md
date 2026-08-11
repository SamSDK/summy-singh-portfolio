# Summy Singh Site — Figma Redesign Direction

**Date:** 2026-08-11
**Status:** Design in progress (Figma), supersedes the "Warm & Airy" visual system in `2026-08-09-personal-brand-site-design.md`
**Figma working file:** https://www.figma.com/design/KeeZjNdTQl96uMajRFTpGn (Summy Singh — Site Design)
**Reference template:** https://www.figma.com/design/Cp2FzFU2Vwa60h5iObGweC (Ashwin dev portfolio — Home page only)
**Second reference (BLOCKED):** https://www.figma.com/site/EpcSi2VurUJOrxj2SOEupc (Minimalist Model Portfolio, Community file — no edit access, and a `/site/` URL which the Figma MCP does not support)

## What changed vs. the 2026-08-09 spec

The **structure** now comes from the Ashwin template; the **palette** returns to warm cream + glass.
Section order and the six-component architecture are unchanged. `content.js` is unchanged and still
the single source of copy. Only the presentation layer is being redesigned.

## Design tokens (live in the Figma file as the `Summy Tokens` collection)

### Colour — no pure white, no pure black anywhere

| Token | Value | Use |
|---|---|---|
| `color/bg/page` | `#F7F3EC` | Cream page background |
| `color/bg/inverse` | `#17140F` | Warm off-black (footer, primary CTA fill) |
| `color/bg/surface` | `#221D16` | Warm dark surface |
| `color/bg/muted` | `#EFE8DB` | Deeper cream |
| `color/text/primary` | `#1A1712` | Warm off-black type |
| `color/text/inverse` | `#F7F3EC` | Cream type on dark |
| `color/text/muted` | `#7C7267` | Warm grey |
| `color/accent` | `#C2643C` | Warm terracotta — currently unused, parked |
| `color/border/subtle` | `#E2D9C9` | Hairline rules |
| `color/glass/fill` | `#FFFFFF` @ 0.55 | Frosted surface on light |
| `color/glass/fill-dark` | `#FFFFFF` @ 0.12 | Frosted surface on dark |
| `color/glass/border` | `#FFFFFF` @ 0.70 | Glass edge on dark |
| `color/glass/border-dark` | `#1A1712` @ 0.18 | Glass edge on light — **not yet created, blocked by rate limit** |

### Type scale (designed at 1920px canvas width)

Single family: **Inter**. `IBM Plex Mono` Regular only for small tracked labels
(the `@ SUMMY SINGH` mark and the "That's all for now." eyebrow).
Note: Inter's style strings are `"Semi Bold"` / `"Extra Bold"` **with spaces**; DM Sans uses no spaces.

`type/display-xl` 300 · `type/display-l` 100 · `type/heading-xl` 77 · `type/heading-l` 40 ·
`type/heading-m` 30 · `type/body-l` 24 · `type/body-m` 20 · `type/body-s` 16

### Spacing & radius

`space/page-margin` 133 · `space/section-y` 100 · `space/gap-xs` 8 · `space/gap-s` 16 ·
`space/gap-m` 24 · `space/gap-l` 40 · `space/gap-xl` 66 · `radius/card` 16 · `radius/pill` 999

## Gradient mesh

Three radial-gradient ellipses behind the cream sections, each under a **140px layer blur** so they
bleed together rather than reading as discrete shapes. Colour stops run from peak alpha at position 0,
to 45% of peak at 0.55, to fully transparent at 1.

| Blob | Colour | Peak alpha | Size |
|---|---|---|---|
| Peach | `#FFD9C9` | 0.95 | 1000×1000 |
| Gold | `#FFE8B0` | 0.85 | 900×900 |
| Sky | `#C9E7FF` | 0.45 | 820×820 |

The sky blob is deliberately low-alpha — it keeps the mesh from going muddy-orange without
pulling the page cool.

## Glassmorphism

Figma's `BACKGROUND_BLUR` effect is the exact analogue of CSS `backdrop-filter: blur()`, so these
values port to code 1:1 with no reinterpretation.

- Frosted surfaces: `color/glass/fill` + `BACKGROUND_BLUR` radius 18–24 + 1–1.5px glass border
- Depth: `DROP_SHADOW` `#1A1712` @ 0.18, offset y 12, radius 32
- Glass surfaces should let background content show through — that refraction is the point

## Section-by-section

### Hero (900px tall)
Full-bleed **video** — autoplay / muted / loop, with a poster image. Not a cut-out; the template's
floating-subject treatment needs a cut-out photo, which video can't do without green screen.

**The footage is mostly off-white.** This inverts the hero from the template:

- Video placeholder should simulate off-white footage (`#E9E4DA`), not a dark rectangle
- Scrim **lightens** rather than darkens — cream `#F7F3EC` gradient, 0.60 at top → 0.12 at 40% → 0.88 at bottom.
  Purpose is protecting *dark* type from *dark patches* in the footage (hair, shadows, clothing)
- Headline, name mark and descriptor: `color/text/primary` (off-black)
- Primary CTA "Book a Call": solid `color/bg/inverse` fill + cream label
- Secondary CTA "Email Me": `color/glass/fill` + `BACKGROUND_BLUR` 18 + `color/glass/border-dark` + off-black label

**⚠️ This inversion is specified but NOT YET APPLIED in Figma** — the `use_figma` call hit the
Starter-plan tool-call limit and, being atomic, made no changes. The Figma file still shows the
old light-on-dark hero.

Headline is **contained, never clipped**. The template's headline is a horizontal marquee (which
clips by definition); that was explicitly rejected.

Empty vertical space between the top bar and headline is **load-bearing** — it's the subject zone
where the video subject sits. Verify against a real frame once footage exists; if the subject is
centred rather than lower-third, the headline will collide with them.

### Middle sections — BLOCKED
About / Services / Portfolio go between Hero and Contact. Direction depends on the second reference
template, which is inaccessible. These sections must resolve into the page's light/dark alternation
rather than introduce a third mood.

### Contact (634px tall)
Cream + gradient mesh. Mono eyebrow → 77px two-line headline → hairline divider → detail columns
(Email, Instagram) → circular CTA at 278px.

**DECIDED (2026-08-11): the circular CTA stays frosted glass.** Reviewed the concern that glass
recedes and reads as secondary for a primary "hire me" action; Summy chose glass anyway for the
look. Mitigation instead of replacement: heavier border and a darker, higher-contrast label so it
holds attention without losing the frosted treatment.

Phone was swapped for **Instagram** — creators get hired through DMs, and there's no business
number in `content.js`.

### Footer (565px tall)
Off-black band, cream type. Tagline at 77px, oversized wordmark at 300px, outlined back-to-top
circle (142px) with a hand-drawn vector arrow — no icon library needed.

**Wordmark needs `lineHeight: 130%`**, not 100%. At 300px the descenders on `y` extend below a
100%-lineHeight box and get sliced by `clipsContent`. Glyph extent ≠ box height. This is invisible
in node metadata and only catchable by screenshot.

## Copy written during design — all unresearched placeholder, needs Summy's review

| Slot | Template original | Current draft |
|---|---|---|
| Hero headline | *(marquee: "Creative Developer &…")* | "Premium UGC Creator" |
| Hero descriptor | *(dev boilerplate)* | "Short-form content that actually converts — scripted, shot and delivered for brands that need to move fast." |
| Contact eyebrow | "That's all for now." | unchanged |
| Contact headline | "Got a project in mind? / Let's talk" | "Got a brand to grow? / Let's talk" |
| Footer tagline | "your friendly chaos creator" | "let's make something worth watching" |
| Wordmark | "Ashhhhhhhh" | "Summyyyyy" |

**The wordmark is an open coin-flip.** The stretched-letter joke is the template's personality and
reads playful/unserious; a straight `SUMMY SINGH` at 300px may suit a *premium* positioning better.

## Constraints carried forward from the original spec

- Plain CSS only — no Tailwind, no CSS-in-JS. The template needs no utility layer.
- All copy, links and images stay isolated in `src/data/content.js`
- No CMS, no backend, no form submission handling
- React + Vite, GitHub Pages deploy, `base: '/summy-singh-portfolio/'`
- Tests are shape-based, so they survive a visual redesign

## Known blockers

1. **Figma MCP tool-call limit** reached on the Starter plan — no further Figma reads or writes
   until it resets or the plan is upgraded.
2. **Second reference template inaccessible** — Community file, no edit access, and `/site/` URLs
   are unsupported by the Figma MCP even after duplication.
3. **No hero footage yet** — building the video slot with a placeholder + poster.
