import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats renders section title behavior coverage.
// Scope note: validates stats renders section title behavior for regressions.
describe('Stats', () => {
  it('renders the collection stats section title', () => {
    const markup = renderToStaticMarkup(React.createElement(Stats, {
      contractInfo: { totalSupply: 0, maxSupply: 100, mintFee: 1000 },
      isLoading: false,
      isConnected: false,
      recentActivityCount: 0
    }))

    expect(markup).toContain('Collection Stats')
  })
})
