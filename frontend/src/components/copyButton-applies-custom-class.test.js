import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CopyButton } from './CopyButton'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates copyButton applies custom class behavior for regressions.
describe('CopyButton', () => {
  it('applies custom class names to the root button element', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CopyButton, { text: 'SP123', className: 'u-inline' })
    )

    expect(markup).toContain('u-inline')
  })
})
