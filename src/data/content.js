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
  subheading: "Have a brand in mind? Reach out and let's talk content.",
  emailHref: hero.emailHref,
  bookingHref: hero.bookingHref,
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

const content = { hero, whoAmI, services, portfolio, testimonials, contact, sectionTitles, ctaLabels }

export default content
