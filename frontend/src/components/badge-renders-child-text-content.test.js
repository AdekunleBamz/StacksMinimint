import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates badge renders child text content behavior for regressions.
describe('Badge', () => {
  it('renders child text content', () => {
    const markup = renderToStaticMarkup(React.createElement(Badge, null, 'Ready'))
    expect(markup).toContain('Ready')
  })
})
