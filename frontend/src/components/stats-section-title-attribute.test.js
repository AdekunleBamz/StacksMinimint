import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

describe('Stats', () => {
  it('keeps a descriptive title attribute on the stats section container', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        isConnected: true,
        contractInfo: { totalSupply: 2, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false }
      })
    )

    expect(markup).toContain('title="Collection statistics and mint readiness"')
  })
})
