import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CardHeader } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates cardHeader renders children behavior for regressions.
describe('CardHeader', () => {
  it('renders children inside the card header container', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CardHeader, null, React.createElement('h3', null, 'Mint details'))
    )

    expect(markup).toContain('card__header')
    expect(markup).toContain('Mint details')
  })
})
