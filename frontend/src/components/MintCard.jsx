// Note: Mintcard module
// Scope: keep MintCard concerns isolated.

import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import './MintCard.css'
import { Spinner } from './Spinner'
import { getExplorerUrl } from '../contract'
import { formatSTX, validateTokenURI } from '../utils/collection'

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
  const tokenUriValidation = validateTokenURI(tokenURI)
  const hasTokenURI = tokenURI.trim().length > 0
  const isTokenUriValid = tokenUriValidation.isValid

  const handleMint = useCallback(async (e) => {
    e.preventDefault()
    const normalizedTokenURI = tokenURI.trim()
    const validation = validateTokenURI(normalizedTokenURI)
    
    if (!validation.isValid) {
      setMintStatus({ type: 'error', message: validation.helper })
      return
    }

    setIsMinting(true)
    setMintStatus({ type: 'pending', message: 'Confirm transaction in wallet...' })

    try {
      const result = await onMint(normalizedTokenURI)
      if (!result) {
        setMintStatus(null)
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

  const totalSupply = contractInfo?.totalSupply ?? 0
  const maxSupply = Number.isFinite(contractInfo?.maxSupply) ? contractInfo.maxSupply : null
  const walletMinted = contractInfo?.walletMinted ?? 0
  const maxPerWallet = Number.isFinite(contractInfo?.maxPerWallet) ? contractInfo.maxPerWallet : null
  const isSoldOut = maxSupply !== null && totalSupply >= maxSupply
  const walletLimitReached = maxPerWallet !== null && walletMinted >= maxPerWallet
  const mintActionMessage = contractInfo?.isPaused
    ? 'Minting is paused by the collection owner.'
    : isSoldOut
      ? 'The collection has sold out.'
      : walletLimitReached
        ? 'This wallet has reached the configured mint limit.'
        : !isTokenUriValid
          ? tokenUriValidation.helper
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
            {totalSupply} / {maxSupply ?? '∞'}
          </span>
        </div>
        <div className="stat">
          <span className="stat__label">Your Mints</span>
          <span className="stat__value">
            {walletMinted} / {maxPerWallet ?? '∞'}
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
        <form className="mint-card__form" onSubmit={handleMint} aria-busy={isMinting}>
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
              maxLength={256}
              inputMode="url"
              enterKeyHint="go"
              spellCheck={false}
              onChange={(e) => {
                setTokenURI(e.target.value)
                if (mintStatus) {
                  setMintStatus(null)
                }
              }}
              aria-describedby="tokenURIHint mintActionMessage"
              aria-invalid={hasTokenURI && !isTokenUriValid}
              required
              autoComplete="off"
              disabled={isMinting || isSoldOut || contractInfo?.isPaused}
            />
            <span id="tokenURIHint" className="form-hint">
              IPFS or HTTP link to your NFT metadata JSON
            </span>
            <div className="form-counter" aria-live="polite">
              {tokenUriValidation.characterCount} / 256 characters
            </div>
          </div>

          <button
            type="submit"
            className="mint-card__btn mint-card__btn--primary"
            disabled={
              !isTokenUriValid ||
              isMinting || 
              isSoldOut || 
              walletLimitReached || 
              contractInfo?.isPaused
            }
          >
            {isMinting ? (
              <>
                <Spinner size="small" tone="white" className="mint-card__spinner" />
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
