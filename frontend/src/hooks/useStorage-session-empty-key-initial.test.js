import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useSessionStorage } from './useStorage'

function SessionStorageProbe() {
  const [value] = useSessionStorage('   ', 'session-fallback')
  return React.createElement('div', { 'data-value': value })
}

describe('useSessionStorage', () => {
  it('returns the initial value when storage key is blank', () => {
    const markup = renderToStaticMarkup(React.createElement(SessionStorageProbe))
    expect(markup).toContain('data-value="session-fallback"')
  })
})
