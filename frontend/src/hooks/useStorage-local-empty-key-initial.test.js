import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useLocalStorage } from './useStorage'

function LocalStorageProbe() {
  const [value] = useLocalStorage('   ', 'fallback-value')
  return React.createElement('div', { 'data-value': value })
}

describe('useLocalStorage', () => {
  it('returns the initial value when storage key is blank', () => {
    const markup = renderToStaticMarkup(React.createElement(LocalStorageProbe))
    expect(markup).toContain('data-value="fallback-value"')
  })
})
