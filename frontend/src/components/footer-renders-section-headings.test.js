import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

// Regression note: preserve footer renders section headings behavior coverage.
describe('Footer', () => {
  it('renders the project, community, and resources headings', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('Project')
    expect(markup).toContain('Community')
    expect(markup).toContain('Resources')
  })
})
