import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Header } from './Header'

describe('Header', () => {
  it('renders the NFTminimint brand title', () => {
    const markup = renderToStaticMarkup(React.createElement(Header, {
      account: null,
      onConnect: () => {},
      onDisconnect: () => {},
      isConnecting: false
    }))

    expect(markup).toContain('NFTminimint')
  })
})
