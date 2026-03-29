import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates card applies padding class behavior for regressions.
describe('Card', () => {
  it('applies requested padding modifier classes', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Card, { padding: 'large' }, 'Body')
    )

    expect(markup).toContain('card--padding-large')
  })
})
