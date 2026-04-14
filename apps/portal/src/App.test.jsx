import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders skip link for keyboard users', async () => {
    render(<App />)
    expect(
      await screen.findByRole('link', { name: /skip to main content/i }),
    ).toBeInTheDocument()
  })

  it('renders primary navigation', async () => {
    render(<App />)
    expect(
      await screen.findByRole('navigation', { name: /primary/i }),
    ).toBeInTheDocument()
  })
})
