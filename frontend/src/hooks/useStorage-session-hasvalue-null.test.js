import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useSessionStorage } from './useStorage'

function SessionStorageMetaProbe() {
  const [, , , meta] = useSessionStorage('session-meta-key', null)
  return React.createElement('div', { 'data-has-value': String(meta.hasValue) })
}

describe('useSessionStorage', () => {
  it('reports hasValue false when current value is null', () => {
    const markup = renderToStaticMarkup(React.createElement(SessionStorageMetaProbe))
    expect(markup).toContain('data-has-value="false"')
  })
})
