import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useClipboard } from './useClipboard'

function ClipboardMethodProbe() {
  const { copy, reset } = useClipboard()
  return React.createElement('div', {
    'data-copy-type': typeof copy,
    'data-reset-type': typeof reset
  })
}

describe('useClipboard', () => {
  it('exposes copy and reset methods as functions', () => {
    const markup = renderToStaticMarkup(React.createElement(ClipboardMethodProbe))
    expect(markup).toContain('data-copy-type="function"')
    expect(markup).toContain('data-reset-type="function"')
  })
})
