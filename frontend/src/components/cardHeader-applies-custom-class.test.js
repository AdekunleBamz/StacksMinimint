import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CardHeader } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates cardHeader applies custom class behavior for regressions.
describe('CardHeader', () => {
  it('applies custom class names on card headers', () => {
    const markup = renderToStaticMarkup(React.createElement(CardHeader, { className: 'u-tight' }, 'Title'))
    expect(markup).toContain('u-tight')
  })
})
