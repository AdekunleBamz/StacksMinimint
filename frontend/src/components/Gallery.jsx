import { useState, useEffect } from 'react'
import './Gallery.css'

function Gallery() {
  const [nfts, setNfts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedNft, setSelectedNft] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')

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
    
    setTimeout(() => {
      setNfts(mockNfts)
      setIsLoading(false)
    }, 500)
  }, [])

  const handleNftClick = (nft) => {
    setSelectedNft(nft)
  }

  const closeModal = () => {
    setSelectedNft(null)
  }

  const filteredNfts = nfts.filter(nft =>
    nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nft.owner.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
        <div className="gallery__empty">
          <span className="gallery__empty-icon">🖼️</span>
          <h3>No NFTs Yet</h3>
          <p>Be the first to mint an NFT from this collection!</p>
        </div>
      </section>
    )
  }

  if (filteredNfts.length === 0 && searchTerm) {
    return (
      <section className="gallery">
        <div className="gallery__header">
          <h2 className="gallery__title">Collection Gallery</h2>
          <div className="gallery__search">
            <input
              type="text"
              placeholder="Search NFTs by name or owner..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="gallery__controls">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'view-btn--active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
              </svg>
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'view-btn--active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="gallery__empty">
          <span className="gallery__empty-icon">🔍</span>
          <h3>No NFTs Found</h3>
          <p>Try adjusting your search terms.</p>
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
            type="text"
            placeholder="Search NFTs by name or owner..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="gallery__controls">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'view-btn--active' : ''}`}
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
            </svg>
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'view-btn--active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-label="List view"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={`gallery__grid gallery__grid--${viewMode}`}>
        {filteredNfts.map((nft) => (
          <article
            key={nft.id}
            className="nft-card"
            onClick={() => handleNftClick(nft)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNftClick(nft)}
          >
            <div className="nft-card__image-wrapper">
              <img
                src={nft.image}
                alt={nft.name}
                className="nft-card__image"
                loading="lazy"
              />
              <div className="nft-card__overlay">
                <span>View Details</span>
              </div>
            </div>
            <div className="nft-card__info">
              <h3 className="nft-card__name">{nft.name}</h3>
              <p className="nft-card__owner">
                <span className="label">Owner:</span>
                <span className="value">{nft.owner}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      {selectedNft && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>
              ×
            </button>
            <div className="modal__image">
              <img src={selectedNft.image} alt={selectedNft.name} />
            </div>
            <div className="modal__content">
              <h2 className="modal__title">{selectedNft.name}</h2>
              <div className="modal__details">
                <div className="detail-row">
                  <span className="detail-label">Token ID</span>
                  <span className="detail-value">#{selectedNft.id}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Owner</span>
                  <span className="detail-value">{selectedNft.owner}</span>
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
                  href={`https://explorer.hiro.so/token/${selectedNft.id}?chain=mainnet`}
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

export default Gallery
