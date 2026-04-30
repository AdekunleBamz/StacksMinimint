import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useLocalStorage } from './useStorage'

function LocalStorageMethodsProbe() {
  const [, setValue, removeValue] = useLocalStorage('local-method-key', 'value')
  return React.createElement('div', {
    'data-set-type': typeof setValue,
    'data-remove-type': typeof removeValue
  })
}

describe('useLocalStorage', () => {
  it('exposes setter and remover methods as functions', () => {
    const markup = renderToStaticMarkup(React.createElement(LocalStorageMethodsProbe))
    expect(markup).toContain('data-set-type="function"')
    expect(markup).toContain('data-remove-type="function"')
  })
})
