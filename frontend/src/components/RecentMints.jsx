import './RecentMints.css'
import { getExplorerUrl } from '../contract'
import {
  formatAddress,
  formatExactTime,
  formatRelativeTime
} from '../utils/collection'

function RecentMints({ items = [], onCopyAddress = () => {}, onCopyTransaction = () => {} }) {
  if (!items.length) {
    return (
      <section className="recent-mints">
        <div className="recent-mints__header">
          <div>
            <h2 className="recent-mints__title">Recent Activity</h2>
            <p className="recent-mints__subtitle">Receipts from this device appear here right after wallet confirmation.</p>
          </div>
          <span className="recent-mints__count">0</span>
        </div>

        <div className="recent-mints__empty">
          <span className="recent-mints__empty-icon">Receipt</span>
          <p>No local activity yet. Submit a mint and the receipt will stay pinned here for quick access.</p>
          <a className="recent-mints__cta" href="#mint-section">
            Open the mint form
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="recent-mints">
      <div className="recent-mints__header">
        <div>
          <h2 className="recent-mints__title">Recent Activity</h2>
          <p className="recent-mints__subtitle">Receipts from this device appear here right after wallet confirmation.</p>
        </div>
        <span className="recent-mints__count">{items.length}</span>
      </div>

      <div className="recent-mints__list">
        {items.map((item) => (
          <article key={item.id} className="mint-item">
            <div className="mint-item__avatar">
              <span>{item.metadataKind === 'ipfs' ? 'IPFS' : 'HTTPS'}</span>
            </div>

            <div className="mint-item__info">
              <span className="mint-item__label">{item.metadataLabel}</span>
              <span className="mint-item__address">{formatAddress(item.address, 6, 4)}</span>
              <time
                className="mint-item__time"
                dateTime={new Date(item.createdAt).toISOString()}
                title={formatExactTime(item.createdAt)}
              >
                {formatRelativeTime(item.createdAt)}
              </time>
            </div>

            <div className="mint-item__actions">
              <button
                type="button"
                className="mint-item__copy"
                onClick={() => onCopyAddress(item.address)}
              >
                Copy wallet
              </button>
              <button
                type="button"
                className="mint-item__copy"
                onClick={() => onCopyTransaction(item.txId)}
              >
                Copy tx
              </button>
              <a
                href={getExplorerUrl(item.txId)}
                target="_blank"
                rel="noopener noreferrer"
                className="mint-item__link"
              >
                Explorer
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RecentMints
