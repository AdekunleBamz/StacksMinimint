import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header connect button aria connecting behavior coverage.
// Scope note: validates header connect button aria connecting behavior for regressions.
describe('Header', () => {
  it('uses connecting aria label while connect flow is pending', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account: null,
        isConnecting: true,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('aria-label="Connecting wallet"')
  })
})
