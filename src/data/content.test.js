import content from './content.js'

test('content has all sections with expected shape', () => {
  expect(content.hero.name).toBeTruthy()
  expect(content.hero.tagline).toBeTruthy()
  expect(content.hero.descriptor).toBeTruthy()
  expect(content.hero.videoAlt).toBeTruthy()
  expect(content.hero.emailHref).toMatch(/^mailto:/)
  expect(content.hero.bookingHref).toBeTruthy()
  // videoUrl/posterUrl are intentionally allowed to be empty until real footage exists,
  // so assert the keys are present rather than truthy.
  expect(content.hero).toHaveProperty('videoUrl')
  expect(content.hero).toHaveProperty('posterUrl')

  expect(content.whoAmI.length).toBeGreaterThan(0)
  expect(content.whoAmI.every((bullet) => Boolean(bullet))).toBe(true)

  expect(content.services.length).toBeGreaterThan(0)
  expect(content.services.every((s) => s.title && s.description)).toBe(true)

  expect(content.portfolio.length).toBeGreaterThan(0)
  expect(content.portfolio.every((p) => p.src && p.alt)).toBe(true)

  expect(content.testimonials.length).toBeGreaterThan(0)
  expect(content.testimonials.every((t) => t.quote && t.author && t.role)).toBe(true)

  expect(content.contact.eyebrow).toBeTruthy()
  expect(content.contact.heading).toBeTruthy()
  expect(content.contact.circleLabel).toBeTruthy()
  expect(content.contact.details.length).toBeGreaterThan(0)
  expect(content.contact.details.every((d) => d.label && d.value && d.href)).toBe(true)
  expect(content.contact.emailHref).toMatch(/^mailto:/)
  expect(content.contact.bookingHref).toBeTruthy()

  expect(content.footer.tagline).toBeTruthy()
  expect(content.footer.wordmark).toBeTruthy()
  expect(content.footer.backToTopLabel).toBeTruthy()

  expect(content.sectionTitles.whoAmI).toBeTruthy()
  expect(content.sectionTitles.services).toBeTruthy()
  expect(content.sectionTitles.portfolio).toBeTruthy()
  expect(content.sectionTitles.testimonials).toBeTruthy()

  expect(content.ctaLabels.email).toBeTruthy()
  expect(content.ctaLabels.booking).toBeTruthy()
})
