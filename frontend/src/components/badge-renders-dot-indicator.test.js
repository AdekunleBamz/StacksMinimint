import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates badge renders dot indicator behavior for regressions.
describe('Badge', () => {
  it('renders a dot marker when dot mode is enabled', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Badge, { dot: true }, 'Live')
    )

    expect(markup).toContain('badge__dot')
    expect(markup).toContain('Live')
  })
})
