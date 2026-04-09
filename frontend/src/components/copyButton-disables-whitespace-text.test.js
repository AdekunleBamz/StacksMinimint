import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CopyButton } from './CopyButton'

describe('CopyButton', () => {
  it('stays disabled when the copy value is only whitespace', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CopyButton, { text: '   ' })
    )

    expect(markup).toContain('disabled=""')
  })
})
