import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

describe('Header', () => {
  it('emits connected and disconnected metadata states on the root header', () => {
    const connectedMarkup = renderToStaticMarkup(
      React.createElement(Header, {
        account: 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT',
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )
    const disconnectedMarkup = renderToStaticMarkup(
      React.createElement(Header, {
        account: null,
        isConnecting: true,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(connectedMarkup).toContain('data-connected="true"')
    expect(connectedMarkup).toContain('data-connecting="false"')
    expect(disconnectedMarkup).toContain('data-connected="false"')
    expect(disconnectedMarkup).toContain('data-connecting="true"')
  })
})
