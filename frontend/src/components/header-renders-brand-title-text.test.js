import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

// Regression note: preserve header renders brand title text behavior coverage.
// Scope note: validates header renders brand title text behavior for regressions.
describe('Header', () => {
  it('renders the StacksMinimint brand title', () => {
    const markup = renderToStaticMarkup(React.createElement(Header, {
      account: null,
      onConnect: () => {},
      onDisconnect: () => {},
      isConnecting: false
    }))

    expect(markup).toContain('StacksMinimint')
  })
})
