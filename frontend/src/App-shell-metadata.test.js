import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'

const mockWallet = {
  address: null,
  isConnected: false,
  connect: vi.fn(),
  disconnect: vi.fn(),
  isConnecting: false
}

const mockContract = {
  contractInfo: null,
  mint: vi.fn(async () => null),
  isLoading: false,
  error: null
}

const mockToast = {
  showToast: vi.fn(),
  toasts: [],
  removeToast: vi.fn()
}

vi.mock('./hooks', () => ({
  useWallet: () => mockWallet,
  useContract: () => mockContract,
  useToast: () => mockToast
}))

vi.mock('./components', () => ({
  Header: () => React.createElement('header', null, 'Header'),
  MintCard: () => React.createElement('div', null, 'MintCard'),
  Stats: () => React.createElement('div', null, 'Stats'),
  RecentMints: () => React.createElement('div', null, 'RecentMints'),
  Gallery: () => React.createElement('div', null, 'Gallery'),
  Footer: () => React.createElement('footer', null, 'Footer'),
  ErrorBoundary: ({ children }) => React.createElement(React.Fragment, null, children),
  Toast: ({ message }) => React.createElement('div', null, message)
}))

describe('App shell metadata', () => {
  it('exposes connected and contract-ready metadata when wallet and contract are available', () => {
    mockWallet.address = 'SP123'
    mockWallet.isConnected = true
    mockWallet.isConnecting = false
    mockContract.contractInfo = { maxSupply: 100 }
    mockToast.toasts = []

    const markup = renderToStaticMarkup(React.createElement(App))

    expect(markup).toContain('data-connection-state="connected"')
    expect(markup).toContain('data-has-contract-info="true"')
  })

  it('marks the back-to-top control as hidden before scroll interactions', () => {
    mockWallet.address = null
    mockWallet.isConnected = false
    mockWallet.isConnecting = false
    mockContract.contractInfo = null
    mockToast.toasts = []

    const markup = renderToStaticMarkup(React.createElement(App))

    expect(markup).toContain('data-visible="false"')
    expect(markup).toContain('title="Back to top"')
  })

  it('exposes toast stack count metadata for active notifications', () => {
    mockWallet.address = null
    mockWallet.isConnected = false
    mockWallet.isConnecting = false
    mockContract.contractInfo = null
    mockToast.toasts = [
      { id: '1', message: 'Mint sent', type: 'success' },
      { id: '2', message: 'Mint pending', type: 'info' }
    ]

    const markup = renderToStaticMarkup(React.createElement(App))

    expect(markup).toContain('data-toast-count="2"')
    expect(markup).toContain('Mint sent')
    expect(markup).toContain('Mint pending')
  })
})
