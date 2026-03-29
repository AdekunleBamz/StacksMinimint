import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard input respects max uri length behavior coverage.
// Scope note: validates mintCard input respects max uri length behavior for regressions.
describe('MintCard', () => {
  it('applies token URI max length constraint to metadata input field', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 0, maxSupply: 10, walletMinted: 0, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('maxLength="256"')
  })
})
