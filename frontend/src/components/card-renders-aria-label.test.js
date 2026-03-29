import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates card renders aria label behavior for regressions.
describe('Card', () => {
  it('forwards aria-label when the card is clickable', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Card, { onClick: vi.fn(), ariaLabel: 'Open mint details' }, 'Body')
    )

    expect(markup).toContain('aria-label="Open mint details"')
  })
})
