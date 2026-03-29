import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CardBody } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates cardBody renders children behavior for regressions.
describe('CardBody', () => {
  it('renders children inside the card body container', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CardBody, null, React.createElement('p', null, 'Body content'))
    )

    expect(markup).toContain('card__body')
    expect(markup).toContain('Body content')
  })
})
