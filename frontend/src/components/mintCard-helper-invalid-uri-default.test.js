import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard helper invalid uri default behavior coverage.
// Scope note: validates mintCard helper invalid uri default behavior for regressions.
describe('MintCard', () => {
  it('shows token URI guidance when no metadata value has been entered', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 0, maxSupply: 10, walletMinted: 0, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('Use an ipfs:// or https:// metadata URL')
  })
})
