import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CopyButton } from './CopyButton'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates copyButton renders custom label behavior for regressions.
describe('CopyButton', () => {
  it('renders custom button label text when supplied', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CopyButton, { text: 'SP123', label: 'Copy Address' })
    )

    expect(markup).toContain('Copy Address')
  })
})
