import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard renders wallet metrics behavior coverage.
// Scope note: validates mintCard renders wallet metrics behavior for regressions.
describe('MintCard', () => {
  it('renders wallet mint count and configured wallet cap values', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 3, maxSupply: 10, walletMinted: 1, maxPerWallet: 5, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('1 / 5')
  })
})
