import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header connect button text idle behavior coverage.
// Scope note: validates header connect button text idle behavior for regressions.
describe('Header', () => {
  it('shows connect wallet text when idle and disconnected', () => {
    const markup = renderToStaticMarkup(React.createElement(Header, {
      account: null,
      onConnect: () => {},
      onDisconnect: () => {},
      isConnecting: false
    }))

    expect(markup).toContain('Connect wallet')
  })
})
