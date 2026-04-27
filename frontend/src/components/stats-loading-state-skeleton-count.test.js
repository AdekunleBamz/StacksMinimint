import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Stats } from './Stats'

// Regression note: preserve stats loading state skeleton count behavior coverage.
// Scope note: validates stats loading state skeleton count behavior for regressions.
describe('Stats', () => {
  it('renders four skeleton cards during loading states', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Stats, { contractInfo: null, isLoading: true })
    )

    expect(markup.match(/stat-card--skeleton/g)?.length).toBe(4)
    expect(markup).toContain('data-loading="true"')
  })
})
