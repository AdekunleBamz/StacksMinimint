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
  Header: () => <header>Header</header>,
  MintCard: () => <div>MintCard</div>,
  Stats: () => <div>Stats</div>,
  RecentMints: () => <div>RecentMints</div>,
  Gallery: () => <div>Gallery</div>,
  Footer: () => <footer>Footer</footer>,
  ErrorBoundary: ({ children }) => <>{children}</>,
  Toast: ({ message }) => <div>{message}</div>
}))

describe('App shell metadata', () => {
  it('exposes connected and contract-ready metadata when wallet and contract are available', () => {
    mockWallet.address = 'SP123'
    mockWallet.isConnected = true
    mockWallet.isConnecting = false
    mockContract.contractInfo = { maxSupply: 100 }
    mockToast.toasts = []

    const markup = renderToStaticMarkup(<App />)

    expect(markup).toContain('data-connection-state="connected"')
    expect(markup).toContain('data-has-contract-info="true"')
  })
})
