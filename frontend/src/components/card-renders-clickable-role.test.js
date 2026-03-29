import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates card renders clickable role behavior for regressions.
describe('Card', () => {
  it('renders button semantics when click handlers are supplied', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Card, { onClick: vi.fn(), ariaLabel: 'Open card' }, 'Body')
    )

    expect(markup).toContain('role="button"')
    expect(markup).toContain('tabindex="0"')
  })
})
