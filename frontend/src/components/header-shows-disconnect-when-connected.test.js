import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header shows disconnect when connected behavior coverage.
// Scope note: validates header shows disconnect when connected behavior for regressions.
describe('Header', () => {
  it('shows disconnect controls when an account is connected', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account: 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT',
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('Disconnect')
    expect(markup).toContain('Wallet')
  })
})
