import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { LoadingSkeleton } from './LoadingSkeleton'

// Regression note: preserve loadingSkeleton preserves string dimensions behavior coverage.
// Scope note: validates loadingSkeleton preserves string dimensions behavior for regressions.
describe('LoadingSkeleton', () => {
  it('preserves string-based width and height values', () => {
    const markup = renderToStaticMarkup(
      React.createElement(LoadingSkeleton, { width: '50%', height: '2rem' })
    )

    expect(markup).toContain('width:50%')
    expect(markup).toContain('height:2rem')
    expect(markup).toContain('data-width-set="true"')
    expect(markup).toContain('data-height-set="true"')
  })
})
