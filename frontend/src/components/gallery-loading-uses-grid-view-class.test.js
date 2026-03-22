import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('uses grid view modifier class in initial loading render', () => {
    const markup = renderToStaticMarkup(React.createElement(Gallery))
    expect(markup).toContain('gallery__grid--grid')
  })
})
