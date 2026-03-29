import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints renders title behavior coverage.
describe('RecentMints', () => {
  it('renders the Recent Mints heading', () => {
    const markup = renderToStaticMarkup(React.createElement(RecentMints, { items: [] }))
    expect(markup).toContain('Recent Mints')
  })
})
