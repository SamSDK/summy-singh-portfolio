# Summy Singh Personal Brand Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page React + Vite personal brand site for Summy Singh (UGC creator), with a "Warm & Airy" glassmorphism visual system, ready for GitHub Pages deployment.

**Architecture:** A single-page app with no routing. Six presentational section components (Hero, WhoAmI, Services, Portfolio, Testimonials, Contact) are composed in `App.jsx` in a fixed order. All copy, links, and image URLs live in one data file (`src/data/content.js`), imported by components — components contain no hardcoded copy. Global visual system (gradient background, glass card class, type scale) lives in `src/index.css` as CSS custom properties + utility classes shared across components.

**Tech Stack:** React 18, Vite 5, Vitest + @testing-library/react for component tests, plain CSS (no Tailwind), gh-pages for deployment.

## Global Constraints

- No Tailwind or CSS-in-JS — plain CSS only, per spec ("glass effects and custom gradients are easier to hand-tune without a utility-class layer")
- No CMS, no backend, no contact form submission handling — CTAs are `mailto:` links and a booking-link placeholder
- All user-editable copy/images isolated in `src/data/content.js`, never hardcoded in components
- Placeholder content in `content.js` must be marked with a `// PLACEHOLDER —` comment per section
- Visual system: background `#f5f1eb` base with peach/sky-blue/gold radial gradients; glass cards `rgba(255,255,255,0.55)` fill, `blur(16px) saturate(160%)`, text color `#1c1a17` — exact values from the approved mockup (spec section "Visual Direction")
- `vite.config.js` must set `base: '/summy-singh-portfolio/'` for GitHub Pages compatibility from the start (Task 1), not deferred

---

### Task 1: Project scaffold and global visual system

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/setupTests.js`
- Create: `src/App.jsx`
- Create: `src/index.css`
- Test: `src/App.test.jsx`

**Interfaces:**
- Produces: `.glass-card`, `.pill`, `.btn`, `.section`, `.section-title` CSS classes (used by every component task below); CSS custom properties `--color-bg-base`, `--color-text`, `--color-glass-fill`, `--color-glass-border`, `--color-pill-fill`, `--shadow-glass`, `--radius-card`

- [ ] **Step 1: Write the failing test**

```jsx
// src/App.test.jsx
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

test('renders without crashing', () => {
  render(<App />)
  expect(screen.getByText(/Summy Singh Portfolio/i)).toBeInTheDocument()
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL — no `package.json`/dependencies exist yet, command errors out (`npm test` not found or module resolution failure). This confirms there is nothing already passing.

- [ ] **Step 3: Write the scaffold files**

```json
// package.json
{
  "name": "summy-singh-portfolio",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.0",
    "gh-pages": "^6.1.1",
    "jsdom": "^25.0.0",
    "vite": "^5.4.0",
    "vitest": "^2.0.5"
  }
}
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/summy-singh-portfolio/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    globals: true,
  },
})
```

```html
<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Summy Singh — Premium UGC Creator</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

```jsx
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

```js
// src/setupTests.js
import '@testing-library/jest-dom'
```

```jsx
// src/App.jsx
export default function App() {
  return <div className="app">Summy Singh Portfolio</div>
}
```

```css
/* src/index.css */
:root {
  --color-bg-base: #f5f1eb;
  --color-text: #1c1a17;
  --color-glass-fill: rgba(255, 255, 255, 0.55);
  --color-glass-border: rgba(255, 255, 255, 0.7);
  --color-pill-fill: rgba(28, 26, 23, 0.08);
  --shadow-glass: 0 8px 32px rgba(31, 25, 17, 0.12);
  --radius-card: 16px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background:
    radial-gradient(circle at 20% 20%, #ffd9c9 0%, transparent 45%),
    radial-gradient(circle at 80% 30%, #c9e7ff 0%, transparent 50%),
    radial-gradient(circle at 50% 90%, #ffe8b0 0%, transparent 55%),
    var(--color-bg-base);
  background-attachment: fixed;
  color: var(--color-text);
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

.glass-card {
  background: var(--color-glass-fill);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-glass);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  padding: 24px;
}

.pill {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: var(--color-pill-fill);
  color: var(--color-text);
  margin: 4px 6px 4px 0;
}

.section {
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 24px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 999px;
  border: 1px solid var(--color-glass-border);
  background: var(--color-glass-fill);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: var(--color-text);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .section {
    padding: 56px 16px;
  }
}
```

- [ ] **Step 4: Install dependencies and run test to verify it passes**

Run: `npm install && npm test`
Expected: PASS — `renders without crashing` succeeds.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vite.config.js index.html src/main.jsx src/setupTests.js src/App.jsx src/App.test.jsx src/index.css
git commit -m "chore: scaffold Vite React project with warm/airy glass CSS system"
```

---

### Task 2: Content data layer

**Files:**
- Create: `src/data/content.js`
- Test: `src/data/content.test.js`

**Interfaces:**
- Produces: default export `content` object with shape:
  ```
  {
    hero: { name, tagline, photoUrl, photoAlt, emailHref, bookingHref },
    whoAmI: string[],                       // personality bullets
    services: { title, description }[],
    portfolio: { src, alt }[],
    testimonials: { quote, author, role }[],
    contact: { heading, subheading, emailHref, bookingHref }
  }
  ```
  This exact shape is consumed by every component task (3–8) below.

- [ ] **Step 1: Write the failing test**

```jsx
// src/data/content.test.js
import content from './content.js'

test('content has all six sections with expected shape', () => {
  expect(content.hero.name).toBe('SUMMY SINGH')
  expect(content.hero.emailHref).toMatch(/^mailto:/)
  expect(content.whoAmI.length).toBeGreaterThanOrEqual(5)
  expect(content.services).toHaveLength(3)
  expect(content.portfolio).toHaveLength(6)
  expect(content.testimonials).toHaveLength(2)
  expect(content.contact.heading).toBeTruthy()
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- content.test`
Expected: FAIL — `src/data/content.js` does not exist yet (module not found).

- [ ] **Step 3: Write the content data**

```js
// src/data/content.js

// PLACEHOLDER — replace with Summy's real hero photo and booking link
const hero = {
  name: 'SUMMY SINGH',
  tagline: 'Premium UGC Creator',
  photoUrl: 'https://picsum.photos/seed/summy-hero/900/1100',
  photoAlt: 'Summy Singh',
  emailHref: 'mailto:hello@summysingh.com',
  bookingHref: 'https://cal.com/summysingh',
}

// PLACEHOLDER — replace with Summy's real personality/professional bullets
const whoAmI = [
  'UGC Creator',
  'Coffee First',
  'Content Strategist',
  'Frequent Traveller',
  'Chicago Based',
  'Gen Z Creative',
]

// PLACEHOLDER — replace with real service offerings and descriptions
const services = [
  {
    title: 'UGC Video Content',
    description:
      'Scroll-stopping short-form videos scripted and shot for your brand — ready to post or run as ads.',
  },
  {
    title: 'Photo Sets',
    description:
      'Editorial and lifestyle photo sets tailored to your product, styled and shot on-brand.',
  },
  {
    title: 'Testimonials & Reviews',
    description:
      'Authentic on-camera testimonials that build trust and convert, delivered fast.',
  },
]

// PLACEHOLDER — replace with real portfolio images once available
const portfolio = [
  { src: 'https://picsum.photos/seed/summy-portfolio-1/600/750', alt: 'Portfolio sample 1' },
  { src: 'https://picsum.photos/seed/summy-portfolio-2/600/750', alt: 'Portfolio sample 2' },
  { src: 'https://picsum.photos/seed/summy-portfolio-3/600/750', alt: 'Portfolio sample 3' },
  { src: 'https://picsum.photos/seed/summy-portfolio-4/600/750', alt: 'Portfolio sample 4' },
  { src: 'https://picsum.photos/seed/summy-portfolio-5/600/750', alt: 'Portfolio sample 5' },
  { src: 'https://picsum.photos/seed/summy-portfolio-6/600/750', alt: 'Portfolio sample 6' },
]

// PLACEHOLDER — replace with real client testimonials
const testimonials = [
  {
    quote:
      'Working with Summy was seamless from brief to delivery. The content performed better than anything we shot in-house.',
    author: 'Jamie Rivera',
    role: 'Marketing Lead, Bloom Skincare',
  },
  {
    quote:
      'Fast turnaround, creative ideas, and always on-brand. We keep coming back for every launch.',
    author: 'Alex Chen',
    role: 'Founder, Northline Coffee',
  },
]

// PLACEHOLDER — replace booking link with Summy's real scheduling link
const contact = {
  heading: "Let's create something",
  subheading: 'Have a brand in mind? Reach out and let’s talk content.',
  emailHref: hero.emailHref,
  bookingHref: hero.bookingHref,
}

const content = { hero, whoAmI, services, portfolio, testimonials, contact }

export default content
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- content.test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/data/content.js src/data/content.test.js
git commit -m "feat: add placeholder content data layer"
```

---

### Task 3: Hero component

**Files:**
- Create: `src/components/Hero.jsx`
- Test: `src/components/Hero.test.jsx`

**Interfaces:**
- Consumes: `content.hero` from Task 2 (`{ name, tagline, photoUrl, photoAlt, emailHref, bookingHref }`)
- Produces: default export `Hero` component, no props (reads `content` directly) — same pattern followed by Tasks 4–8

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/Hero.test.jsx
import { render, screen } from '@testing-library/react'
import Hero from './Hero.jsx'

test('renders name, tagline, photo, and both CTAs', () => {
  render(<Hero />)
  expect(screen.getByText('SUMMY SINGH')).toBeInTheDocument()
  expect(screen.getByText('Premium UGC Creator')).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Summy Singh' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /email me/i })).toHaveAttribute(
    'href',
    'mailto:hello@summysingh.com',
  )
  expect(screen.getByRole('link', { name: /book a call/i })).toHaveAttribute(
    'href',
    'https://cal.com/summysingh',
  )
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Hero.test`
Expected: FAIL — `src/components/Hero.jsx` does not exist.

- [ ] **Step 3: Write the component**

```jsx
// src/components/Hero.jsx
import content from '../data/content.js'

export default function Hero() {
  const { name, tagline, photoUrl, photoAlt, emailHref, bookingHref } = content.hero

  return (
    <section className="section hero">
      <div className="hero-name">{name}</div>
      <div className="glass-card hero-card">
        <img className="hero-photo" src={photoUrl} alt={photoAlt} />
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-ctas">
          <a className="btn" href={emailHref}>
            Email Me
          </a>
          <a className="btn" href={bookingHref} target="_blank" rel="noreferrer">
            Book a Call
          </a>
        </div>
      </div>
    </section>
  )
}
```

Add supporting styles to `src/index.css` (append):

```css
.hero {
  text-align: center;
  padding-top: 48px;
}

.hero-name {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.hero-card {
  max-width: 420px;
  margin: 0 auto;
}

.hero-photo {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  aspect-ratio: 4 / 5;
  margin-bottom: 16px;
}

.hero-tagline {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

.hero-ctas {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- Hero.test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.jsx src/components/Hero.test.jsx src/index.css
git commit -m "feat: add Hero component"
```

---

### Task 4: WhoAmI component

**Files:**
- Create: `src/components/WhoAmI.jsx`
- Test: `src/components/WhoAmI.test.jsx`

**Interfaces:**
- Consumes: `content.whoAmI` (`string[]`) from Task 2
- Produces: default export `WhoAmI` component

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/WhoAmI.test.jsx
import { render, screen } from '@testing-library/react'
import WhoAmI from './WhoAmI.jsx'
import content from '../data/content.js'

test('renders section title and every bullet as a pill', () => {
  render(<WhoAmI />)
  expect(screen.getByRole('heading', { name: /who am i/i })).toBeInTheDocument()
  content.whoAmI.forEach((bullet) => {
    expect(screen.getByText(bullet)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- WhoAmI.test`
Expected: FAIL — `src/components/WhoAmI.jsx` does not exist.

- [ ] **Step 3: Write the component**

```jsx
// src/components/WhoAmI.jsx
import content from '../data/content.js'

export default function WhoAmI() {
  return (
    <section className="section who-am-i">
      <h2 className="section-title">Who Am I</h2>
      <div className="glass-card who-am-i-card">
        {content.whoAmI.map((bullet) => (
          <span className="pill" key={bullet}>
            {bullet}
          </span>
        ))}
      </div>
    </section>
  )
}
```

Add supporting styles to `src/index.css` (append):

```css
.who-am-i-card {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- WhoAmI.test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/WhoAmI.jsx src/components/WhoAmI.test.jsx src/index.css
git commit -m "feat: add WhoAmI component"
```

---

### Task 5: Services component

**Files:**
- Create: `src/components/Services.jsx`
- Test: `src/components/Services.test.jsx`

**Interfaces:**
- Consumes: `content.services` (`{ title, description }[]`) from Task 2
- Produces: default export `Services` component

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/Services.test.jsx
import { render, screen } from '@testing-library/react'
import Services from './Services.jsx'
import content from '../data/content.js'

test('renders one card per service with title and description', () => {
  render(<Services />)
  content.services.forEach((service) => {
    expect(screen.getByText(service.title)).toBeInTheDocument()
    expect(screen.getByText(service.description)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Services.test`
Expected: FAIL — `src/components/Services.jsx` does not exist.

- [ ] **Step 3: Write the component**

```jsx
// src/components/Services.jsx
import content from '../data/content.js'

export default function Services() {
  return (
    <section className="section services">
      <h2 className="section-title">Services</h2>
      <div className="services-grid">
        {content.services.map((service) => (
          <div className="glass-card service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

Add supporting styles to `src/index.css` (append):

```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.service-card h3 {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- Services.test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Services.jsx src/components/Services.test.jsx src/index.css
git commit -m "feat: add Services component"
```

---

### Task 6: Portfolio component

**Files:**
- Create: `src/components/Portfolio.jsx`
- Test: `src/components/Portfolio.test.jsx`

**Interfaces:**
- Consumes: `content.portfolio` (`{ src, alt }[]`) from Task 2
- Produces: default export `Portfolio` component

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/Portfolio.test.jsx
import { render, screen } from '@testing-library/react'
import Portfolio from './Portfolio.jsx'
import content from '../data/content.js'

test('renders one image per portfolio item', () => {
  render(<Portfolio />)
  content.portfolio.forEach((item) => {
    const img = screen.getByRole('img', { name: item.alt })
    expect(img).toHaveAttribute('src', item.src)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Portfolio.test`
Expected: FAIL — `src/components/Portfolio.jsx` does not exist.

- [ ] **Step 3: Write the component**

```jsx
// src/components/Portfolio.jsx
import content from '../data/content.js'

export default function Portfolio() {
  return (
    <section className="section portfolio">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        {content.portfolio.map((item) => (
          <img
            className="portfolio-image"
            key={item.src}
            src={item.src}
            alt={item.alt}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
```

Add supporting styles to `src/index.css` (append):

```css
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.portfolio-image {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-glass);
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- Portfolio.test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Portfolio.jsx src/components/Portfolio.test.jsx src/index.css
git commit -m "feat: add Portfolio component"
```

---

### Task 7: Testimonials component

**Files:**
- Create: `src/components/Testimonials.jsx`
- Test: `src/components/Testimonials.test.jsx`

**Interfaces:**
- Consumes: `content.testimonials` (`{ quote, author, role }[]`) from Task 2
- Produces: default export `Testimonials` component

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/Testimonials.test.jsx
import { render, screen } from '@testing-library/react'
import Testimonials from './Testimonials.jsx'
import content from '../data/content.js'

test('renders each quote with its author and role', () => {
  render(<Testimonials />)
  content.testimonials.forEach((t) => {
    expect(screen.getByText(`"${t.quote}"`)).toBeInTheDocument()
    expect(screen.getByText(`${t.author}, ${t.role}`)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Testimonials.test`
Expected: FAIL — `src/components/Testimonials.jsx` does not exist.

- [ ] **Step 3: Write the component**

```jsx
// src/components/Testimonials.jsx
import content from '../data/content.js'

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-grid">
        {content.testimonials.map((t) => (
          <div className="glass-card testimonial-card" key={t.author}>
            <p className="testimonial-quote">&quot;{t.quote}&quot;</p>
            <p className="testimonial-author">
              {t.author}, {t.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

Add supporting styles to `src/index.css` (append):

```css
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.testimonial-quote {
  margin-bottom: 12px;
  font-style: italic;
}

.testimonial-author {
  font-weight: 600;
  font-size: 14px;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- Testimonials.test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Testimonials.jsx src/components/Testimonials.test.jsx src/index.css
git commit -m "feat: add Testimonials component"
```

---

### Task 8: Contact component

**Files:**
- Create: `src/components/Contact.jsx`
- Test: `src/components/Contact.test.jsx`

**Interfaces:**
- Consumes: `content.contact` (`{ heading, subheading, emailHref, bookingHref }`) from Task 2
- Produces: default export `Contact` component

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/Contact.test.jsx
import { render, screen } from '@testing-library/react'
import Contact from './Contact.jsx'
import content from '../data/content.js'

test('renders heading, subheading, and both CTA links', () => {
  render(<Contact />)
  expect(screen.getByRole('heading', { name: content.contact.heading })).toBeInTheDocument()
  expect(screen.getByText(content.contact.subheading)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /email me/i })).toHaveAttribute(
    'href',
    content.contact.emailHref,
  )
  expect(screen.getByRole('link', { name: /book a call/i })).toHaveAttribute(
    'href',
    content.contact.bookingHref,
  )
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Contact.test`
Expected: FAIL — `src/components/Contact.jsx` does not exist.

- [ ] **Step 3: Write the component**

```jsx
// src/components/Contact.jsx
import content from '../data/content.js'

export default function Contact() {
  const { heading, subheading, emailHref, bookingHref } = content.contact

  return (
    <section className="section contact">
      <div className="glass-card contact-card">
        <h2>{heading}</h2>
        <p className="contact-subheading">{subheading}</p>
        <div className="hero-ctas">
          <a className="btn" href={emailHref}>
            Email Me
          </a>
          <a className="btn" href={bookingHref} target="_blank" rel="noreferrer">
            Book a Call
          </a>
        </div>
      </div>
    </section>
  )
}
```

Add supporting styles to `src/index.css` (append):

```css
.contact-card {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}

.contact-subheading {
  margin: 12px 0 20px;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- Contact.test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Contact.jsx src/components/Contact.test.jsx src/index.css
git commit -m "feat: add Contact component"
```

---

### Task 9: Compose App and verify full page

**Files:**
- Modify: `src/App.jsx` (replace placeholder from Task 1)
- Modify: `src/App.test.jsx` (replace placeholder test from Task 1)

**Interfaces:**
- Consumes: `Hero`, `WhoAmI`, `Services`, `Portfolio`, `Testimonials`, `Contact` default exports from Tasks 3–8
- Produces: default export `App` — the full assembled page, in section order per spec (Hero → WhoAmI → Services → Portfolio → Testimonials → Contact)

- [ ] **Step 1: Write the failing test**

```jsx
// src/App.test.jsx (replaces Task 1's placeholder test)
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

test('renders all six sections in order', () => {
  render(<App />)
  const headings = screen.getAllByRole('heading').map((h) => h.textContent)
  expect(headings).toEqual([
    'Who Am I',
    'Services',
    'Portfolio',
    'Testimonials',
    "Let's create something",
  ])
  expect(screen.getByText('SUMMY SINGH')).toBeInTheDocument()
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- App.test`
Expected: FAIL — current `App.jsx` only renders the Task 1 placeholder div, so no headings exist yet.

- [ ] **Step 3: Rewrite App.jsx**

```jsx
// src/App.jsx
import Hero from './components/Hero.jsx'
import WhoAmI from './components/WhoAmI.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <main>
      <Hero />
      <WhoAmI />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS — all test files (App + every component + content) pass.

- [ ] **Step 5: Manual visual check**

Run: `npm run dev`, open the printed local URL in a browser.
Verify: gradient background visible, all six sections render top to bottom in order, glass cards show blur/transparency, CTAs are clickable, layout doesn't break at mobile width (~375px) or desktop width (~1280px). Stop the dev server when done (Ctrl+C).

- [ ] **Step 6: Commit**

```bash
git add src/App.jsx src/App.test.jsx
git commit -m "feat: compose full page from all sections"
```

---

### Task 10: GitHub Pages deploy prep and README

**Files:**
- Create: `README.md`
- Verify: `vite.config.js` (already sets `base: '/summy-singh-portfolio/'` from Task 1 — no change needed)

**Interfaces:**
- None — this task adds documentation and a verified production build; no new code interfaces.

- [ ] **Step 1: Write the production build check**

Run: `npm run build`
Expected: succeeds, creates `dist/index.html` and `dist/assets/`. Confirm `dist/index.html` references asset paths under `/summy-singh-portfolio/assets/...` (grep the file for that prefix) — this proves the `base` config from Task 1 took effect.

- [ ] **Step 2: Write the README**

```markdown
# Summy Singh — Personal Brand Site

Single-page UGC creator portfolio built with React + Vite.

## Development

\`\`\`bash
npm install
npm run dev
\`\`\`

## Testing

\`\`\`bash
npm test
\`\`\`

## Content

All copy, links, and images are in `src/data/content.js`, marked with
`// PLACEHOLDER —` comments. Replace those values with real content —
no other files need to change.

## Deploy to GitHub Pages

1. Push this repo to GitHub as `summy-singh-portfolio` (or update the
   `base` path in `vite.config.js` to match your repo name).
2. Run:

\`\`\`bash
npm run deploy
\`\`\`

This builds the site and publishes `dist/` to the `gh-pages` branch via
the `gh-pages` package. Enable GitHub Pages on that branch in the repo
settings.
```

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add README with deploy instructions"
```

---

## Self-Review Notes

- **Spec coverage:** Hero, Who Am I, Services, Portfolio, Testimonials, Contact all covered (Tasks 3–9); Warm & Airy visual system covered (Task 1 CSS, matches spec's exact color/blur values); data/component separation with placeholder marking covered (Task 2); GitHub Pages deploy covered (Task 1 `base` config + Task 10 `gh-pages` script/README); no CMS/backend/form-handling — none added, consistent with spec's Out of Scope.
- **Placeholder scan:** no TBD/TODO markers left in code steps; every step has real, runnable code.
- **Type/shape consistency:** `content.js`'s shape (Task 2) matches exactly what every component destructures in Tasks 3–8; `App.test.jsx` heading list in Task 9 matches the literal `section-title`/heading text used in each component.
