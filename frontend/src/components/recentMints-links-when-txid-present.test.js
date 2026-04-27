import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints links when txid present behavior coverage.
// Scope note: validates recentMints links when txid present behavior for regressions.
describe('RecentMints', () => {
  it('renders explorer links for items with transaction ids', () => {
    const txId = '0xabc123'
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: 7, timestamp: 1710000000, address: 'SP123', txId }]
      })
    )

    expect(markup).toContain('Minted ↗')
    expect(markup).toContain(`/txid/${txId}`)
    expect(markup).toContain('data-pending="false"')
  })
})
