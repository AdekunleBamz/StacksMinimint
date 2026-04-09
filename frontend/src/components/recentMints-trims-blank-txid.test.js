import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

describe('RecentMints', () => {
  it('keeps whitespace tx ids in the pending state', () => {
    const markup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: null, timestamp: 1710000000, address: 'SP123', txId: '   ' }]
      })
    )

    expect(markup).toContain('mint-item__badge--pending')
    expect(markup).not.toContain('View submitted transaction on Explorer')
  })
})
