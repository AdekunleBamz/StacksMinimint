/**
 * Main application component for StacksMinimint.
 * 
 * Manages wallet connection state, contract interactions, and coordinates
 * between child components for the minting experience.
 * 
 * @module App
 */

import { useState, useEffect, useCallback } from 'react'
import { useWallet, useContract, useToast } from './hooks'
import { SCROLL_THRESHOLD, MAX_RECENT_MINTS } from './constants'
import { 
  Header, 
  MintCard, 
  Stats, 
  RecentMints, 
  Gallery, 
  Footer, 
  ErrorBoundary,
  Toast
} from './components'
import './App.css'

/** Base document title shown at all times including when wallet is disconnected. */
const APP_BASE_TITLE = 'StacksMinimint - NFT Minting on Stacks';
/** Document title prefix shown when a wallet is connected. */
const APP_CONNECTED_TITLE_PREFIX = 'Connected';
/** Toast message shown when a mint transaction is successfully submitted. */
const MINT_SUCCESS_TOAST_MESSAGE = 'Transaction sent to Stacks.';

export function getAppConnectionState({ isConnected, isConnecting }) {
  if (isConnected) return 'connected'
  return isConnecting ? 'connecting' : 'disconnected'
}

export function getAppDocumentTitle(isConnected) {
  const baseTitle = APP_BASE_TITLE
  return isConnected ? `${APP_CONNECTED_TITLE_PREFIX} - ${baseTitle}` : baseTitle
}

export function getBackToTopControlState(showScroll) {
  return {
    isVisible: Boolean(showScroll),
    dataVisible: showScroll ? 'true' : 'false',
    ariaHidden: !showScroll,
    tabIndex: showScroll ? 0 : -1
  }
}

export function getToastStackMetadata(toasts) {
  const toastCount = Array.isArray(toasts) ? toasts.length : 0
  return {
    count: toastCount,
    countLabel: String(toastCount)
  }
}

export function appendRecentMintResult(previousItems, nextItem) {
  return [nextItem, ...previousItems].slice(0, MAX_RECENT_MINTS)
}

function App() {
  const { address, isConnected, connect, disconnect, isConnecting, error: walletError } = useWallet()
  const { contractInfo, mint, isLoading, error: contractError } = useContract(address)
  const { showToast, toasts, removeToast } = useToast()
  const connectionState = getAppConnectionState({ isConnected, isConnecting })
  const hasContractInfo = Boolean(contractInfo)

  const [recentMints, setRecentMints] = useState([])
  const [showScroll, setShowScroll] = useState(false)
  const backToTopState = getBackToTopControlState(showScroll)
  const toastStackMetadata = getToastStackMetadata(toasts)

  useEffect(() => {
    const checkScrollTop = () => {
      const shouldShow = window.scrollY > SCROLL_THRESHOLD
      setShowScroll(prev => (prev === shouldShow ? prev : shouldShow))
    }
    checkScrollTop()
    window.addEventListener('scroll', checkScrollTop, { passive: true })
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [])

  // Update document title based on connection state
  useEffect(() => {
    document.title = getAppDocumentTitle(isConnected)
  }, [isConnected])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleMint = async (tokenURI) => {
    const result = await mint(tokenURI)
    if (result) {
      showToast(MINT_SUCCESS_TOAST_MESSAGE, 'success')
      setRecentMints(prev => appendRecentMintResult(prev, result))
    }
    return result
  }

  return (
    <ErrorBoundary>
      <div className="app" data-connection-state={connectionState}>
        <div className="page-load-bar" aria-hidden="true"></div>
        <a className="skip-link" href="#main-content" title="Skip directly to the main minting dashboard">
          Skip to minting dashboard
        </a>
        <Header
          account={address}
          onConnect={connect}
          onDisconnect={disconnect}
          isConnecting={isConnecting}
          walletError={walletError}
        />

        <main className="main" id="main-content" data-has-contract-info={hasContractInfo ? 'true' : 'false'} title="StacksMinimint main dashboard">
          <section className="hero">
            <div className="hero__content">
              <span className="hero__badge" title="Built around the SIP-009 NFT standard">SIP-009</span>
              <h1 className="hero__title" title="StacksMinimint NFT minting app">StacksMinimint</h1>
              <p className="hero__subtitle" title="Wallet-first NFT minting with on-chain feedback">
                A wallet-first NFT minting flow with clear on-chain feedback and collection context
              </p>
            </div>
          </section>

          <div className="content-grid">
            <div className="content-grid__main">
              <MintCard
                contractInfo={contractInfo}
                onMint={handleMint}
                isConnected={isConnected}
                isConnecting={isConnecting}
                onConnect={connect}
                walletError={walletError}
                contractError={contractError}
              />
            </div>

            <aside className="content-grid__sidebar">
              <Stats
                contractInfo={contractInfo}
                isLoading={isLoading}
                isConnected={isConnected}
                recentActivityCount={recentMints.length}
              />
              <RecentMints items={recentMints} />
            </aside>
          </div>

          <Gallery />
        </main>

        <button
          type="button"
          className={`back-to-top ${backToTopState.isVisible ? 'back-to-top--visible' : ''}`}
          data-visible={backToTopState.dataVisible}
          onClick={scrollToTop}
          aria-label="Back to top of page"
          aria-controls="main-content"
          title="Back to top of page"
          aria-keyshortcuts="Enter Space"
          aria-hidden={backToTopState.ariaHidden}
          tabIndex={backToTopState.tabIndex}
          disabled={!backToTopState.isVisible}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>

        <Footer />

        <div className="toast-stack" role="region" data-toast-count={toastStackMetadata.countLabel} aria-live="polite" aria-atomic="true" aria-label="Notifications" aria-relevant="additions text" title="Notifications">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App
