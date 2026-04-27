import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

describe('Stats', () => {
  it('emits connection metadata for connected and disconnected states', () => {
    const connectedMarkup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        isConnected: true,
        contractInfo: { totalSupply: 1, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false }
      })
    )
    const disconnectedMarkup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        isConnected: false,
        contractInfo: { totalSupply: 1, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false }
      })
    )

    expect(connectedMarkup).toContain('data-connection="connected"')
    expect(disconnectedMarkup).toContain('data-connection="disconnected"')
  })
})
