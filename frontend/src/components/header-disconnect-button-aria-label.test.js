import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

describe('Header', () => {
  it('exposes a disconnect aria label for connected state button', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account: 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT',
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('aria-label="Disconnect wallet"')
  })
})
