import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats shows sold out state behavior coverage.
// Scope note: validates stats shows sold out state behavior for regressions.
describe('Stats', () => {
  it('marks the collection as sold out when remaining supply reaches zero', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        contractInfo: { totalSupply: 10, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false },
        isConnected: true
      })
    )

    expect(markup).toContain('Sold out')
    expect(markup).toContain('stats__state--critical')
  })
})
