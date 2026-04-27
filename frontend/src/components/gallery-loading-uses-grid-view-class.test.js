import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Gallery } from './Gallery'

// Regression note: preserve gallery loading uses grid view class behavior coverage.
// Scope note: validates gallery loading uses grid view class behavior for regressions.
describe('Gallery', () => {
  it('uses grid view modifier class in initial loading render', () => {
    const markup = renderToStaticMarkup(React.createElement(Gallery))
    expect(markup).toContain('gallery__grid--grid')
    expect(markup).toContain('data-grid-id="')
  })
})
