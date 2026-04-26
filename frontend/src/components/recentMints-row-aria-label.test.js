import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

describe('RecentMints', () => {
  it('adds a descriptive aria label to each mint row', () => {
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: 19, timestamp: 1710000000, address: 'SP123', txId: '0xabc' }]
      })
    )

    expect(markup).toContain('aria-label="Mint #19 by SP123"')
  })
})
