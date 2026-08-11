// PLACEHOLDER — replace with Summy's real hero footage, poster frame and booking link.
//
// videoUrl: leave empty until real footage exists. The hero renders the poster (or a
// plain cream field) when it's empty, so the layout is correct either way — dropping a
// file path or URL in here is the only change needed to go live.
// The footage is expected to be mostly off-white, which is why the hero uses dark type
// and a *lightening* scrim rather than the usual dark overlay.
const hero = {
  name: 'SUMMY SINGH',
  tagline: 'Premium UGC Creator',
  descriptor:
    'Short-form content that actually converts — scripted, shot and delivered for brands that need to move fast.',
  videoUrl: '',
  posterUrl: '',
  videoAlt: 'Summy Singh on camera',
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

// PLACEHOLDER — copy is unresearched; `details` replaced the template's phone column with
// Instagram, since creators get hired through DMs and there's no business number here.
// The `\n` in `heading` is a deliberate line break, rendered via `white-space: pre-line`
// so the break point is controlled rather than left to text wrapping. Keeping it one
// string also keeps the heading a single node for accessibility and tests.
const contact = {
  eyebrow: "That's all for now.",
  heading: 'Got a brand to grow?\nLet’s talk',
  circleLabel: 'Get in touch',
  details: [
    { label: 'Email', value: 'hello@summysingh.com', href: hero.emailHref },
    { label: 'Instagram', value: '@summysingh', href: 'https://instagram.com/summysingh' },
  ],
  emailHref: hero.emailHref,
  bookingHref: hero.bookingHref,
}

// PLACEHOLDER — the stretched-letter wordmark is the reference template's personality.
// Swap `wordmark` to 'Summy Singh' for a straighter, more premium read.
const footer = {
  tagline: 'let’s make something worth watching',
  wordmark: 'Summyyyyy',
  backToTopLabel: 'Back to top',
}

// Section headings shown above each section — not user-facing "content" in the
// personality-bullet sense, but still copy, so it lives here rather than in JSX.
const sectionTitles = {
  whoAmI: 'Who Am I',
  services: 'Services',
  portfolio: 'Portfolio',
  testimonials: 'Testimonials',
}

// Labels for the two CTA buttons used in both the hero and contact sections.
const ctaLabels = {
  email: 'Email Me',
  booking: 'Book a Call',
}

const content = {
  hero,
  whoAmI,
  services,
  portfolio,
  testimonials,
  contact,
  footer,
  sectionTitles,
  ctaLabels,
}

export default content
