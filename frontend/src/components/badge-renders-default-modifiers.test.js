import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates badge renders default modifiers behavior for regressions.
describe('Badge', () => {
  it('renders default variant and size modifiers', () => {
    const markup = renderToStaticMarkup(React.createElement(Badge, null, 'Ready'))
    expect(markup).toContain('badge--default')
    expect(markup).toContain('badge--medium')
  })
})
