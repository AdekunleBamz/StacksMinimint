import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

describe('Header', () => {
  it('renders wallet connection status text in live region', () => {
    const connectedMarkup = renderToStaticMarkup(
      React.createElement(Header, {
        account: 'SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7',
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )
    const disconnectedMarkup = renderToStaticMarkup(
      React.createElement(Header, {
        account: null,
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(connectedMarkup).toContain('Wallet connected')
    expect(disconnectedMarkup).toContain('Wallet disconnected')
  })
})
