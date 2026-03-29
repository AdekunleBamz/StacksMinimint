import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CardFooter } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates cardFooter applies custom class behavior for regressions.
describe('CardFooter', () => {
  it('applies custom class names on card footer sections', () => {
    const markup = renderToStaticMarkup(React.createElement(CardFooter, { className: 'u-tight' }, 'Footer'))
    expect(markup).toContain('u-tight')
  })
})
