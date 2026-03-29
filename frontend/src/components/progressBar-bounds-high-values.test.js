import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

// Regression note: preserve progressBar bounds high values behavior coverage.
describe('ProgressBar', () => {
  it('caps progress width at one hundred percent for oversized values', () => {
    const markup = renderToStaticMarkup(
      React.createElement(ProgressBar, { value: 120, max: 100 })
    )

    expect(markup).toContain('width:100%')
    expect(markup).toContain('aria-valuenow="100"')
  })
})
