import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints renders token id label behavior coverage.
// Scope note: validates recentMints renders token id label behavior for regressions.
describe('RecentMints', () => {
  it('renders token id label prefix for minted items', () => {
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: 9, timestamp: 1710000000, address: 'SP123', txId: '0xabc' }]
      })
    )

    expect(markup).toContain('#9')
  })
})
