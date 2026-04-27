import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

describe('Header', () => {
  it('uses a trimmed account value for wallet title text', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account: '  SP3FBR2AGK4B2Y6A4J91G4FJ3P1N5X4K8TB8Z3YQH  ',
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('title="SP3FBR2AGK4B2Y6A4J91G4FJ3P1N5X4K8TB8Z3YQH"')
    expect(markup).toContain('data-account-length="41"')
  })
})
