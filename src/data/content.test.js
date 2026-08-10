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
