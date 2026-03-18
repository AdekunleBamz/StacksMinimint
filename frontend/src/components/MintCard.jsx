import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import './MintCard.css'
import { getExplorerUrl } from '../contract'

const formatSTX = (microstx) => {
  if (microstx === null || microstx === undefined || Number.isNaN(Number(microstx))) return '0'
  return (Number(microstx) / 1e6).toFixed(3).replace(/\.?0+$/, '')
}

export function MintCard({ 
  contractInfo, 
  onMint, 
  isConnected,
  onConnect,
  contractError
}) {
  const [tokenURI, setTokenURI] = useState('')
  const [isMinting, setIsMinting] = useState(false)
  const [mintStatus, setMintStatus] = useState(null)

  const handleMint = useCallback(async (e) => {
    e.preventDefault()
    const normalizedTokenURI = tokenURI.trim()
    
    if (!normalizedTokenURI) {
      setMintStatus({ type: 'error', message: 'Please enter a valid token URI' })
      return
    }

    setIsMinting(true)
    setMintStatus({ type: 'pending', message: 'Confirm transaction in wallet...' })

    try {
      const result = await onMint(normalizedTokenURI)
      if (!result) {
        return
      }
      setMintStatus({ 
        type: 'success', 
        message: result.tokenId ? `NFT minted! Token ID: ${result.tokenId}` : 'NFT mint submitted successfully.',
        txHash: result.txHash || result.txId
      })
      setTokenURI('')
    } catch (error) {
      setMintStatus({ 
        type: 'error', 
        message: error.message || 'Failed to mint NFT' 
      })
    } finally {
      setIsMinting(false)
    }
  }, [tokenURI, onMint])

  const isSoldOut = contractInfo?.totalSupply >= contractInfo?.maxSupply
  const walletLimitReached = contractInfo?.walletMinted >= contractInfo?.maxPerWallet
  const mintActionMessage = contractInfo?.isPaused
    ? 'Minting is paused by the collection owner.'
    : isSoldOut
      ? 'The collection has sold out.'
      : walletLimitReached
        ? 'This wallet has reached the configured mint limit.'
        : !tokenURI.trim()
          ? 'Enter a metadata URL to enable minting.'
          : 'Ready to mint on Stacks.'
  const txId = mintStatus?.txId || mintStatus?.txHash

  return (
    <div className="mint-card">
      <div className="mint-card__header">
        <h2 className="mint-card__title">Mint Your NFT</h2>
        <p className="mint-card__subtitle">Create unique digital collectibles</p>
      </div>

      <div className="mint-card__stats">
        <div className="stat">
          <span className="stat__label">Price</span>
          <span className="stat__value">{formatSTX(contractInfo?.mintFee)} STX</span>
        </div>
        <div className="stat">
          <span className="stat__label">Minted</span>
          <span className="stat__value">
            {contractInfo?.totalSupply || 0} / {contractInfo?.maxSupply || '∞'}
          </span>
        </div>
        <div className="stat">
          <span className="stat__label">Your Mints</span>
          <span className="stat__value">
            {contractInfo?.walletMinted || 0} / {contractInfo?.maxPerWallet || '∞'}
          </span>
        </div>
      </div>

      {contractInfo?.isPaused && (
        <div className="mint-card__alert mint-card__alert--warning">
          ⚠️ Minting is currently paused
        </div>
      )}

      {isSoldOut && (
        <div className="mint-card__alert mint-card__alert--error">
          🔥 Sold out! All NFTs have been minted
        </div>
      )}

      {contractError && (
        <div className="mint-card__alert mint-card__alert--error" role="alert">
          {contractError}
        </div>
      )}

      {!isConnected ? (
        <div className="mint-card__connect">
          <p>Connect your wallet to mint</p>
          <button type="button" className="mint-card__btn" onClick={onConnect}>
            Connect Wallet
          </button>
        </div>
      ) : (
        <form className="mint-card__form" onSubmit={handleMint}>
          <div className="form-group">
            <label htmlFor="tokenURI" className="form-label">
              Token URI (Metadata URL)
            </label>
            <input
              type="url"
              id="tokenURI"
              className="form-input"
              placeholder="ipfs://... or https://..."
              value={tokenURI}
              onChange={(e) => {
                setTokenURI(e.target.value)
                if (mintStatus?.type === 'error') {
                  setMintStatus(null)
                }
              }}
              aria-describedby="tokenURIHint mintActionMessage"
              required
              autoComplete="off"
              disabled={isMinting || isSoldOut || contractInfo?.isPaused}
            />
            <span id="tokenURIHint" className="form-hint">
              IPFS or HTTP link to your NFT metadata JSON
            </span>
            <div className="form-counter" aria-live="polite">
              {tokenURI.length} / 256 characters
            </div>
          </div>

          <button
            type="submit"
            className="mint-card__btn mint-card__btn--primary"
            disabled={
              !tokenURI.trim() ||
              isMinting || 
              isSoldOut || 
              walletLimitReached || 
              contractInfo?.isPaused
            }
          >
            {isMinting ? (
              <>
                <span className="spinner"></span>
                Minting...
              </>
            ) : isSoldOut ? (
              'Sold Out'
            ) : walletLimitReached ? (
              'Wallet Limit Reached'
            ) : (
              `Mint for ${formatSTX(contractInfo?.mintFee)} STX`
            )}
          </button>

          <p id="mintActionMessage" className="mint-card__helper" aria-live="polite">
            {mintActionMessage}
          </p>

          {mintStatus && (
            <div
              className={`mint-card__status mint-card__status--${mintStatus.type}`}
              role={mintStatus.type === 'error' ? 'alert' : 'status'}
              aria-live={mintStatus.type === 'error' ? 'assertive' : 'polite'}
            >
              <span>{mintStatus.message}</span>
              {txId && (
                <a
                  href={getExplorerUrl(txId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mint-card__tx-link"
                >
                  View Transaction ↗
                </a>
              )}
            </div>
          )}
        </form>
      )}
    </div>
  )
}

MintCard.propTypes = {
  contractInfo: PropTypes.shape({
    mintFee: PropTypes.number,
    totalSupply: PropTypes.number,
    maxSupply: PropTypes.number,
    walletMinted: PropTypes.number,
    maxPerWallet: PropTypes.number,
    isPaused: PropTypes.bool
  }),
  onMint: PropTypes.func.isRequired,
  isConnected: PropTypes.bool,
  onConnect: PropTypes.func.isRequired,
  contractError: PropTypes.string
}

