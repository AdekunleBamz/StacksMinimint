import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats renders subtitle copy behavior coverage.
// Scope note: validates stats renders subtitle copy behavior for regressions.
describe('Stats', () => {
  it('renders the explanatory subtitle copy', () => {
    const markup = renderToStaticMarkup(React.createElement(Stats, {
      contractInfo: { totalSupply: 2, maxSupply: 10, mintFee: 1000 },
      isLoading: false,
      isConnected: true,
      recentActivityCount: 1
    }))

    expect(markup).toContain('Supply, pricing, and wallet limits stay visible while you prepare each mint.')
  })
})
