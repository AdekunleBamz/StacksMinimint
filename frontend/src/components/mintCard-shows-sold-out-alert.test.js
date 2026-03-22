import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

describe('MintCard', () => {
  it('shows sold-out alert when minted supply reaches max supply', () => {
    const markup = renderToStaticMarkup(
      React.createElement(MintCard, {
        contractInfo: { mintFee: 1000, totalSupply: 10, maxSupply: 10, walletMinted: 0, maxPerWallet: 2, isPaused: false },
        onMint: vi.fn(),
        isConnected: true,
        onConnect: vi.fn()
      })
    )

    expect(markup).toContain('Sold out! All NFTs have been minted')
  })
})
