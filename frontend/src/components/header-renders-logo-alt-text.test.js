import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header renders logo alt text behavior coverage.
// Scope note: validates header renders logo alt text behavior for regressions.
describe('Header', () => {
  it('renders project logo with descriptive alt text', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Header, {
        account: null,
        isConnecting: false,
        onConnect: vi.fn(),
        onDisconnect: vi.fn()
      })
    )

    expect(markup).toContain('alt="StacksMinimint Logo"')
  })
})
