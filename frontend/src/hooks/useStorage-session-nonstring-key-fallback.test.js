import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useSessionStorage } from './useStorage'

function SessionStorageNonStringKeyProbe() {
  const [value] = useSessionStorage(42, 'session-nonstring-fallback')
  return React.createElement('div', { 'data-value': value })
}

describe('useSessionStorage', () => {
  it('returns initial value when key is not a string', () => {
    const markup = renderToStaticMarkup(React.createElement(SessionStorageNonStringKeyProbe))
    expect(markup).toContain('data-value="session-nonstring-fallback"')
  })
})
