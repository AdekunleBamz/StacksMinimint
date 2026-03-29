import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates card non clickable has no tabindex behavior for regressions.
describe('Card', () => {
  it('does not set tab index when card is not interactive', () => {
    const markup = renderToStaticMarkup(React.createElement(Card, null, 'Body'))
    expect(markup).not.toContain('tabindex="0"')
  })
})
