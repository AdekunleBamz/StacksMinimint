import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header truncates wallet address behavior coverage.
// Scope note: validates header truncates wallet address behavior for regressions.
describe('Header', () => {
  it('renders a shortened wallet address label for connected accounts', () => {
    const account = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account,
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('...')
    expect(markup).toContain('title="SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT"')
  })
})
