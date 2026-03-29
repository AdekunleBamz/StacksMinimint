import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CardBody } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates cardBody applies custom class behavior for regressions.
describe('CardBody', () => {
  it('applies custom class names on card body sections', () => {
    const markup = renderToStaticMarkup(React.createElement(CardBody, { className: 'u-tight' }, 'Body'))
    expect(markup).toContain('u-tight')
  })
})
