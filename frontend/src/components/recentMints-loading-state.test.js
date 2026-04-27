import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints loading state behavior coverage.
// Scope note: validates recentMints loading state behavior for regressions.
describe('RecentMints', () => {
  it('renders loading skeletons when items is null', () => {
    const markup = renderToStaticMarkup(React.createElement(RecentMints, { items: null }))
    expect(markup).toContain('mint-item--skeleton')
    expect(markup).toContain('Loading recent mint activity')
    expect(markup).toContain('data-count="3"')
  })
})
