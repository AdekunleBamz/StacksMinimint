import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

// Regression note: preserve recentMints empty copy guidance behavior coverage.
// Scope note: validates recentMints empty copy guidance behavior for regressions.
describe('RecentMints', () => {
  it('guides users when no local mint receipts exist', () => {
    const markup = renderToStaticMarkup(React.createElement(RecentMints, { items: [] }))
    expect(markup).toContain('Your next wallet submission will appear here.')
  })
})
