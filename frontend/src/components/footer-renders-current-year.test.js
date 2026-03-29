import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates footer renders current year behavior for regressions.
describe('Footer', () => {
  it('shows the current year in copyright copy', () => {
    const year = new Date().getFullYear()
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain(`© ${year}`)
  })
})
