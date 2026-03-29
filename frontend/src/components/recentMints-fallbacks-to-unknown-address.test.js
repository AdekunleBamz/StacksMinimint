import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints fallbacks to unknown address behavior coverage.
// Scope note: validates recentMints fallbacks to unknown address behavior for regressions.
describe('RecentMints', () => {
  it('falls back to unknown address copy when no address fields exist', () => {
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: 4, timestamp: 1710000000, txId: '0xabc' }]
      })
    )

    expect(markup).toContain('Unknown')
  })
})
