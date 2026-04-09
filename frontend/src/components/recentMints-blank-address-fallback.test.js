import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

describe('RecentMints', () => {
  it('falls back to Unknown when address fields are blank strings', () => {
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: 4, timestamp: 1710000000, txId: '0xabc', minter: '   ' }]
      })
    )

    expect(markup).toContain('Unknown')
  })
})
