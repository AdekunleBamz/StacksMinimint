import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates badge applies custom classname behavior for regressions.
describe('Badge', () => {
  it('includes custom class names in markup', () => {
    const markup = renderToStaticMarkup(React.createElement(Badge, { className: 'is-custom' }, 'Ready'))
    expect(markup).toContain('is-custom')
  })
})
