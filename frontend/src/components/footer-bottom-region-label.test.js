import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

describe('Footer', () => {
  it('labels the legal attribution row and brand description title metadata', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))

    expect(markup).toContain('aria-label="Footer legal and attribution"')
    expect(markup).toContain('title="Wallet-first NFT minting experience on Stacks"')
  })
})
