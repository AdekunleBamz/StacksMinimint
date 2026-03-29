import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates card applies description id behavior for regressions.
describe('Card', () => {
  it('forwards aria-describedby ids for assistive descriptions', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Card, { ariaDescriptionId: 'card-copy' }, 'Body')
    )

    expect(markup).toContain('aria-describedby="card-copy"')
  })
})
