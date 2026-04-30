import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useClipboard } from './useClipboard'

function ClipboardTimeoutProbe() {
  const { copied, copy, reset } = useClipboard(0)
  return React.createElement('div', {
    'data-copied': String(copied),
    'data-copy-type': typeof copy,
    'data-reset-type': typeof reset
  })
}

describe('useClipboard', () => {
  it('stays usable when timeout is zero or non-positive', () => {
    const markup = renderToStaticMarkup(React.createElement(ClipboardTimeoutProbe))
    expect(markup).toContain('data-copied="false"')
    expect(markup).toContain('data-copy-type="function"')
    expect(markup).toContain('data-reset-type="function"')
  })
})
