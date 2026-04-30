import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useLocalStorage } from './useStorage'

function LocalStorageMetaProbe() {
  const [, , , meta] = useLocalStorage('local-meta-key', null)
  return React.createElement('div', { 'data-has-value': String(meta.hasValue) })
}

describe('useLocalStorage', () => {
  it('reports hasValue false when current value is null', () => {
    const markup = renderToStaticMarkup(React.createElement(LocalStorageMetaProbe))
    expect(markup).toContain('data-has-value="false"')
  })
})
