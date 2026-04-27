import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints pending badge without txid behavior coverage.
// Scope note: validates recentMints pending badge without txid behavior for regressions.
describe('RecentMints', () => {
  it('shows pending status when an item has no transaction id', () => {
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: null, timestamp: 1710000000, address: 'SP123' }]
      })
    )

    expect(markup).toContain('Pending')
    expect(markup).toContain('mint-item__badge--pending')
    expect(markup).toContain('title="Mint submission is pending confirmation"')
  })
})
