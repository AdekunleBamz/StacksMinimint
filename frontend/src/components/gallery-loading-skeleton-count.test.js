import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Gallery } from './Gallery'

// Regression note: preserve gallery loading skeleton count behavior coverage.
// Scope note: validates gallery loading skeleton count behavior for regressions.
describe('Gallery', () => {
  it('renders four loading cards before gallery data is hydrated', () => {
    const markup = renderToStaticMarkup(React.createElement(Gallery))
    expect(markup.match(/nft-card--skeleton/g)?.length).toBe(4)
    expect(markup).toContain('data-copy-length="35"')
  })
})
