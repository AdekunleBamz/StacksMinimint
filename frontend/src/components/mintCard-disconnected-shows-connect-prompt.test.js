import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard disconnected shows connect prompt behavior coverage.
// Scope note: validates mintCard disconnected shows connect prompt behavior for regressions.
describe('MintCard', () => {
  it('shows wallet connect prompt when user is disconnected', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 0, maxSupply: 10, walletMinted: 0, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: false,
        isConnecting: false,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('Connect your Stacks wallet to start minting here.')
    expect(markup).toContain('Connect wallet')
    expect(markup).toContain('title="Connect wallet to enable minting"')
    expect(markup).toContain('data-connected="false"')
    expect(markup).toContain('data-connect-state="disconnected"')
  })
})
