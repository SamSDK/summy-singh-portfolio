import { render, screen } from '@testing-library/react'
import App from './App.jsx'
import content from './data/content.js'

test('renders all six sections in order', () => {
  render(<App />)
  const headings = screen.getAllByRole('heading').filter((h) => h.tagName === 'H2').map((h) => h.textContent)
  expect(headings).toEqual([
    content.sectionTitles.whoAmI,
    content.sectionTitles.services,
    content.sectionTitles.portfolio,
    content.sectionTitles.testimonials,
    content.contact.heading,
  ])
  expect(screen.getByRole('heading', { level: 1, name: content.hero.name })).toBeInTheDocument()
})
