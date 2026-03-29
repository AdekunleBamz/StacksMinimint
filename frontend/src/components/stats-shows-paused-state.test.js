import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats shows paused state behavior coverage.
// Scope note: validates stats shows paused state behavior for regressions.
describe('Stats', () => {
  it('marks the collection status as paused when contract pause flag is set', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        contractInfo: { totalSupply: 1, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: true },
        isConnected: true
      })
    )

    expect(markup).toContain('Paused')
    expect(markup).toContain('stats__state--warning')
  }, 15_000)
})
