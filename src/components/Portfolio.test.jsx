import { render, screen } from '@testing-library/react'
import Portfolio from './Portfolio.jsx'
import content from '../data/content.js'

test('renders every category with its items and tags', () => {
  render(<Portfolio />)
  content.portfolio.categories.forEach((category) => {
    expect(screen.getByRole('heading', { level: 3, name: category.name })).toBeInTheDocument()
    category.items.forEach((item) => {
      const img = screen.getByRole('img', { name: item.alt })
      expect(img).toHaveAttribute('src', item.src)
      // tags repeat across categories, so assert presence rather than uniqueness
      expect(screen.getAllByText(item.tag).length).toBeGreaterThan(0)
    })
  })
})
