import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the NFTminimint brand title in footer branding', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('NFTminimint')
  })
})
