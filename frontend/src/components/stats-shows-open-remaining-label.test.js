import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats shows open remaining label behavior coverage.
// Scope note: validates stats shows open remaining label behavior for regressions.
describe('Stats', () => {
  it('shows open remaining label when max supply is undefined', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        isConnected: true,
        contractInfo: { totalSupply: 1, mintFee: 1000, maxPerWallet: 2, isPaused: false }
      })
    )

    expect(markup).toContain('Open')
  })
})
