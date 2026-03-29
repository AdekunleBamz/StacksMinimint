import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats shows connected footnote behavior coverage.
// Scope note: validates stats shows connected footnote behavior for regressions.
describe('Stats', () => {
  it('shows connected guidance copy when wallet is connected', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        contractInfo: { totalSupply: 1, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false },
        isConnected: true
      })
    )

    expect(markup).toContain('Wallet-specific caps and pause state appear when available from the connected contract context.')
  })
})
