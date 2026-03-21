// Note: Recentmints module
// Scope: keep RecentMints concerns isolated.

import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './RecentMints.css'
import { formatAddress, formatExactTime, formatRelativeTime } from '../utils/collection'
import { getExplorerUrl } from '../contract'

export function RecentMints({ items = [] }) {
  const [recentMints, setRecentMints] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
        <div className="recent-mints__empty" role="status" aria-live="polite">
          <span className="recent-mints__empty-icon" aria-hidden="true">🎨</span>
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
        {recentMints.map((mint) => {
          const txId = mint.txId || mint.txHash
          const tokenLabel = mint.tokenId == null ? 'Pending' : `#${mint.tokenId}`
          return (
            <div key={`${mint.tokenId}-${mint.timestamp}`} className="mint-item" role="listitem">
              <div className="mint-item__avatar">
                <span>{tokenLabel}</span>
              </div>
              <div className="mint-item__info">
                <span className="mint-item__address">
                  {formatAddress(mint.minter)}
                </span>
                <span className="mint-item__time">
                  <time dateTime={new Date(mint.timestamp * 1000).toISOString()} title={formatExactTime(mint.timestamp * 1000)}>
                    {formatRelativeTime(mint.timestamp * 1000)}
                  </time>
                </span>
              </div>
              <div className={`mint-item__badge ${txId ? '' : 'mint-item__badge--pending'}`}>
                {txId ? (
                  <a
                    href={getExplorerUrl(txId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View transaction for token #${mint.tokenId} on Explorer`}
                  >
                    Minted ↗
                  </a>
                ) : (
                  <span aria-live="polite">Pending</span>
                )}
              </div>
            </div>
          )
        })}
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
