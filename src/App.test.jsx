import { render, screen } from '@testing-library/react'
import App from './App.jsx'
import content from './data/content.js'

test('renders all sections in order', () => {
  render(<App />)
  const headings = screen
    .getAllByRole('heading')
    .filter((h) => h.tagName === 'H2')
    .map((h) => h.textContent)
  expect(headings).toEqual([
    content.sectionTitles.clients,
    content.sectionTitles.portfolio,
    content.sectionTitles.about,
    content.sectionTitles.reviews,
    content.sectionTitles.offer,
    content.contact.heading,
  ])
  expect(screen.getByRole('heading', { level: 1, name: content.hero.name })).toBeInTheDocument()
})

test('renders the footer', () => {
  render(<App />)
  expect(screen.getByText(content.footer.wordmark)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: content.footer.backToTopLabel })).toBeInTheDocument()
})
