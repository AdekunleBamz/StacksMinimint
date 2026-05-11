/**
 * Stats component for displaying collection metrics and progress.
 * 
 * Shows minted count, remaining supply, mint price, and wallet caps.
 * Includes a progress bar and collection state indicator.
 * 
 * @module Stats
 */

import { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import './Stats.css'
import { formatExactTime, formatLimit, formatSTX } from '../utils/collection'

/** Number of skeleton stat cards to show while collection data is loading. */
const STATS_SKELETON_COUNT = 4;
/** Minimum receipt count returned by the contract; negative values are clamped to this. */
const STATS_MIN_RECEIPT_COUNT = 0;

export function Stats({ contractInfo, isLoading, isConnected = false, recentActivityCount = 0 }) {
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const parsedRecentActivityCount = Number(recentActivityCount)
  const safeRecentActivityCount = Number.isFinite(parsedRecentActivityCount)
    ? Math.max(parsedRecentActivityCount, STATS_MIN_RECEIPT_COUNT)
    : 0

  // Track the last time collection data was refreshed for display purposes
  useEffect(() => {
    if (contractInfo) {
      setLastUpdated(new Date())
    }
  }, [contractInfo])

  /**
   * Derived stats array, collection state, and supply metrics computed from contractInfo.
   * @type {{ stats: Array, collectionState: Object, progress: number, roundedProgress: number, remainingSupply: number|null, receiptLabel: string, totalSupply: number }}
   */
  const { stats, collectionState, progress, roundedProgress, remainingSupply, receiptLabel, totalSupply } = useMemo(() => {
    const parsedTotalSupply = Number(contractInfo?.totalSupply)
    const parsedMaxSupply = Number(contractInfo?.maxSupply)
    const totalSupply = Number.isFinite(parsedTotalSupply) ? parsedTotalSupply : 0
    const maxSupply = Number.isFinite(parsedMaxSupply) ? parsedMaxSupply : null
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
    const receiptLabel = safeRecentActivityCount === 1 ? 'local receipt' : 'local receipts'

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
  }, [contractInfo, isConnected, safeRecentActivityCount])

  if (isLoading) {
    return (
      <section className="stats" data-loading="true" aria-busy="true" role="status" aria-live="polite">
        <h2 className="stats__title">Collection Stats</h2>
        <p className="stats__subtitle">Supply, pricing, and wallet limits at a glance while data loads.</p>
        <div className="stats__grid" role="list" aria-label="Loading collection stats">
          {Array.from({ length: STATS_SKELETON_COUNT }, (_, i) => i).map((item) => (
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
    <section
      className="stats"
      aria-labelledby="stats-title"
      aria-describedby="stats-subtitle"
      title="Collection statistics and mint readiness"
      data-last-updated-iso={lastUpdated.toISOString()}
      data-state-tone={collectionState.tone}
      data-connection={isConnected ? 'connected' : 'disconnected'}
      data-recent-activity-count={String(safeRecentActivityCount)}
    >
      <h2 className="stats__title" id="stats-title" title="Collection statistics">Collection Stats</h2>
      <p className="stats__subtitle" id="stats-subtitle">Supply, pricing, and wallet limits stay visible while you prepare each mint.</p>

      <div className="stats__headline">
        <span
          className={`stats__state stats__state--${collectionState.tone}`}
          title={`Collection status: ${collectionState.label}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {collectionState.label}
        </span>
        <div className="stats__session" aria-live="polite" aria-atomic="true">
          <span title={isConnected ? 'Your wallet is connected and ready for minting' : 'Connect a wallet to unlock mint actions'}>
            {isConnected ? 'Wallet connected' : 'Connect wallet to mint'}
          </span>
          <span title={`${safeRecentActivityCount} ${receiptLabel} in this browser session`}>
            {safeRecentActivityCount} {receiptLabel}
          </span>
        </div>
        <div className="stats__timestamp" aria-live="polite" aria-atomic="true">
          Last updated:{' '}
          <time dateTime={lastUpdated.toISOString()} title={formatExactTime(lastUpdated.getTime())}>
            {formatExactTime(lastUpdated.getTime())}
          </time>
        </div>
      </div>

      <div className="stats__progress">
        <div
          className="progress-bar"
          data-progress={String(roundedProgress)}
          role="progressbar"
          title={`${roundedProgress}% of configured supply minted`}
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
          <span title="Percent of configured collection supply that is minted">
            {roundedProgress}% of configured supply minted
          </span>
          <span title="Remaining collection supply based on configured max">
            {remainingSupply === null ? 'Supply limit not configured' : `${remainingSupply} items remaining`}
          </span>
        </div>
      </div>

      <ul className="stats__grid" aria-label="Collection metrics">
        {stats.map((stat) => (
          <li key={stat.label} className="stat-card">
            <span className="stat-card__label">{stat.label}</span>
            <span className="stat-card__value" title={stat.detail}>{stat.value}</span>
            <p className="stat-card__detail">{stat.detail}</p>
          </li>
        ))}
      </ul>

      <p
        className="stats__footnote"
        aria-live="polite"
        title={isConnected ? 'Wallet-specific stats are based on the connected address' : 'Connect a wallet to load wallet-specific stats'}
      >
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

/**
 * Default export for Stats component.
 * @type {React.FC<StatsProps>}
 */
export default Stats
