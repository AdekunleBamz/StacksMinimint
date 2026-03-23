import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

describe('Header', () => {
  it('shows connect wallet text when idle and disconnected', () => {
    const markup = renderToStaticMarkup(React.createElement(Header, {
      account: null,
      onConnect: () => {},
      onDisconnect: () => {},
      isConnecting: false
    }))

    expect(markup).toContain('Connect Wallet')
  })
})
