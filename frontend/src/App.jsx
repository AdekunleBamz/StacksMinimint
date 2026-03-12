import { useState, useEffect } from 'react'
import { useStacksWallet } from './hooks/useStacksWallet'
import { useStacksContract } from './hooks/useStacksContract'
import Header from './components/Header'
import MintCard from './components/MintCard'
import Stats from './components/Stats'
import RecentMints from './components/RecentMints'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { getExplorerUrl } from './contract'
import './App.css'

function App() {
  const { address, isConnected, connect, disconnect, isConnecting, network } = useStacksWallet()
  const { contractInfo, mint, isLoading, error: contractError } = useStacksContract(address)

  const [recentMints, setRecentMints] = useState([])
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleMint = async (tokenURI) => {
    const result = await mint(tokenURI)
    if (result) {
      setRecentMints(prev => [result, ...prev].slice(0, 5))
    }
    return result
  }

  return (
    <div className="app">
      <div className="page-load-bar"></div>
      <a className="skip-link" href="#main-content">
        Skip to minting content
      </a>
      <Header
        account={address}
        onConnect={connect}
        onDisconnect={disconnect}
        isConnecting={isConnecting}
      />

      <main className="main" id="main-content">
        <section className="hero" id="top">
          <div className="hero__content">
            <span className="hero__badge">SIP-009</span>
            <h1 className="hero__title">NFTminimint</h1>
            <p className="hero__subtitle">
              A minimal, gas-efficient NFT minting experience on Stacks
            </p>
          </div>
        </section>

        {(contractError) && (
          <div className="error-banner">
            <span className="error-banner__icon">⚠️</span>
            <span>{contractError}</span>
          </div>
        )}

        <div className="content-grid" id="mint-section">
          <div className="content-grid__main">
            <MintCard
              contractInfo={contractInfo}
              onMint={handleMint}
              account={address}
              isConnected={isConnected}
              onConnect={connect}
            />
          </div>

          <aside className="content-grid__sidebar">
            <Stats contractInfo={contractInfo} isLoading={isLoading} />
            <RecentMints />
          </aside>
        </div>

        <Gallery />
      </main>

      <button
        className={`back-to-top ${showScroll ? 'back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      <Footer />
    </div>
  )
}

export default App
