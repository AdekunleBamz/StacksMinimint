import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

describe('Footer', () => {
  it('uses noopener noreferrer on external footer links', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('rel="noopener noreferrer"')
  })
})
