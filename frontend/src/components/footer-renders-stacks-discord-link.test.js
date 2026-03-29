import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

// Regression note: preserve footer renders stacks discord link behavior coverage.
// Scope note: validates footer renders stacks discord link behavior for regressions.
describe('Footer', () => {
  it('includes the Stacks Discord community link', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('https://discord.gg/stacks')
  })
})
