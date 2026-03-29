import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates badge primary solid variant class behavior for regressions.
describe('Badge', () => {
  it('applies the primary-solid variant class', () => {
    const markup = renderToStaticMarkup(React.createElement(Badge, { variant: 'primary-solid' }, 'Mint'))
    expect(markup).toContain('badge--primary-solid')
  })
})
