import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates badge omits dot by default behavior for regressions.
describe('Badge', () => {
  it('does not render dot marker when dot mode is not enabled', () => {
    const markup = renderToStaticMarkup(React.createElement(Badge, null, 'Live'))
    expect(markup).toContain('data-dot="false"')
    expect(markup).not.toContain('badge__dot')
  })
})
