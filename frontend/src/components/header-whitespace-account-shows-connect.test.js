import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

describe('Header', () => {
  it('keeps the connect action visible when account only contains spaces', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account: '   ',
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('Connect Wallet')
    expect(markup).not.toContain('Disconnect')
  })
})
