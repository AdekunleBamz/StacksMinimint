import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useLocalStorage } from './useStorage'

function LocalStorageMetaProbe() {
  const [, , , meta] = useLocalStorage('sample-key', 'value')
  return React.createElement('div', { 'data-ready': String(meta.isReady), 'data-has-value': String(meta.hasValue) })
}

describe('useLocalStorage', () => {
  it('marks isReady as false during server rendering', () => {
    const markup = renderToStaticMarkup(React.createElement(LocalStorageMetaProbe))
    expect(markup).toContain('data-ready="false"')
    expect(markup).toContain('data-has-value="true"')
  })
})
