import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './RecentMints.css'
import { formatAddress } from '../utils/collection'
import { getExplorerUrl } from '../contract'

function RecentMints({ items = [] }) {
  const [recentMints, setRecentMints] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const formatTime = (timestamp) => {
    const now = Date.now()
    const diff = Math.max(now - timestamp * 1000, 0)
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  const formatExactTime = (timestamp) => {
    if (!timestamp) return 'Unknown time'

    return new Intl.DateTimeFormat(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(new Date(timestamp * 1000))
  }

  useEffect(() => {
    if (items.length > 0) {
      setRecentMints(items)
      setIsLoading(false)
      return
    }

    setRecentMints([])
    setIsLoading(false)
  }, [items])

  if (isLoading) {
    return (
      <section className="recent-mints">
        <h2 className="recent-mints__title">Recent Mints</h2>
        <div className="recent-mints__list" role="list" aria-label="Loading recent mint activity">
          {[1, 2, 3].map((i) => (
            <div key={i} className="mint-item mint-item--skeleton" role="listitem">
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
      <p className="recent-mints__subtitle">Fresh activity appears here after each mint confirmation.</p>
      <div className="recent-mints__list" role="list" aria-label="Recent mint activity">
        {recentMints.map((mint) => (
          <div key={`${mint.tokenId}-${mint.timestamp}`} className="mint-item" role="listitem">
            <div className="mint-item__avatar">
              <span>#{mint.tokenId}</span>
            </div>
            <div className="mint-item__info">
              <span className="mint-item__address">
                {formatAddress(mint.minter)}
              </span>
              <span className="mint-item__time">
                <time dateTime={new Date(mint.timestamp * 1000).toISOString()} title={formatExactTime(mint.timestamp)}>
                  {formatTime(mint.timestamp)}
                </time>
              </span>
            </div>
            <div className="mint-item__badge">
              <a
                href={getExplorerUrl(mint.txId || mint.txHash)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View transaction for token #${mint.tokenId} on Explorer`}
              >
                Minted ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

RecentMints.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    tokenId: PropTypes.number.isRequired,
    timestamp: PropTypes.number.isRequired,
    minter: PropTypes.string.isRequired
  }))
}

export default RecentMints
