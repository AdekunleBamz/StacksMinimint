import { useState, useEffect } from 'react'
import './RecentMints.css'

function RecentMints() {
  const [recentMints, setRecentMints] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const formatAddress = (addr) => {
    if (!addr) return ''
    return `${addr.slice(0, 5)}...${addr.slice(-5)}`
  }

  const formatTime = (timestamp) => {
    const now = Date.now()
    const diff = now - timestamp * 1000
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  useEffect(() => {
    // Simulated recent mints for demo
    // In production, this would query Transfer events from the contract
    const mockMints = [
      { tokenId: 1, minter: 'SP3H9XDH12...ABCDE', timestamp: Math.floor(Date.now()/1000) - 300 },
      { tokenId: 2, minter: 'SP2JAF9FG7...XYZ12', timestamp: Math.floor(Date.now()/1000) - 1200 },
      { tokenId: 3, minter: 'SP1P7WG5Z6...QWERT', timestamp: Math.floor(Date.now()/1000) - 3600 },
    ]

    setRecentMints(mockMints)
    setIsLoading(false)
  }, [provider, contractAddress])

  if (isLoading) {
    return (
      <section className="recent-mints">
        <h2 className="recent-mints__title">Recent Mints</h2>
        <div className="recent-mints__list">
          {[1, 2, 3].map((i) => (
            <div key={i} className="mint-item mint-item--skeleton">
              <div className="skeleton skeleton--avatar"></div>
              <div className="mint-item__info">
                <div className="skeleton skeleton--text"></div>
                <div className="skeleton skeleton--subtext"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (recentMints.length === 0) {
    return (
      <section className="recent-mints">
        <h2 className="recent-mints__title">Recent Mints</h2>
        <div className="recent-mints__empty">
          <span className="recent-mints__empty-icon">🎨</span>
          <p>No mints yet. Be the first!</p>
        </div>
      </section>
    )
  }

  return (
    <section className="recent-mints">
      <h2 className="recent-mints__title">Recent Mints</h2>
      <div className="recent-mints__list">
        {recentMints.map((mint) => (
          <div key={mint.tokenId} className="mint-item">
            <div className="mint-item__avatar">
              <span>#{mint.tokenId}</span>
            </div>
            <div className="mint-item__info">
              <span className="mint-item__address">
                {formatAddress(mint.minter)}
              </span>
              <span className="mint-item__time">
                {formatTime(mint.timestamp)}
              </span>
            </div>
            <div className="mint-item__badge">
              Minted
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentMints
