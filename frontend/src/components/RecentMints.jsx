// Note: Recentmints module
// Scope: keep RecentMints concerns isolated.

import PropTypes from 'prop-types'
import './RecentMints.css'
import { formatAddress, formatExactTime, formatRelativeTime } from '../utils/collection'
import { getExplorerUrl } from '../contract'

function getMintTimestampMs(timestamp) {
  if (!Number.isFinite(timestamp)) return Date.now()
  return timestamp > 1_000_000_000_000 ? timestamp : timestamp * 1000
}

export function RecentMints({ items = [] }) {
  const isLoading = items === null
  const recentMints = Array.isArray(items) ? items : []

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
          <p>No local mint receipts yet.</p>
          <p className="recent-mints__empty-copy">Your next wallet submission will appear here.</p>
        </div>
      </section>
    )
  }

  return (
      <section className="recent-mints">
        <h2 className="recent-mints__title">Recent Mints</h2>
      <p className="recent-mints__subtitle">Fresh activity appears here as soon as a wallet submission is sent.</p>
      <div className="recent-mints__list" role="list" aria-label="Recent mint activity">
        {recentMints.map((mint) => {
          const timestampMs = getMintTimestampMs(mint.timestamp)
          const txId = mint.txId || mint.txHash
          const tokenLabel = mint.tokenId == null ? 'Pending' : `#${mint.tokenId}`
          const receiptLabel = mint.tokenId == null ? 'Submitted ↗' : 'Minted ↗'
          const explorerLabel = mint.tokenId == null
            ? 'View submitted transaction on Explorer'
            : `View transaction for token #${mint.tokenId} on Explorer`
          const mintKey = txId || `${mint.tokenId ?? 'pending'}-${mint.timestamp}`
          return (
            <div key={mintKey} className="mint-item" role="listitem">
              <div className="mint-item__avatar">
                <span>{tokenLabel}</span>
              </div>
              <div className="mint-item__info">
                <span className="mint-item__address">
                  <span title={mint.minter}>
                    {formatAddress(mint.minter)}
                  </span>
                </span>
                <span className="mint-item__time">
                  <time dateTime={new Date(timestampMs).toISOString()} title={formatExactTime(timestampMs)}>
                    {formatRelativeTime(timestampMs)}
                  </time>
                </span>
              </div>
              <div className={`mint-item__badge ${txId ? '' : 'mint-item__badge--pending'}`}>
                {txId ? (
                  <a
                    href={getExplorerUrl(txId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={explorerLabel}
                    title={txId}
                  >
                    {receiptLabel}
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
    tokenId: PropTypes.number,
    timestamp: PropTypes.number.isRequired,
    minter: PropTypes.string.isRequired,
    txId: PropTypes.string,
    txHash: PropTypes.string
  }))
}
