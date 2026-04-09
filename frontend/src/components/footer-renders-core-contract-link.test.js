import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

describe('Footer', () => {
  it('includes an explorer link for the tracked core contract', () => {
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain('Core Contract')
    expect(markup).toContain('https://explorer.hiro.so/address/SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT.minimint-core-v-i27?chain=mainnet')
  })
})
