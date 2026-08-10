import { render, screen } from '@testing-library/react'
import Portfolio from './Portfolio.jsx'
import content from '../data/content.js'

test('renders one image per portfolio item', () => {
  render(<Portfolio />)
  content.portfolio.forEach((item) => {
    const img = screen.getByRole('img', { name: item.alt })
    expect(img).toHaveAttribute('src', item.src)
  })
})
