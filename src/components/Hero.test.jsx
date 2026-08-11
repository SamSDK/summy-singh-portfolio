import { render, screen } from '@testing-library/react'
import Hero from './Hero.jsx'
import content from '../data/content.js'

test('renders name, tagline, descriptor and both CTAs', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { level: 1, name: content.hero.name })).toBeInTheDocument()
  expect(screen.getByText(content.hero.tagline)).toBeInTheDocument()
  expect(screen.getByText(content.hero.descriptor)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: content.ctaLabels.email })).toHaveAttribute(
    'href',
    content.hero.emailHref,
  )
  expect(screen.getByRole('link', { name: content.ctaLabels.booking })).toHaveAttribute(
    'href',
    content.hero.bookingHref,
  )
})

test('renders a background video configured for silent autoplay', () => {
  const { container } = render(<Hero />)
  const video = container.querySelector('video')

  expect(video).toBeTruthy()
  // Browsers only permit autoplay when the video is muted — if this regresses,
  // the hero silently stops playing on load and nobody notices in review.
  expect(video.muted).toBe(true)
  expect(video.hasAttribute('autoplay')).toBe(true)
  expect(video.hasAttribute('loop')).toBe(true)
  expect(video.hasAttribute('playsinline')).toBe(true)
})
