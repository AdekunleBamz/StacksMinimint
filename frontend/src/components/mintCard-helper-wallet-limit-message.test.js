import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard helper wallet limit message behavior coverage.
// Scope note: validates mintCard helper wallet limit message behavior for regressions.
describe('MintCard', () => {
  it('surfaces wallet limit helper copy when mint cap is reached', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 5, maxSupply: 10, walletMinted: 2, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('This wallet has reached the configured mint limit.')
    expect(markup).toContain('Wallet Limit Reached')
  })
})
