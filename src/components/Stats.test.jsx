import { render, screen } from '@testing-library/react'
import Stats from './Stats.jsx'
import content from '../data/content.js'

test('renders every stat value and label', () => {
  render(<Stats />)
  content.stats.forEach((stat) => {
    expect(screen.getByText(stat.value)).toBeInTheDocument()
    expect(screen.getByText(stat.label)).toBeInTheDocument()
  })
})

test('is a bar, not a headed section', () => {
  const { container } = render(<Stats />)
  expect(container.querySelectorAll('h1, h2')).toHaveLength(0)
})
