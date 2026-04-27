import { describe, expect, it } from 'vitest'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Spinner } from './Spinner'

// Regression note: preserve spinner renders status role behavior coverage.
// Scope note: validates spinner renders status role behavior for regressions.
describe('Spinner', () => {
  it('renders with a status role for assistive technologies', () => {
    const markup = renderToStaticMarkup(React.createElement(Spinner))
    expect(markup).toContain('role="status"')
    expect(markup).toContain('aria-busy="true"')
    expect(markup).toContain('aria-label="Loading content"')
  })
})
