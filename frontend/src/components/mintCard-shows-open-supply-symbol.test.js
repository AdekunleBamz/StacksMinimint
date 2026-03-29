import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard shows open supply symbol behavior coverage.
// Scope note: validates mintCard shows open supply symbol behavior for regressions.
describe('MintCard', () => {
  it('shows infinity symbol when max supply is not configured', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 4, walletMinted: 0, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('4 / ∞')
  })
})
