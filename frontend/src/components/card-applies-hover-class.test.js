import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates card applies hover class behavior for regressions.
describe('Card', () => {
  it('adds hover styling class when hover is enabled', () => {
    const markup = renderToStaticMarkup(React.createElement(Card, { hover: true }, 'Body'))
    expect(markup).toContain('card--hover')
    expect(markup).toContain('data-hover="true"')
  })
})
