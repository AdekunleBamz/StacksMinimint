// Note: App module
// Scope: keep App concerns isolated.

import { useState, useEffect } from 'react'
import { useWallet, useContract, useToast } from './hooks'
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

function App() {
  const { address, isConnected, connect, disconnect, isConnecting } = useWallet()
  const { contractInfo, mint, isLoading, error: contractError } = useContract(address)
  const { showToast, toasts, removeToast } = useToast()

  const [recentMints, setRecentMints] = useState([])
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      const shouldShow = window.pageYOffset > 400
      setShowScroll(prev => (prev === shouldShow ? prev : shouldShow))
    }
    checkScrollTop()
    window.addEventListener('scroll', checkScrollTop, { passive: true })
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleMint = async (tokenURI) => {
    const result = await mint(tokenURI)
    if (result) {
      showToast('Transaction submitted to Stacks.', 'success')
      setRecentMints(prev => [result, ...prev].slice(0, 5))
    }
    return result
  }

  return (
    <ErrorBoundary>
      <div className="app">
        <div className="page-load-bar"></div>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header
          account={address}
          onConnect={connect}
          onDisconnect={disconnect}
          isConnecting={isConnecting}
        />

        <main className="main" id="main-content">
          <section className="hero">
            <div className="hero__content">
              <span className="hero__badge">SIP-009</span>
              <h1 className="hero__title">NFTminimint</h1>
              <p className="hero__subtitle">
                A wallet-first, gas-efficient NFT minting experience on Stacks
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
          className={`back-to-top ${showScroll ? 'back-to-top--visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
          aria-hidden={!showScroll}
          tabIndex={showScroll ? 0 : -1}
          disabled={!showScroll}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>

        <Footer />

        <div className="toast-stack" aria-live="polite" aria-label="Notifications" aria-relevant="additions text">
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
