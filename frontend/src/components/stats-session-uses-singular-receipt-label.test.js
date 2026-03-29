import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats session uses singular receipt label behavior coverage.
// Scope note: validates stats session uses singular receipt label behavior for regressions.
describe('Stats', () => {
  it('uses singular receipt label for one recent activity item', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        isConnected: true,
        recentActivityCount: 1,
        contractInfo: { totalSupply: 1, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false }
      })
    )

    expect(markup).toContain('1 local receipt')
  })
})
