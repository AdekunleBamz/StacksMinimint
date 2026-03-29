import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard shows contract error message behavior coverage.
// Scope note: validates mintCard shows contract error message behavior for regressions.
describe('MintCard', () => {
  it('renders contract error text when an upstream error is provided', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 0, maxSupply: 10, walletMinted: 0, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn(),
        contractError: 'Network response failed'
      })
    )

    expect(markup).toContain('Network response failed')
  })
})
