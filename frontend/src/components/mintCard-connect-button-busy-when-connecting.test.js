import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard connect button busy when connecting behavior coverage.
// Scope note: validates mintCard connect button busy when connecting behavior for regressions.
describe('MintCard', () => {
  it('marks connect action as busy while wallet connection is in progress', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 0, maxSupply: 10, walletMinted: 0, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: false,
        isConnecting: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('Connecting...')
    expect(markup).toContain('aria-busy="true"')
  })
})
