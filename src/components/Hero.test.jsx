import { render, screen } from '@testing-library/react'
import Hero from './Hero.jsx'
import content from '../data/content.js'

test('renders name, tagline, photo, and both CTAs', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { level: 1, name: content.hero.name })).toBeInTheDocument()
  expect(screen.getByText(content.hero.tagline)).toBeInTheDocument()
  expect(screen.getByRole('img', { name: content.hero.photoAlt })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: content.ctaLabels.email })).toHaveAttribute(
    'href',
    content.hero.emailHref,
  )
  expect(screen.getByRole('link', { name: content.ctaLabels.booking })).toHaveAttribute(
    'href',
    content.hero.bookingHref,
  )
})
