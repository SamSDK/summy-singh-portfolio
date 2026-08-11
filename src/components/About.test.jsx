import { render, screen } from '@testing-library/react'
import About from './About.jsx'
import content from '../data/content.js'

test('renders the heading, bio and every personality pill', () => {
  render(<About />)
  expect(screen.getByRole('heading', { name: content.sectionTitles.about })).toBeInTheDocument()
  expect(screen.getByText(content.about.body)).toBeInTheDocument()
  content.whoAmI.forEach((bullet) => {
    expect(screen.getByText(bullet)).toBeInTheDocument()
  })
})
