import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CeoBrief } from './CeoBrief'

describe('CeoBrief', () => {
  it('renders decision asks heading', () => {
    render(
      <MemoryRouter>
        <CeoBrief />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: /decision asks/i })).toBeInTheDocument()
  })
})
