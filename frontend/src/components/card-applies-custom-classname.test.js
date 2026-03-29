import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates card applies custom classname behavior for regressions.
describe('Card', () => {
  it('forwards custom class names to the root card element', () => {
    const markup = renderToStaticMarkup(React.createElement(Card, { className: 'u-shadow' }, 'Body'))
    expect(markup).toContain('u-shadow')
  })
})
