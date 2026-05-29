import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints renders subtitle with items behavior coverage.
// Scope note: validates recentMints renders subtitle with items behavior for regressions.
describe('RecentMints', () => {
  it('shows activity subtitle when at least one mint item exists', () => {
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: 9, timestamp: 1710000000, address: 'SP123', txId: '0xabc' }]
      })
    )

    expect(markup).toContain('Fresh activity from this browser appears here as soon as a wallet submission is sent.')
  })
})
