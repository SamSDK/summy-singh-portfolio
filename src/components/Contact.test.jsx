import { render, screen } from '@testing-library/react'
import Contact from './Contact.jsx'
import content from '../data/content.js'

test('renders heading, subheading, and both CTA links', () => {
  render(<Contact />)
  expect(screen.getByRole('heading', { name: content.contact.heading })).toBeInTheDocument()
  expect(screen.getByText(content.contact.subheading)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /email me/i })).toHaveAttribute(
    'href',
    content.contact.emailHref,
  )
  expect(screen.getByRole('link', { name: /book a call/i })).toHaveAttribute(
    'href',
    content.contact.bookingHref,
  )
})
