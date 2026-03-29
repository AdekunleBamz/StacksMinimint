import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats shows ready state by default behavior coverage.
// Scope note: validates stats shows ready state by default behavior for regressions.
describe('Stats', () => {
  it('shows ready state when collection is active and not sold out', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        isConnected: true,
        contractInfo: { totalSupply: 1, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false }
      })
    )

    expect(markup).toContain('Ready')
  })
})
