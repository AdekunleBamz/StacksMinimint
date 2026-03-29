import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header connect button aria idle behavior coverage.
// Scope note: validates header connect button aria idle behavior for regressions.
describe('Header', () => {
  it('uses connect wallet aria label when idle', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account: null,
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('aria-label="Connect wallet"')
  })
})
