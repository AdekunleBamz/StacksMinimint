import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

// Regression note: preserve progressBar applies custom aria label behavior coverage.
// Scope note: validates progressBar applies custom aria label behavior for regressions.
describe('ProgressBar', () => {
  it('forwards custom aria labels to the progressbar element', () => {
    const markup = renderToStaticMarkup(React.createElement(ProgressBar, { value: 10, ariaLabel: 'Mint completion' }))
    expect(markup).toContain('aria-label="Mint completion"')
  })
})
