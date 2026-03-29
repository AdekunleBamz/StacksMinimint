import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { LoadingSkeleton } from './LoadingSkeleton'

// Regression note: preserve loadingSkeleton applies dimensions behavior coverage.
// Scope note: validates loadingSkeleton applies dimensions behavior for regressions.
describe('LoadingSkeleton', () => {
  it('applies numeric width and height values as pixel styles', () => {
    const markup = renderToStaticMarkup(
      React.createElement(LoadingSkeleton, { width: 120, height: 24 })
    )

    expect(markup).toContain('width:120px')
    expect(markup).toContain('height:24px')
  })
})
