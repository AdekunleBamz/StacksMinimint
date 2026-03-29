import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header shows connect when disconnected behavior coverage.
describe('Header', () => {
  it('shows the connect wallet action when no account is connected', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account: null,
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('Connect Wallet')
    expect(markup).not.toContain('Disconnect')
  })
})
