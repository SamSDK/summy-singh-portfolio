import { render, screen } from '@testing-library/react'
import Testimonials from './Testimonials.jsx'
import content from '../data/content.js'

test('renders each quote with its author and role', () => {
  render(<Testimonials />)
  content.testimonials.forEach((t) => {
    expect(screen.getByText(`"${t.quote}"`)).toBeInTheDocument()
    expect(screen.getByText(`${t.author}, ${t.role}`)).toBeInTheDocument()
  })
})
