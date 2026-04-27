import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

describe('RecentMints', () => {
  it('labels loading, empty, and populated states', () => {
    const loadingMarkup = renderToStaticMarkup(React.createElement(RecentMints, { items: null }))
    const emptyMarkup = renderToStaticMarkup(React.createElement(RecentMints, { items: [] }))
    const populatedMarkup = renderToStaticMarkup(
      React.createElement(RecentMints, {
        items: [{ tokenId: 1, timestamp: 1710000000, address: 'SP123', txId: '0xabc' }]
      })
    )

    expect(loadingMarkup).toContain('aria-label="Recent mints loading"')
    expect(loadingMarkup).toContain('data-state="loading"')
    expect(emptyMarkup).toContain('aria-label="Recent mints empty state"')
    expect(emptyMarkup).toContain('data-state="empty"')
    expect(populatedMarkup).toContain('aria-label="Recent mints"')
    expect(populatedMarkup).toContain('data-state="ready"')
  })
})
