import { render, screen } from '@testing-library/react'
import WhoAmI from './WhoAmI.jsx'
import content from '../data/content.js'

test('renders section title and every bullet as a pill', () => {
  render(<WhoAmI />)
  expect(screen.getByRole('heading', { name: /who am i/i })).toBeInTheDocument()
  content.whoAmI.forEach((bullet) => {
    expect(screen.getByText(bullet)).toBeInTheDocument()
  })
})
