/**
 * RecentMints component displaying the latest minting activity.
 * 
 * Shows a list of recent NFT mints with timestamps, addresses, and
 * links to explorer transactions. Includes loading and empty states.
 * 
 * @module RecentMints
 */

import PropTypes from 'prop-types'
import './RecentMints.css'
import { formatAddress, formatExactTime, formatRelativeTime } from '../utils/collection'
import { getExplorerUrl } from '../contract'

/** Number of skeleton placeholder rows to show while recent mints are loading. */
const RECENT_MINTS_SKELETON_COUNT = 3;

/**
 * normalizeMintTimestamp - Convert a mint timestamp to milliseconds.
 * Values already in ms are returned as-is; Unix second timestamps are scaled up.
 * Non-finite values fall back to Date.now().
 * @param {number|string} timestamp - Raw timestamp value
 * @returns {number} Timestamp in milliseconds
 */
export function normalizeMintTimestamp(timestamp) {
  const numericTimestamp = Number(timestamp)
  if (!Number.isFinite(numericTimestamp)) return Date.now()
  return numericTimestamp > 1_000_000_000_000 ? numericTimestamp : numericTimestamp * 1000
}

/**
 * getFirstNonEmpty - Return the first non-empty value from an array of candidates.
 * Trims string entries before checking; falls back to `fallback` when none pass.
 * @param {Array<string|*>} values - Candidate values
 * @param {*} [fallback=null] - Fallback when all values are empty
 * @returns {*} First non-empty value or fallback
 */
function getFirstNonEmpty(values, fallback = null) {
  const normalized = values
    .map((value) => (typeof value === 'string' ? value.trim() : value))
    .find(Boolean)
  return normalized ?? fallback
}

/**
 * getRecentMintTxId - Extract the transaction ID from a recent mint record.
 * Checks `txId` and `txHash` fields in order.
 * @param {Object} mint - Mint record
 * @returns {string|null} Transaction ID or null
 */
export function getRecentMintTxId(mint) {
  return getFirstNonEmpty([mint?.txId, mint?.txHash])
}

/**
 * getRecentMintAddress - Extract the minter address from a recent mint record.
 * @param {Object} mint - Mint record
 * @param {string} [fallback='Unknown'] - Fallback value when no address is found
 * @returns {string} Minter address or fallback
 */
export function getRecentMintAddress(mint, fallback = 'Unknown') {
  return getFirstNonEmpty([mint?.minter, mint?.address], fallback)
}

/**
 * getRecentMintTokenDescriptor - Build display labels for a minted or pending token.
 * @param {string|number|null|undefined} tokenId - Token ID (null/empty means pending)
 * @returns {{ tokenLabel: string, receiptLabel: string, explorerLabel: string, isPendingToken: boolean }}
 */
export function getRecentMintTokenDescriptor(tokenId) {
  const normalizedTokenId = typeof tokenId === 'string' ? tokenId.trim() : tokenId
  const isPendingToken = normalizedTokenId === '' || normalizedTokenId == null
  const tokenLabel = isPendingToken ? 'Pending' : `#${normalizedTokenId}`
  const receiptLabel = isPendingToken ? 'Submitted ↗' : 'Minted ↗'
  const explorerLabel = isPendingToken
    ? 'View submitted transaction on Explorer'
    : `View transaction for token #${normalizedTokenId} on Explorer`

  return {
    tokenLabel,
    receiptLabel,
    explorerLabel,
    isPendingToken
  }
}

/**
 * getRecentMintKey - Compute a stable React list key for a recent mint record.
 * Falls back to a tokenId+timestamp composite when txId is absent.
 * @param {{ txId?: string, tokenId?: string|number, timestamp?: number }} param0
 * @returns {string} Unique key string
 */
export function getRecentMintKey({ txId, tokenId, timestamp }) {
  return txId || `${tokenId ?? 'pending'}-${timestamp}`
}

export function RecentMints({ items = [] }) {
  const isLoading = items === null
  const recentMints = Array.isArray(items) ? items : []

  if (isLoading) {
    return (
      <section className="recent-mints" aria-label="Recent mints loading" title="Recent mint activity is loading" data-state="loading" data-count={String(RECENT_MINTS_SKELETON_COUNT)} role="status" aria-live="polite">
        <h2 className="recent-mints__title">Recent Mints</h2>
        <div className="recent-mints__list" role="list" aria-label="Loading recent mint activity">
          {Array.from({ length: RECENT_MINTS_SKELETON_COUNT }, (_, i) => i).map((i) => (
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
      <section className="recent-mints" aria-label="Recent mints empty state" title="No recent mints available yet" data-state="empty" data-count="0">
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
      <section className="recent-mints" aria-label="Recent mints" aria-describedby="recent-mints-subtitle" title="Recent wallet mint submissions" data-state="ready" data-count={String(recentMints.length)} aria-live="polite" aria-atomic="true">
        <h2 className="recent-mints__title">Recent Mints</h2>
      <p className="recent-mints__subtitle" id="recent-mints-subtitle" title="Recent activity updates after wallet submission">Fresh activity from this browser appears here as soon as a wallet submission is sent.</p>
      <div className="recent-mints__list" role="list" aria-label="Recent mint activity" title="Recent mint activity">
        {recentMints.map((mint) => {
          const timestampMs = normalizeMintTimestamp(mint.timestamp)
          const txId = getRecentMintTxId(mint)
          const minterAddress = getRecentMintAddress(mint)
          const mintTokenDescriptor = getRecentMintTokenDescriptor(mint.tokenId)
          const { tokenLabel, receiptLabel, explorerLabel, isPendingToken } = mintTokenDescriptor
          const mintKey = getRecentMintKey({ txId, tokenId: mint.tokenId, timestamp: mint.timestamp })
          return (
            <div key={mintKey} className="mint-item" role="listitem" data-token-state={isPendingToken ? 'pending' : 'minted'} aria-label={`Mint ${tokenLabel} by ${formatAddress(minterAddress)}`}>
              <div className="mint-item__avatar">
                <span title={`Token status ${tokenLabel}`} aria-hidden="true">{tokenLabel}</span>
              </div>
              <div className="mint-item__info">
                <span className="mint-item__address">
                  <span title={minterAddress}>
                    {formatAddress(minterAddress)}
                  </span>
                </span>
                <span className="mint-item__time">
                  <time dateTime={new Date(timestampMs).toISOString()} title={formatExactTime(timestampMs)}>
                    {formatRelativeTime(timestampMs)}
                  </time>
                </span>
              </div>
              <div className={`mint-item__badge ${txId ? '' : 'mint-item__badge--pending'}`} data-pending={txId ? 'false' : 'true'}>
                {txId ? (
                  <a
                    href={getExplorerUrl(txId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${explorerLabel} (opens in a new tab)`}
                    title={`${receiptLabel}: ${txId}`}
                  >
                    {receiptLabel}
                  </a>
                ) : (
                  <span role="status" aria-live="polite" aria-atomic="true" aria-label="Transaction pending confirmation" title="Mint submission is pending confirmation">Pending</span>
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
    timestamp: PropTypes.number,
    minter: PropTypes.string,
    address: PropTypes.string,
    txId: PropTypes.string,
    txHash: PropTypes.string
  }))
}

/**
 * Default export for RecentMints component.
 * @type {React.FC<RecentMintsProps>}
 */
export default RecentMints
