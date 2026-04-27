import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CopyButton } from './CopyButton'

describe('CopyButton', () => {
  it('exposes idle data-state when no copy has occurred', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CopyButton, {
        text: 'SP123',
        label: 'Copy address'
      })
    )

    expect(markup).toContain('data-state="idle"')
    expect(markup).toContain('data-has-text="true"')
    expect(markup).toContain('data-disabled="false"')
  })
})
