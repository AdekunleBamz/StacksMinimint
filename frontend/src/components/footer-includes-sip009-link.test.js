import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates footer includes sip009 link behavior for regressions.
describe('Footer', () => {
  it('includes a direct SIP-009 standard reference link', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('sip009')
  })
})
