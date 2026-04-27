import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Gallery } from './Gallery'

// Regression note: preserve gallery initial loading state behavior coverage.
// Scope note: validates gallery initial loading state behavior for regressions.
describe('Gallery', () => {
  it('renders loading placeholders on initial server render', () => {
    const markup = renderToStaticMarkup(React.createElement(Gallery))
    expect(markup).toContain('Collection Gallery')
    expect(markup).toContain('Loading collection preview cards...')
    expect(markup).toContain('aria-live="polite"')
    expect(markup).toContain('nft-card--skeleton')
  })
})
