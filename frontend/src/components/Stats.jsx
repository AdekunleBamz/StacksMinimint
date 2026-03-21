// Note: Stats module
// Scope: keep Stats concerns isolated.

import { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import './Stats.css'
import { formatExactTime, formatLimit, formatSTX } from '../utils/collection'

export function Stats({ contractInfo, isLoading, isConnected = false, recentActivityCount = 0 }) {
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    if (contractInfo) {
      setLastUpdated(new Date())
    }
  }, [contractInfo])
  const { stats, collectionState, progress, roundedProgress, remainingSupply, receiptLabel, totalSupply } = useMemo(() => {
    const totalSupply = contractInfo?.totalSupply || 0
    const maxSupply = contractInfo?.maxSupply ?? null
    const remainingSupply = typeof maxSupply === 'number'
      ? Math.max(maxSupply - totalSupply, 0)
      : null
    const progress = typeof maxSupply === 'number' && maxSupply > 0
      ? Math.min((totalSupply / maxSupply) * 100, 100)
      : 0
    const roundedProgress = Number(progress.toFixed(1))
    const collectionState = contractInfo?.isPaused === true
      ? { label: 'Paused', tone: 'warning' }
      : remainingSupply === 0 && maxSupply !== null
        ? { label: 'Sold out', tone: 'critical' }
        : { label: 'Ready', tone: 'success' }
    const receiptLabel = recentActivityCount === 1 ? 'local receipt' : 'local receipts'

    const stats = [
      {
        label: 'Minted',
        value: `${totalSupply}`,
        detail: 'Total submissions minted so far'
      },
      {
        label: 'Remaining',
        value: remainingSupply === null ? 'Open' : `${remainingSupply}`,
        detail: remainingSupply === null ? 'Supply limit is not set in this UI' : 'Supply left before the collection sells out'
      },
      {
        label: 'Mint price',
        value: `${formatSTX(contractInfo?.mintFee)} STX`,
        detail: 'Post-condition amount per mint'
      },
      {
        label: 'Wallet cap',
        value: formatLimit(contractInfo?.maxPerWallet, 'Not set'),
        detail: isConnected ? 'Wallet connected and ready' : 'Connect to unlock the mint action'
      }
    ]

    return { stats, collectionState, progress, roundedProgress, remainingSupply, receiptLabel, totalSupply }
  }, [contractInfo, isConnected, recentActivityCount])

  if (isLoading) {
    return (
      <section className="stats" aria-busy="true">
        <h2 className="stats__title">Collection Stats</h2>
        <p className="stats__subtitle">Supply, pricing, and wallet limits stay visible while you mint.</p>
        <div className="stats__grid" role="list" aria-label="Loading collection stats">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="stat-card stat-card--skeleton" role="listitem">
              <div className="skeleton skeleton--value"></div>
              <div className="skeleton skeleton--label"></div>
              <div className="skeleton skeleton--copy"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="stats">
      <h2 className="stats__title">Collection Stats</h2>
      <p className="stats__subtitle">Supply, pricing, and wallet limits stay visible while you mint.</p>

      <div className="stats__headline">
        <span className={`stats__state stats__state--${collectionState.tone}`}>
          {collectionState.label}
        </span>
        <div className="stats__session" aria-live="polite">
          <span>{isConnected ? 'Wallet connected' : 'Connect wallet to mint'}</span>
          <span>{recentActivityCount} {receiptLabel}</span>
        </div>
        <div className="stats__timestamp" aria-live="polite">
          Last updated:{' '}
          <time dateTime={lastUpdated.toISOString()}>
            {formatExactTime(lastUpdated.getTime())}
          </time>
        </div>
      </div>

      <div className="stats__progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={roundedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Mint progress"
          aria-valuetext={
            remainingSupply === null
              ? `${roundedProgress}% of the configured supply minted`
              : `${totalSupply} minted, ${remainingSupply} remaining`
          }
        >
          <div
            className="progress-bar__fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="progress-text">
          <span>{roundedProgress}% of configured supply minted</span>
          <span>{remainingSupply === null ? 'Supply limit not configured' : `${remainingSupply} items remaining`}</span>
        </div>
      </div>

      <ul className="stats__grid" aria-label="Collection metrics">
        {stats.map((stat) => (
          <li key={stat.label} className="stat-card">
            <span className="stat-card__label">{stat.label}</span>
            <span className="stat-card__value">{stat.value}</span>
            <p className="stat-card__detail">{stat.detail}</p>
          </li>
        ))}
      </ul>

      <p className="stats__footnote">
        {isConnected
          ? 'Wallet-specific caps and pause state appear when available from the connected contract context.'
          : 'Connect a wallet to load address-specific mint caps and account context.'}
      </p>
    </section>
  )
}

Stats.propTypes = {
  contractInfo: PropTypes.shape({
    totalSupply: PropTypes.number,
    maxSupply: PropTypes.number,
    mintFee: PropTypes.number,
    maxPerWallet: PropTypes.number,
    isPaused: PropTypes.bool
  }),
  isLoading: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool,
  recentActivityCount: PropTypes.number
}
