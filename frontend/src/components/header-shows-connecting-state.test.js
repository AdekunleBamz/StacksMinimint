import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header shows connecting state behavior coverage.
// Scope note: validates header shows connecting state behavior for regressions.
describe('Header', () => {
  it('shows connecting copy while wallet connection is pending', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account: null,
        isConnecting: true,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('Connecting...')
    expect(markup).toContain('aria-busy="true"')
  })
})
