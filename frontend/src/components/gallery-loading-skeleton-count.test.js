import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders four loading cards before gallery data is hydrated', () => {
    const markup = renderToStaticMarkup(React.createElement(Gallery))
    expect(markup.match(/nft-card--skeleton/g)?.length).toBe(4)
  })
})
