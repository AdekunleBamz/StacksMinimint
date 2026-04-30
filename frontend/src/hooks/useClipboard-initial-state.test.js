import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useClipboard } from './useClipboard'

function ClipboardProbe() {
  const { copied, error } = useClipboard()
  return React.createElement('div', {
    'data-copied': String(copied),
    'data-error': String(error)
  })
}

describe('useClipboard', () => {
  it('starts with copied=false and error=null', () => {
    const markup = renderToStaticMarkup(React.createElement(ClipboardProbe))
    expect(markup).toContain('data-copied="false"')
    expect(markup).toContain('data-error="null"')
  })
})
