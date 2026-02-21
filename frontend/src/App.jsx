import { useState } from 'react'
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

  const handleMint = async (tokenURI) => {
    const result = await mint(tokenURI)
    if (result) {
      setRecentMints(prev => [result, ...prev].slice(0, 5))
    }
    return result
  }

  return (
    <div className="app">
      <Header 
        account={address}
        onConnect={connect}
        onDisconnect={disconnect}
        isConnecting={isConnecting}
      />
      
      <main className="main">
        <section className="hero">
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

        <div className="content-grid">
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

      <Footer />
    </div>
  )
}

export default App
