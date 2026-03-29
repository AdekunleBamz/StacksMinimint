import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Spinner } from './Spinner'

// Regression note: preserve spinner default size class behavior coverage.
// Scope note: validates spinner default size class behavior for regressions.
describe('Spinner', () => {
  it('uses medium size class by default', () => {
    const markup = renderToStaticMarkup(React.createElement(Spinner))
    expect(markup).toContain('spinner--medium')
  })
})
