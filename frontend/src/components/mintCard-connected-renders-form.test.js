import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard connected renders form behavior coverage.
// Scope note: validates mintCard connected renders form behavior for regressions.
describe('MintCard', () => {
  it('renders metadata submission form when wallet is connected', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 0, maxSupply: 10, walletMinted: 0, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('Token URI (Metadata URL)')
    expect(markup).toContain('Mint for 0.001 STX')
    expect(markup).toContain('data-connect-state="connected"')
    expect(markup).toContain('data-token-uri-valid="false"')
  })
})
