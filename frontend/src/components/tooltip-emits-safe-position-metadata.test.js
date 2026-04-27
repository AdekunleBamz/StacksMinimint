import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('emits normalized position metadata on the wrapper', () => {
    const explicitMarkup = renderToStaticMarkup(
      React.createElement(Tooltip, { content: 'Mint fee', position: 'right' }, React.createElement('button', null, 'Info'))
    )
    const fallbackMarkup = renderToStaticMarkup(
      React.createElement(Tooltip, { content: 'Mint fee', position: 'center' }, React.createElement('button', null, 'Info'))
    )

    expect(explicitMarkup).toContain('data-position="right"')
    expect(fallbackMarkup).toContain('data-position="top"')
  })
})
