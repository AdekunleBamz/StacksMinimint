import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints submitted label for pending token behavior coverage.
// Scope note: validates recentMints submitted label for pending token behavior for regressions.
describe('RecentMints', () => {
  it('uses submitted label when tx exists but token id is still pending', () => {
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: null, timestamp: 1710000000, address: 'SP123', txId: '0xabc' }]
      })
    )

    expect(markup).toContain('Submitted ↗')
  })
})
