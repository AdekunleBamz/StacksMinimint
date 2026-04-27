import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header address wrapper copy label behavior coverage.
// Scope note: validates header address wrapper copy label behavior for regressions.
describe('Header', () => {
  it('labels wallet address wrapper as copy action', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account: 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT',
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('aria-label="Copy wallet address to clipboard"')
    expect(markup).toContain('data-copy-state="idle"')
    expect(markup).toContain('data-copy-available="true"')
  })
})
