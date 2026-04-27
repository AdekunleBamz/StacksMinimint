import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats progress text includes remaining count behavior coverage.
// Scope note: validates stats progress text includes remaining count behavior for regressions.
describe('Stats', () => {
  it('shows remaining item count in progress summary for finite supply', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        isConnected: true,
        contractInfo: { totalSupply: 3, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false }
      })
    )

    expect(markup).toContain('7 items remaining')
    expect(markup).toContain('data-progress="30"')
  })
})
