import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates footer links include rel protection behavior for regressions.
describe('Footer', () => {
  it('uses noopener noreferrer on external footer links', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('rel="noopener noreferrer"')
  })
})
