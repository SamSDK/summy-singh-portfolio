import { render, screen } from '@testing-library/react'
import Clients from './Clients.jsx'
import content from '../data/content.js'

test('renders the heading, every client name, and the tail', () => {
  render(<Clients />)
  expect(
    screen.getByRole('heading', { name: content.sectionTitles.clients }),
  ).toBeInTheDocument()
  content.clients.names.forEach((name) => {
    expect(screen.getByText(name)).toBeInTheDocument()
  })
  expect(screen.getByText(content.clients.tail)).toBeInTheDocument()
})
