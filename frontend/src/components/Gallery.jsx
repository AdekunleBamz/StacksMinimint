import { useEffect, useMemo, useRef, useState } from 'react'
import './Gallery.css'
import { getExplorerUrl } from '../contract'
import {
  formatAddress,
  formatExactTime,
  formatRelativeTime,
  getCardAccent,
  getMetadataGatewayUrl
} from '../utils/collection'

function Gallery({
  items = [],
  viewMode = 'grid',
  onViewModeChange = () => {},
  onCopyValue = () => {},
  prefersReducedMotion = false
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const closeButtonRef = useRef(null)
  const selectedAccent = selectedItem ? getCardAccent(selectedItem.txId) : null

  const filteredItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) {
      return items
    }

    return items.filter((item) =>
      [item.metadataLabel, item.tokenURI, item.txId, item.address]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query))
    )
  }, [items, searchTerm])

  useEffect(() => {
    if (!selectedItem) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedItem])

  useEffect(() => {
    if (!selectedItem) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedItem])

  useEffect(() => {
    if (selectedItem) {
      closeButtonRef.current?.focus()
    }
  }, [selectedItem])

  if (!items.length) {
    return (
      <section className="gallery">
        <div className="gallery__header">
          <div className="gallery__heading">
            <h2 className="gallery__title">Submission Gallery</h2>
            <p className="gallery__subtitle">Every locally submitted mint receipt can be reviewed here with its metadata URI.</p>
          </div>
        </div>

        <div className="gallery__empty">
          <span className="gallery__empty-icon">URI</span>
          <h3>No submissions yet</h3>
          <p>Once a mint is submitted, its metadata URL, wallet, and explorer receipt will appear here automatically.</p>
          <a className="gallery__clear-btn" href="#mint-section">
            Start a mint
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="gallery">
      <div className="gallery__header">
        <div className="gallery__heading">
          <h2 className="gallery__title">Submission Gallery</h2>
          <p className="gallery__subtitle">Every locally submitted mint receipt can be reviewed here with its metadata URI.</p>
        </div>

        <div className="gallery__toolbar">
          <div className="gallery__search">
            <label className="gallery__search-label" htmlFor="gallery-search">
              Search submissions
            </label>
            <div className="gallery__search-field">
              <input
                id="gallery-search"
                type="text"
                className="search-input"
                placeholder="Search by wallet, tx id, or metadata URI..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchTerm('')}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="gallery__controls" aria-label="Gallery layout">
            <button
              type="button"
              className={`view-btn ${viewMode === 'grid' ? 'view-btn--active' : ''}`}
              onClick={() => onViewModeChange('grid')}
            >
              Grid
            </button>
            <button
              type="button"
              className={`view-btn ${viewMode === 'list' ? 'view-btn--active' : ''}`}
              onClick={() => onViewModeChange('list')}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <div className="gallery__meta">
        <span>{filteredItems.length} submissions shown</span>
        <span>{viewMode === 'grid' ? 'Grid layout saved locally' : 'List layout saved locally'}</span>
      </div>

      {filteredItems.length === 0 ? (
        <div className="gallery__empty gallery__empty--search">
          <span className="gallery__empty-icon">Search</span>
          <h3>No matching submissions</h3>
          <p>Try a wallet fragment, tx id, or metadata host instead.</p>
          <button type="button" className="gallery__clear-btn" onClick={() => setSearchTerm('')}>
            Clear search
          </button>
        </div>
      ) : (
        <div className={`gallery__grid gallery__grid--${viewMode}`}>
          {filteredItems.map((item, index) => {
            const accent = getCardAccent(item.txId)

            return (
              <button
                key={item.id}
                type="button"
                className="nft-card"
                onClick={() => setSelectedItem(item)}
                style={{
                  '--card-primary': accent.primary,
                  '--card-secondary': accent.secondary,
                  '--card-glow': accent.glow,
                  '--motion-delay': prefersReducedMotion ? '0ms' : `${index * 60}ms`
                }}
              >
                <div className="nft-card__image-wrapper">
                  <div className="nft-card__art">
                    <span className="nft-card__art-chip">{item.metadataKind.toUpperCase()}</span>
                    <span className="nft-card__art-label">{item.metadataLabel}</span>
                    <span className="nft-card__art-copy">{formatRelativeTime(item.createdAt)}</span>
                  </div>
                </div>

                <div className="nft-card__info">
                  <h3 className="nft-card__name">{item.metadataLabel}</h3>
                  <div className="nft-card__meta">
                    <span className="nft-card__pill">Tx {item.txId.slice(0, 8)}</span>
                    <span className="nft-card__pill nft-card__pill--owner">{formatAddress(item.address, 6, 4)}</span>
                  </div>
                  <p className="nft-card__owner">
                    <span className="label">Metadata</span>
                    <span className="value">{item.tokenURI}</span>
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      )}

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="modal__close"
              onClick={() => setSelectedItem(null)}
              aria-label="Close submission details"
              type="button"
            >
              ×
            </button>

            <div className="modal__image">
              <div
                className="modal__art"
                style={{
                  '--card-primary': selectedAccent?.primary,
                  '--card-secondary': selectedAccent?.secondary,
                  '--card-glow': selectedAccent?.glow
                }}
              >
                <span>{selectedItem.metadataKind.toUpperCase()}</span>
                <strong>{selectedItem.metadataLabel}</strong>
                <small>{formatRelativeTime(selectedItem.createdAt)}</small>
              </div>
            </div>

            <div className="modal__content">
              <h2 className="modal__title" id="gallery-modal-title">
                Submission details
              </h2>

              <div className="modal__details">
                <div className="detail-row">
                  <span className="detail-label">Wallet</span>
                  <span className="detail-pill detail-pill--owner">{selectedItem.address}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Transaction</span>
                  <span className="detail-value detail-value--mono">{selectedItem.txId}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Submitted</span>
                  <span className="detail-value">{formatExactTime(selectedItem.createdAt)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Metadata URI</span>
                  <span className="detail-value detail-value--mono">{selectedItem.tokenURI}</span>
                </div>
              </div>

              <div className="modal__actions">
                <a
                  href={getExplorerUrl(selectedItem.txId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__btn modal__btn--primary"
                >
                  View explorer receipt
                </a>
                <button
                  type="button"
                  className="modal__btn modal__btn--secondary"
                  onClick={() => onCopyValue(selectedItem.txId, 'Transaction id copied from the gallery.')}
                >
                  Copy tx id
                </button>
                <button
                  type="button"
                  className="modal__btn modal__btn--secondary"
                  onClick={() => onCopyValue(selectedItem.tokenURI, 'Metadata URI copied from the gallery.')}
                >
                  Copy metadata URI
                </button>
                {getMetadataGatewayUrl(selectedItem.tokenURI) && (
                  <a
                    href={getMetadataGatewayUrl(selectedItem.tokenURI)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__btn modal__btn--secondary"
                  >
                    Open metadata
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
