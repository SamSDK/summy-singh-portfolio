import { render, screen } from '@testing-library/react'
import Services from './Services.jsx'
import content from '../data/content.js'

test('renders one card per service with title and description', () => {
  render(<Services />)
  content.services.forEach((service) => {
    expect(screen.getByText(service.title)).toBeInTheDocument()
    expect(screen.getByText(service.description)).toBeInTheDocument()
  })
})
