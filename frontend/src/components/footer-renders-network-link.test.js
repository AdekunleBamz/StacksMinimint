import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

describe('Footer', () => {
  it('includes a Hiro explorer link scoped to the configured chain', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('https://explorer.hiro.so/?chain=mainnet')
  })
})
