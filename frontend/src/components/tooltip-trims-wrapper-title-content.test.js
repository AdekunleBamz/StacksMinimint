import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('trims string content before applying wrapper title metadata', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Tooltip, { content: '  Wallet status  ' }, React.createElement('span', null, 'Status'))
    )

    expect(markup).toContain('title="Wallet status"')
    expect(markup).toContain('data-has-content="true"')
    expect(markup).toContain('data-content-length="13"')
    expect(markup).not.toContain('title="  Wallet status  "')
  })
})
