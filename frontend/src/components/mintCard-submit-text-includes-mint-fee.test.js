import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard submit text includes mint fee behavior coverage.
// Scope note: validates mintCard submit text includes mint fee behavior for regressions.
describe('MintCard', () => {
  it('includes formatted mint fee in the submit button copy', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 2000000, totalSupply: 0, maxSupply: 10, walletMinted: 0, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('Mint for 2 STX')
  })
})
