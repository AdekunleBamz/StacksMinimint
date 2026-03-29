import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints renders time elements behavior coverage.
// Scope note: validates recentMints renders time elements behavior for regressions.
describe('RecentMints', () => {
  it('wraps relative time copy in semantic time elements', () => {
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: 9, timestamp: 1710000000, address: 'SP123', txId: '0xabc' }]
      })
    )

    expect(markup).toContain('<time')
  })
})
