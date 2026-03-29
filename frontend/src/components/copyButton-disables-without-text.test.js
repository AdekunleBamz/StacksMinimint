import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CopyButton } from './CopyButton'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates copyButton disables without text behavior for regressions.
describe('CopyButton', () => {
  it('renders as disabled when no text value is provided', () => {
    const markup = renderToStaticMarkup(React.createElement(CopyButton))
    expect(markup).toContain('disabled=""')
  })
})
