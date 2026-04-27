import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('emits normalized position metadata on the wrapper', () => {
    const explicitMarkup = renderToStaticMarkup(
      React.createElement(
        Tooltip,
        { content: 'Mint fee', position: 'right', delay: 450 },
        React.createElement('button', null, 'Info')
      )
    )
    const fallbackMarkup = renderToStaticMarkup(
      React.createElement(
        Tooltip,
        { content: 'Mint fee', position: 'center', delay: -1 },
        React.createElement('button', null, 'Info')
      )
    )

    expect(explicitMarkup).toContain('data-position="right"')
    expect(explicitMarkup).toContain('data-delay="450"')
    expect(fallbackMarkup).toContain('data-position="top"')
    expect(fallbackMarkup).toContain('data-delay="300"')
  })
})
