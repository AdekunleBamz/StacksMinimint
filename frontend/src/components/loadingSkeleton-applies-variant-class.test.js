import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { LoadingSkeleton } from './LoadingSkeleton'

// Regression note: preserve loadingSkeleton applies variant class behavior coverage.
// Scope note: validates loadingSkeleton applies variant class behavior for regressions.
describe('LoadingSkeleton', () => {
  it('applies the requested variant class to skeleton blocks', () => {
    const markup = renderToStaticMarkup(React.createElement(LoadingSkeleton, { variant: 'avatar' }))
    expect(markup).toContain('skeleton--avatar')
  })
})
