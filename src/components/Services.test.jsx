import { render, screen } from '@testing-library/react'
import Services from './Services.jsx'
import content from '../data/content.js'

test('renders the offer heading, one card per service, and the Work With Me CTA', () => {
  render(<Services />)
  expect(screen.getByRole('heading', { name: content.sectionTitles.offer })).toBeInTheDocument()
  content.services.forEach((service) => {
    expect(screen.getByText(service.title)).toBeInTheDocument()
    expect(screen.getByText(service.description)).toBeInTheDocument()
  })
  expect(screen.getByRole('link', { name: content.ctaLabels.workWithMe })).toHaveAttribute(
    'href',
    content.contact.bookingHref,
  )
})
