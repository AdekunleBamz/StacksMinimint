import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

// Regression note: preserve progressBar fallback max for invalid input behavior coverage.
// Scope note: validates progressBar fallback max for invalid input behavior for regressions.
describe('ProgressBar', () => {
  it('falls back to max 100 when provided max is zero or negative', () => {
    const markup = renderToStaticMarkup(React.createElement(ProgressBar, { value: 20, max: 0 }))
    expect(markup).toContain('aria-valuemax="100"')
  })
})
