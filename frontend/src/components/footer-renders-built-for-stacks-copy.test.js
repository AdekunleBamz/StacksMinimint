import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates footer renders built for stacks copy behavior for regressions.
describe('Footer', () => {
  it('renders closing build credit copy', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('Built for Stacks NFT collections')
  })
})
