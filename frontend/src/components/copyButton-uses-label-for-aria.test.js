import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CopyButton } from './CopyButton'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates copyButton uses label for aria behavior for regressions.
describe('CopyButton', () => {
  it('uses the visible label as the aria-label when idle', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CopyButton, { text: 'SP123', label: 'Copy address' })
    )

    expect(markup).toContain('aria-label="Copy address"')
  })
})
