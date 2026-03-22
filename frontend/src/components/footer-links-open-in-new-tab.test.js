import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

describe('Footer', () => {
  it('configures external links to open in new tabs', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('target="_blank"')
  })
})
