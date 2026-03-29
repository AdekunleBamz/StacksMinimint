import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats shows disconnected footnote behavior coverage.
// Scope note: validates stats shows disconnected footnote behavior for regressions.
describe('Stats', () => {
  it('shows connect guidance copy when wallet is not connected', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        contractInfo: { totalSupply: 1, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false },
        isConnected: false
      })
    )

    expect(markup).toContain('Connect a wallet to load address-specific mint caps and account context.')
  })
})
