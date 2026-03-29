import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates card variant class applied behavior for regressions.
describe('Card', () => {
  it('applies selected variant class modifiers', () => {
    const markup = renderToStaticMarkup(React.createElement(Card, { variant: 'elevated' }, 'Body'))
    expect(markup).toContain('card--elevated')
  })
})
