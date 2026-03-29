import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CopyButton } from './CopyButton'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates copyButton enables with text behavior for regressions.
describe('CopyButton', () => {
  it('remains enabled when a copy target is provided', () => {
    const markup = renderToStaticMarkup(React.createElement(CopyButton, { text: 'SP123' }))
    expect(markup).not.toContain('disabled=""')
  })
})
