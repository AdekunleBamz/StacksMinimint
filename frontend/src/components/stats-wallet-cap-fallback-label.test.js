import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

describe('Stats', () => {
  it('uses fallback wallet cap text when maxPerWallet is not provided', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        contractInfo: { totalSupply: 1, maxSupply: 10, mintFee: 1000, isPaused: false },
        isConnected: true
      })
    )

    expect(markup).toContain('Not set')
  })
})
