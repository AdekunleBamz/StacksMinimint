import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useSessionStorage } from './useStorage'

function SessionStorageHasValueProbe() {
  const [, , , meta] = useSessionStorage('session-bool-key', false)
  return React.createElement('div', { 'data-has-value': String(meta.hasValue) })
}

describe('useSessionStorage', () => {
  it('reports hasValue true for boolean false values', () => {
    const markup = renderToStaticMarkup(React.createElement(SessionStorageHasValueProbe))
    expect(markup).toContain('data-has-value="true"')
  })
})
