import { render, screen } from '@testing-library/react'
import Footer from './Footer.jsx'
import content from '../data/content.js'

test('renders the tagline, wordmark and a labelled back-to-top control', () => {
  render(<Footer />)
  expect(screen.getByText(content.footer.tagline)).toBeInTheDocument()
  expect(screen.getByText(content.footer.wordmark)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: content.footer.backToTopLabel })).toHaveAttribute(
    'href',
    '#top',
  )
})

test('does not introduce a competing section heading', () => {
  // The wordmark is decorative branding, not a section heading — promoting it to an
  // <h2> would pollute the page outline and break the section order assertion in App.
  const { container } = render(<Footer />)
  expect(container.querySelectorAll('h1, h2')).toHaveLength(0)
})
