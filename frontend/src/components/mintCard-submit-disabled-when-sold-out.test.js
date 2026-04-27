import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard submit disabled when sold out behavior coverage.
// Scope note: validates mintCard submit disabled when sold out behavior for regressions.
describe('MintCard', () => {
  it('disables submit action when collection is sold out', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 10, maxSupply: 10, walletMinted: 0, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('Sold Out')
    expect(markup).toContain('disabled=""')
    expect(markup).toContain('data-mint-state="sold-out"')
    expect(markup).toContain('title="Mint state: sold-out"')
  })
})
