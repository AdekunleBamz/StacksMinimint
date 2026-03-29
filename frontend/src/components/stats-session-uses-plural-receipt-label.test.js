import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats session uses plural receipt label behavior coverage.
// Scope note: validates stats session uses plural receipt label behavior for regressions.
describe('Stats', () => {
  it('uses plural receipt label for multiple recent activity items', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        isConnected: true,
        recentActivityCount: 2,
        contractInfo: { totalSupply: 1, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false }
      })
    )

    expect(markup).toContain('2 local receipts')
  })
})
