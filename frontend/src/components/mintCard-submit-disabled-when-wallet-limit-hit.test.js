import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard submit disabled when wallet limit hit behavior coverage.
// Scope note: validates mintCard submit disabled when wallet limit hit behavior for regressions.
describe('MintCard', () => {
  it('disables submit action when wallet has reached mint cap', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 5, maxSupply: 10, walletMinted: 2, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('Wallet Limit Reached')
    expect(markup).toContain('disabled=""')
  })
})
