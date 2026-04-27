import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders labeled link navigation groups and footer landmark label', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))

    expect(markup).toContain('aria-label="Site footer"')
    expect(markup).toContain('aria-label="Project links"')
    expect(markup).toContain('aria-label="Community links"')
    expect(markup).toContain('aria-label="Resource links"')
    expect(markup).toContain('data-column-count="3"')
    expect(markup).toContain('data-link-count="3"')
    expect(markup).toContain('data-link-count="5"')
  })
})
