import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Spinner } from './Spinner'

// Regression note: preserve spinner renders ring element behavior coverage.
// Scope note: validates spinner renders ring element behavior for regressions.
describe('Spinner', () => {
  it('renders the internal spinner ring element', () => {
    const markup = renderToStaticMarkup(React.createElement(Spinner))
    expect(markup).toContain('spinner__ring')
  })
})
