import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

describe('Stats', () => {
  it('shows zero recent receipts when a negative count slips through', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, {
        isLoading: false,
        isConnected: true,
        recentActivityCount: -2,
        contractInfo: { totalSupply: 1, maxSupply: 10, mintFee: 1000, maxPerWallet: 2, isPaused: false }
      })
    )

    expect(markup).toContain('0 local receipts')
  })
})
