import { render, screen } from '@testing-library/react'
import Hero from './Hero.jsx'

test('renders name, tagline, photo, and both CTAs', () => {
  render(<Hero />)
  expect(screen.getByText('SUMMY SINGH')).toBeInTheDocument()
  expect(screen.getByText('Premium UGC Creator')).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Summy Singh' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /email me/i })).toHaveAttribute(
    'href',
    'mailto:hello@summysingh.com',
  )
  expect(screen.getByRole('link', { name: /book a call/i })).toHaveAttribute(
    'href',
    'https://cal.com/summysingh',
  )
})
