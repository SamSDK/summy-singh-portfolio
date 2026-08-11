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

// PLACEHOLDER — invented proof points; replace with Summy's real numbers before
// promoting the site. Deliberately avoids revenue/ROAS-style performance claims,
// which would be fabricated results if invented.
const stats = [
  { value: '100+', label: 'videos delivered' },
  { value: '20+', label: 'brand partners' },
  { value: '48h', label: 'average turnaround' },
]

// aria-label for the stats bar's <section>. Kept as a top-level key (rather than
// nested under `stats`, which stays a plain array — see Stats.test.jsx /
// content.test.js) so it can be sourced from content.js like Hero's videoAlt and
// Footer's backToTopLabel.
const statsLabel = 'Key stats'

// PLACEHOLDER — invented brand names, deliberately NOT real companies. Do not list
// real brands here until Summy has actually worked with them.
const clients = {
  names: [
    'Bloom Skincare',
    'Northline Coffee',
    'Fern & Field',
    'Solstice Wellness',
    'Harbor Kitchen',
    'Petal & Stem',
    'Cloudloaf Bakery',
    'Juniper Tech',
    'Golden Hour Café',
    'Marlowe Home',
    'Verde Activewear',
    'Lumen Labs',
  ],
  tail: '& more',
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

// PLACEHOLDER — replace with Summy's real bio.
const about = {
  body:
    "I'm Summy — a UGC creator focused on short-form content that feels native to the feed and still sells. I script, shoot and edit trend-aware videos and photo sets for brands, with fast turnarounds and a sharp eye for what actually converts. When I'm not filming, I'm studying what's working on Instagram and TikTok so my clients never chase last month's format.",
}

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

// PLACEHOLDER — portfolio samples grouped by niche, each tagged with its content
// format. All 9:16 vertical thumbnails. Replace srcs with real work per category.
const portfolio = {
  categories: [
    {
      name: 'Beauty',
      items: [
        { src: 'https://picsum.photos/seed/summy-beauty-1/360/640', alt: 'Beauty sample 1', tag: 'Review' },
        { src: 'https://picsum.photos/seed/summy-beauty-2/360/640', alt: 'Beauty sample 2', tag: 'GRWM' },
        { src: 'https://picsum.photos/seed/summy-beauty-3/360/640', alt: 'Beauty sample 3', tag: 'Trend' },
        { src: 'https://picsum.photos/seed/summy-beauty-4/360/640', alt: 'Beauty sample 4', tag: 'Tutorial' },
        { src: 'https://picsum.photos/seed/summy-beauty-5/360/640', alt: 'Beauty sample 5', tag: 'Unboxing' },
        { src: 'https://picsum.photos/seed/summy-beauty-6/360/640', alt: 'Beauty sample 6', tag: 'Testimonial' },
        { src: 'https://picsum.photos/seed/summy-beauty-7/360/640', alt: 'Beauty sample 7', tag: 'ASMR' },
        { src: 'https://picsum.photos/seed/summy-beauty-8/360/640', alt: 'Beauty sample 8', tag: 'Haul' },
        { src: 'https://picsum.photos/seed/summy-beauty-9/360/640', alt: 'Beauty sample 9', tag: 'Lifestyle' },
      ],
    },
    {
      name: 'Food & Beverage',
      items: [
        { src: 'https://picsum.photos/seed/summy-food-1/360/640', alt: 'Food and beverage sample 1', tag: 'Taste Test' },
        { src: 'https://picsum.photos/seed/summy-food-2/360/640', alt: 'Food and beverage sample 2', tag: 'Lifestyle' },
        { src: 'https://picsum.photos/seed/summy-food-3/360/640', alt: 'Food and beverage sample 3', tag: 'Demonstration' },
        { src: 'https://picsum.photos/seed/summy-food-4/360/640', alt: 'Food and beverage sample 4', tag: 'Trend' },
        { src: 'https://picsum.photos/seed/summy-food-5/360/640', alt: 'Food and beverage sample 5', tag: 'Recipe' },
        { src: 'https://picsum.photos/seed/summy-food-6/360/640', alt: 'Food and beverage sample 6', tag: 'Talk to Camera' },
        { src: 'https://picsum.photos/seed/summy-food-7/360/640', alt: 'Food and beverage sample 7', tag: 'Unboxing' },
        { src: 'https://picsum.photos/seed/summy-food-8/360/640', alt: 'Food and beverage sample 8', tag: 'Testimonial' },
        { src: 'https://picsum.photos/seed/summy-food-9/360/640', alt: 'Food and beverage sample 9', tag: 'Holiday' },
      ],
    },
    {
      name: 'Lifestyle',
      items: [
        { src: 'https://picsum.photos/seed/summy-life-1/360/640', alt: 'Lifestyle sample 1', tag: 'Unboxing' },
        { src: 'https://picsum.photos/seed/summy-life-2/360/640', alt: 'Lifestyle sample 2', tag: 'Testimonial' },
        { src: 'https://picsum.photos/seed/summy-life-3/360/640', alt: 'Lifestyle sample 3', tag: 'Trend' },
        { src: 'https://picsum.photos/seed/summy-life-4/360/640', alt: 'Lifestyle sample 4', tag: 'Street Style' },
        { src: 'https://picsum.photos/seed/summy-life-5/360/640', alt: 'Lifestyle sample 5', tag: 'Aesthetic' },
        { src: 'https://picsum.photos/seed/summy-life-6/360/640', alt: 'Lifestyle sample 6', tag: 'Vlog' },
        { src: 'https://picsum.photos/seed/summy-life-7/360/640', alt: 'Lifestyle sample 7', tag: 'Haul' },
        { src: 'https://picsum.photos/seed/summy-life-8/360/640', alt: 'Lifestyle sample 8', tag: 'GRWM' },
        { src: 'https://picsum.photos/seed/summy-life-9/360/640', alt: 'Lifestyle sample 9', tag: 'Demonstration' },
      ],
    },
    {
      name: 'Tech & Wellness',
      items: [
        { src: 'https://picsum.photos/seed/summy-tech-1/360/640', alt: 'Tech and wellness sample 1', tag: 'Demonstration' },
        { src: 'https://picsum.photos/seed/summy-tech-2/360/640', alt: 'Tech and wellness sample 2', tag: 'Talk to Camera' },
        { src: 'https://picsum.photos/seed/summy-tech-3/360/640', alt: 'Tech and wellness sample 3', tag: 'Testimonial' },
        { src: 'https://picsum.photos/seed/summy-tech-4/360/640', alt: 'Tech and wellness sample 4', tag: 'Review' },
        { src: 'https://picsum.photos/seed/summy-tech-5/360/640', alt: 'Tech and wellness sample 5', tag: 'Unboxing' },
        { src: 'https://picsum.photos/seed/summy-tech-6/360/640', alt: 'Tech and wellness sample 6', tag: 'Trend' },
        { src: 'https://picsum.photos/seed/summy-tech-7/360/640', alt: 'Tech and wellness sample 7', tag: 'Educational' },
        { src: 'https://picsum.photos/seed/summy-tech-8/360/640', alt: 'Tech and wellness sample 8', tag: 'Lifestyle' },
        { src: 'https://picsum.photos/seed/summy-tech-9/360/640', alt: 'Tech and wellness sample 9', tag: 'ASMR' },
      ],
    },
  ],
}

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

// PLACEHOLDER — social proof lines under the reviews. Replace with real rating
// sources, handles and follower counts.
const reviews = {
  ratingLine: 'Rated 5 stars by early clients',
  socialLine: 'Instagram + TikTok',
}

// The \n in heading is a deliberate line break, rendered via white-space: pre-line
// so the break point is controlled rather than left to text wrapping. PLACEHOLDER —
// details replaced the template's phone column with Instagram, since creators get
// hired through DMs and there's no business number here.
const contact = {
  eyebrow: "That's all for now.",
  heading: "Got a brand to grow?\nLet's talk",
  circleLabel: 'Get in touch',
  details: [
    { label: 'Email', value: 'hello@summysingh.com', href: hero.emailHref },
    { label: 'Instagram', value: '@summysingh', href: 'https://instagram.com/summysingh' },
  ],
  emailHref: hero.emailHref,
  bookingHref: hero.bookingHref,
}

// PLACEHOLDER — the stretched-letter wordmark is the reference template's personality.
// Swap wordmark to 'Summy Singh' for a straighter, more premium read.
const footer = {
  tagline: "let's make something worth watching",
  wordmark: 'Summyyyyy',
  backToTopLabel: 'Back to top',
}

// Section headings shown above each section — not user-facing "content" in the
// personality-bullet sense, but still copy, so it lives here rather than in JSX.
const sectionTitles = {
  clients: "Brands I've Worked With",
  portfolio: 'Portfolio',
  about: 'About Me',
  reviews: 'Reviews',
  offer: 'What I Offer',
}

// Labels for CTA buttons.
const ctaLabels = {
  email: 'Email Me',
  booking: 'Book a Call',
  workWithMe: 'Work With Me',
}

const content = {
  hero,
  stats,
  statsLabel,
  clients,
  whoAmI,
  about,
  services,
  portfolio,
  testimonials,
  reviews,
  contact,
  footer,
  sectionTitles,
  ctaLabels,
}

export default content
