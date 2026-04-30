import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useLocalStorage } from './useStorage'

function LocalStorageNonStringKeyProbe() {
  const [value] = useLocalStorage(42, 'local-nonstring-fallback')
  return React.createElement('div', { 'data-value': value })
}

describe('useLocalStorage', () => {
  it('returns initial value when key is not a string', () => {
    const markup = renderToStaticMarkup(React.createElement(LocalStorageNonStringKeyProbe))
    expect(markup).toContain('data-value="local-nonstring-fallback"')
  })
})
