import { render, screen } from '@testing-library/react'
import App from './App.jsx'

test('renders all six sections in order', () => {
  render(<App />)
  const headings = screen.getAllByRole('heading').filter((h) => h.tagName === 'H2').map((h) => h.textContent)
  expect(headings).toEqual([
    'Who Am I',
    'Services',
    'Portfolio',
    'Testimonials',
    "Let's create something",
  ])
  expect(screen.getByText('SUMMY SINGH')).toBeInTheDocument()
})
