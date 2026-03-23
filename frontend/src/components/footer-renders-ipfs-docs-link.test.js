import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

describe('Footer', () => {
  it('includes the IPFS docs link in project resources', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('https://docs.ipfs.tech/')
  })
})
