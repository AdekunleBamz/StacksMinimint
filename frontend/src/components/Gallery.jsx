// Note: Gallery module
// Scope: keep Gallery concerns isolated.

import { useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Gallery.css'
import { getTokenExplorerUrl } from '../contract'
import { formatAddress } from '../utils/collection'

export function Gallery() {
  const [nfts, setNfts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedNft, setSelectedNft] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const closeButtonRef = useRef(null)
  const normalizedSearchTerm = searchTerm.toLowerCase().trim()

  // Sample NFT data for demonstration
  useEffect(() => {
    const mockNfts = [
      {
        id: 1,
        name: 'Genesis #1',
        image: 'https://picsum.photos/seed/nft1/400/400',
        owner: 'SP3H9...ABCDE',
        tokenURI: 'ipfs://QmExample1'
      },
      {
        id: 2,
        name: 'Genesis #2',
        image: 'https://picsum.photos/seed/nft2/400/400',
        owner: 'SP2JA...XYZ12',
        tokenURI: 'ipfs://QmExample2'
      },
      {
        id: 3,
        name: 'Genesis #3',
        image: 'https://picsum.photos/seed/nft3/400/400',
        owner: 'SP1P7...QWERT',
        tokenURI: 'ipfs://QmExample3'
      }
    ]

    const timeoutId = setTimeout(() => {
      setNfts(mockNfts)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [])

  const handleNftClick = (nft) => {
    setSelectedNft(nft)
  }

  const closeModal = () => {
    setSelectedNft(null)
  }

  useEffect(() => {
    if (!selectedNft) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    const previousActiveElement = document.activeElement
    window.addEventListener('keydown', handleEscape)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleEscape)
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus()
      }
    }
  }, [selectedNft])

  const filteredNfts = useMemo(() => nfts.filter(nft => {
    if (normalizedSearchTerm.startsWith('#')) {
      const idSearch = normalizedSearchTerm.slice(1)
      return nft.id.toString() === idSearch
    }
    return nft.name.toLowerCase().includes(normalizedSearchTerm) ||
           nft.owner.toLowerCase().includes(normalizedSearchTerm)
  }), [nfts, normalizedSearchTerm])
  const hasSearch = searchTerm.trim().length > 0

  const handleCardKeyDown = (event, nft) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleNftClick(nft)
    }
  }

  if (isLoading) {
    return (
      <section className="gallery">
        <div className="gallery__header">
          <h2 className="gallery__title">Collection Gallery</h2>
        </div>
        <div className={`gallery__grid gallery__grid--${viewMode}`}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="nft-card nft-card--skeleton">
              <div className="skeleton skeleton--image"></div>
              <div className="nft-card__info">
                <div className="skeleton skeleton--title"></div>
                <div className="skeleton skeleton--owner"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (nfts.length === 0) {
    return (
      <section className="gallery">
        <div className="gallery__header">
          <h2 className="gallery__title">Collection Gallery</h2>
        </div>
        <div className="gallery__empty" role="status" aria-live="polite">
          <span className="gallery__empty-icon">🖼️</span>
          <h3>No NFTs Yet</h3>
          <p>Be the first to mint an NFT from this collection!</p>
        </div>
      </section>
    )
  }

  if (filteredNfts.length === 0 && hasSearch) {
    return (
      <section className="gallery">
        <div className="gallery__header">
          <h2 className="gallery__title">Collection Gallery</h2>
          <div className="gallery__search">
            <input
              type="search"
              placeholder="Search NFTs by name or owner..."
              value={searchTerm}
              inputMode="search"
              autoComplete="off"
              spellCheck={false}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search collection items"
              className="search-input"
            />
          </div>
          <div className="gallery__controls">
            <button
              type="button"
              className={`view-btn ${viewMode === 'grid' ? 'view-btn--active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              aria-pressed={viewMode === 'grid'}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
              </svg>
            </button>
            <button
              type="button"
              className={`view-btn ${viewMode === 'list' ? 'view-btn--active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
              aria-pressed={viewMode === 'list'}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="gallery__empty gallery__empty--search" role="status" aria-live="polite">
          <div className="gallery__empty-icon">🔍</div>
          <h3>No matching NFTs</h3>
          <p>We couldn't find anything matching "{searchTerm}"</p>
          <button type="button" className="gallery__clear-btn" onClick={() => setSearchTerm('')}>
            Clear Search
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="gallery">
      <div className="gallery__header">
        <h2 className="gallery__title">Collection Gallery</h2>
        <div className="gallery__search">
          <input
            type="search"
            placeholder="Search NFTs by name or owner..."
            value={searchTerm}
            inputMode="search"
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search collection items"
            className="search-input"
          />
          {hasSearch && (
            <button
              type="button"
              className="gallery__clear-search"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search query"
            >
              Clear
            </button>
          )}
        </div>
        <div className="gallery__controls">
          <button
            type="button"
            className={`view-btn ${viewMode === 'grid' ? 'view-btn--active' : ''}`}
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
            aria-pressed={viewMode === 'grid'}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
            </svg>
          </button>
          <button
            type="button"
            className={`view-btn ${viewMode === 'list' ? 'view-btn--active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-label="List view"
            aria-pressed={viewMode === 'list'}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <p className="gallery__results" aria-live="polite">
        Showing {filteredNfts.length} of {nfts.length} items{hasSearch ? ` for "${searchTerm}"` : ''}.
      </p>

      <div className={`gallery__grid gallery__grid--${viewMode}`}>
        {filteredNfts.map((nft, index) => (
          <article
            key={nft.id}
            className="nft-card"
            style={{ '--index': index }}
            onClick={() => handleNftClick(nft)}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${nft.name}`}
            onKeyDown={(event) => handleCardKeyDown(event, nft)}
          >
            <div className="nft-card__image-wrapper">
              <img
                src={nft.image}
                alt={nft.name}
                className="nft-card__image"
                loading="lazy"
                decoding="async"
              />
              <div className="nft-card__overlay" aria-hidden="true">
                <span>View Details</span>
              </div>
            </div>
            <div className="nft-card__info">
              <h3 className="nft-card__name">{nft.name}</h3>
              <p className="nft-card__owner">
                <span className="label">Owner:</span>
                <span className="value">{formatAddress(nft.owner)}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      {selectedNft && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="modal__close"
              onClick={closeModal}
              aria-label="Close NFT details"
            >
              ×
            </button>
            <div className="modal__image">
              <img src={selectedNft.image} alt={selectedNft.name} decoding="async" />
            </div>
            <div className="modal__content">
              <h2 id="gallery-modal-title" className="modal__title">{selectedNft.name}</h2>
              <div className="modal__details">
                <div className="detail-row">
                  <span className="detail-label">Token ID</span>
                  <span className="detail-pill detail-pill--id">#{selectedNft.id}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Owner</span>
                  <span className="detail-pill detail-pill--owner">{formatAddress(selectedNft.owner)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Token URI</span>
                  <span className="detail-value detail-value--mono">
                    {selectedNft.tokenURI}
                  </span>
                </div>
              </div>
              <div className="modal__actions">
                <a
                  href={getTokenExplorerUrl(selectedNft.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__btn"
                >
                  View on Explorer
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

Gallery.propTypes = {}
