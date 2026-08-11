import { render, screen } from '@testing-library/react'
import Contact from './Contact.jsx'
import content from '../data/content.js'

test('renders eyebrow, headline and the circular CTA', () => {
  render(<Contact />)
  expect(screen.getByText(content.contact.eyebrow)).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: content.contact.heading })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: content.contact.circleLabel })).toHaveAttribute(
    'href',
    content.contact.bookingHref,
  )
})

test('renders every detail column as a labelled link', () => {
  render(<Contact />)
  content.contact.details.forEach((detail) => {
    expect(screen.getByText(detail.label)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: detail.value })).toHaveAttribute('href', detail.href)
  })
})
