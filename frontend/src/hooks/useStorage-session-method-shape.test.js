import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useSessionStorage } from './useStorage'

function SessionStorageMethodsProbe() {
  const [, setValue, removeValue] = useSessionStorage('session-method-key', 'value')
  return React.createElement('div', {
    'data-set-type': typeof setValue,
    'data-remove-type': typeof removeValue
  })
}

describe('useSessionStorage', () => {
  it('exposes setter and remover methods as functions', () => {
    const markup = renderToStaticMarkup(React.createElement(SessionStorageMethodsProbe))
    expect(markup).toContain('data-set-type="function"')
    expect(markup).toContain('data-remove-type="function"')
  })
})
