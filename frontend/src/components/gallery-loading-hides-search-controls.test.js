import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Gallery } from './Gallery'

// Regression note: preserve gallery loading hides search controls behavior coverage.
// Scope note: validates gallery loading hides search controls behavior for regressions.
describe('Gallery', () => {
  it('does not render search input while loading placeholders are visible', () => {
    const markup = renderToStaticMarkup(React.createElement(Gallery))
    expect(markup).not.toContain('type="search"')
  })
})
