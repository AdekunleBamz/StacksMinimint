import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates card renders default classes behavior for regressions.
describe('Card', () => {
  it('renders default variant and padding classes', () => {
    const markup = renderToStaticMarkup(React.createElement(Card, null, 'Body'))
    expect(markup).toContain('card--default')
    expect(markup).toContain('card--padding-medium')
    expect(markup).toContain('data-variant="default"')
    expect(markup).toContain('data-padding="medium"')
  })
})
