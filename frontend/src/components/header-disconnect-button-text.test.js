import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header disconnect button text behavior coverage.
// Scope note: validates header disconnect button text behavior for regressions.
describe('Header', () => {
  it('shows disconnect text when an account is connected', () => {
    const markup = renderToStaticMarkup(React.createElement(Header, {
      account: 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT',
      onConnect: () => {},
      onDisconnect: () => {},
      isConnecting: false
    }))

    expect(markup).toContain('Disconnect')
  })
})
