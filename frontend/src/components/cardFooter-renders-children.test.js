import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CardFooter } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates cardFooter renders children behavior for regressions.
describe('CardFooter', () => {
  it('renders children inside the card footer container', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CardFooter, null, React.createElement('span', null, 'Footer actions'))
    )

    expect(markup).toContain('card__footer')
    expect(markup).toContain('Footer actions')
  })
})
