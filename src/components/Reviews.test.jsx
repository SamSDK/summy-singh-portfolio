import { render, screen } from '@testing-library/react'
import Reviews from './Reviews.jsx'
import content from '../data/content.js'

test('renders each quote with author and the rating/social lines', () => {
  render(<Reviews />)
  content.testimonials.forEach((t) => {
    expect(screen.getByText(`"${t.quote}"`)).toBeInTheDocument()
    expect(screen.getByText(`${t.author}, ${t.role}`)).toBeInTheDocument()
  })
  expect(screen.getByText(content.reviews.ratingLine)).toBeInTheDocument()
  expect(screen.getByText(content.reviews.socialLine)).toBeInTheDocument()
})
