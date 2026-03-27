import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

// Regression note: keep this UI behavior expectation explicit.
describe('Footer', () => {
  it('renders the StacksMinimint brand title in footer branding', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('StacksMinimint')
  })
})
