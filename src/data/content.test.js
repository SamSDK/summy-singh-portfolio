import content from './content.js'

test('content has all sections with expected shape', () => {
  expect(content.hero.name).toBeTruthy()
  expect(content.hero.tagline).toBeTruthy()
  expect(content.hero.descriptor).toBeTruthy()
  expect(content.hero.videoAlt).toBeTruthy()
  expect(content.hero.emailHref).toMatch(/^mailto:/)
  expect(content.hero.bookingHref).toBeTruthy()
  expect(content.hero).toHaveProperty('videoUrl')
  expect(content.hero).toHaveProperty('posterUrl')

  expect(content.stats.length).toBeGreaterThan(0)
  expect(content.stats.every((s) => s.value && s.label)).toBe(true)

  expect(content.clients.names.length).toBeGreaterThan(0)
  expect(content.clients.names.every(Boolean)).toBe(true)
  expect(content.clients.tail).toBeTruthy()

  expect(content.whoAmI.length).toBeGreaterThan(0)
  expect(content.whoAmI.every(Boolean)).toBe(true)

  expect(content.about.body).toBeTruthy()

  expect(content.services.length).toBeGreaterThan(0)
  expect(content.services.every((s) => s.title && s.description)).toBe(true)

  expect(content.portfolio.categories.length).toBeGreaterThan(0)
  content.portfolio.categories.forEach((category) => {
    expect(category.name).toBeTruthy()
    expect(category.items.length).toBeGreaterThan(0)
    expect(category.items.every((i) => i.src && i.alt && i.tag)).toBe(true)
  })

  expect(content.testimonials.length).toBeGreaterThan(0)
  expect(content.testimonials.every((t) => t.quote && t.author && t.role)).toBe(true)

  expect(content.reviews.ratingLine).toBeTruthy()
  expect(content.reviews.socialLine).toBeTruthy()

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

  expect(content.sectionTitles.clients).toBeTruthy()
  expect(content.sectionTitles.portfolio).toBeTruthy()
  expect(content.sectionTitles.about).toBeTruthy()
  expect(content.sectionTitles.reviews).toBeTruthy()
  expect(content.sectionTitles.offer).toBeTruthy()

  expect(content.ctaLabels.email).toBeTruthy()
  expect(content.ctaLabels.booking).toBeTruthy()
  expect(content.ctaLabels.workWithMe).toBeTruthy()
})

test('portfolio item keys are unique within the whole portfolio', () => {
  const srcs = content.portfolio.categories.flatMap((c) => c.items.map((i) => i.src))
  expect(new Set(srcs).size).toBe(srcs.length)
})
