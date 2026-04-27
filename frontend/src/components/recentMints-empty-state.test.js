import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints empty state behavior coverage.
// Scope note: validates recentMints empty state behavior for regressions.
describe('RecentMints', () => {
  it('renders empty-state messaging when there are no receipts', () => {
    const markup = renderToStaticMarkup(React.createElement(RecentMints, { items: [] }))
    expect(markup).toContain('No local mint receipts yet.')
    expect(markup).toContain('data-count="0"')
  })
})
