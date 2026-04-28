import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { MintCard } from './MintCard'

// Regression note: preserve mintCard renders token uri label behavior coverage.
// Scope note: validates mintCard renders token uri label behavior for regressions.
describe('MintCard', () => {
  it('renders the token URI input label for connected users', () => {
    const markup = renderToStaticMarkup(React.createElement(MintCard, {
      contractInfo: { mintFee: 1000, totalSupply: 0, maxSupply: 10 },
      onMint: async () => null,
      isConnected: true,
      isConnecting: false,
      onConnect: () => {},
      contractError: null
    }))

    expect(markup).toContain('Token URI (metadata URL)')
  })
})
