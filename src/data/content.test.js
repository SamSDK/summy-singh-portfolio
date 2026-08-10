import content from './content.js'

test('content has all six sections with expected shape', () => {
  expect(content.hero.name).toBeTruthy()
  expect(content.hero.tagline).toBeTruthy()
  expect(content.hero.emailHref).toMatch(/^mailto:/)
  expect(content.hero.bookingHref).toBeTruthy()

  expect(content.whoAmI.length).toBeGreaterThan(0)
  expect(content.whoAmI.every((bullet) => Boolean(bullet))).toBe(true)

  expect(content.services.length).toBeGreaterThan(0)
  expect(content.services.every((s) => s.title && s.description)).toBe(true)

  expect(content.portfolio.length).toBeGreaterThan(0)
  expect(content.portfolio.every((p) => p.src && p.alt)).toBe(true)

  expect(content.testimonials.length).toBeGreaterThan(0)
  expect(content.testimonials.every((t) => t.quote && t.author && t.role)).toBe(true)

  expect(content.contact.heading).toBeTruthy()
  expect(content.contact.subheading).toBeTruthy()
  expect(content.contact.emailHref).toMatch(/^mailto:/)
  expect(content.contact.bookingHref).toBeTruthy()

  expect(content.sectionTitles.whoAmI).toBeTruthy()
  expect(content.sectionTitles.services).toBeTruthy()
  expect(content.sectionTitles.portfolio).toBeTruthy()
  expect(content.sectionTitles.testimonials).toBeTruthy()

  expect(content.ctaLabels.email).toBeTruthy()
  expect(content.ctaLabels.booking).toBeTruthy()
})
