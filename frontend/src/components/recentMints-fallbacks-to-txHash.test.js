import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints fallbacks to txHash behavior coverage.
// Scope note: validates recentMints fallbacks to txHash behavior for regressions.
describe('RecentMints', () => {
  it('uses txHash values when txId is missing', () => {
    const txHash = '0xhash123'
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: 4, timestamp: 1710000000, address: 'SP123', txHash }]
      })
    )

    expect(markup).toContain(`/txid/${txHash}`)
  })
})
