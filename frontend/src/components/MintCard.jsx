/**
 * MintCard component for the primary NFT minting interface.
 * 
 * Handles token URI validation, mint fee display, supply tracking, and
 * wallet connection requirements. Provides real-time feedback on mint status.
 * 
 * @module MintCard
 */

import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import './MintCard.css'
import { Spinner } from './Spinner'
import { getExplorerUrl } from '../contract'
import { formatSTX, MAX_TOKEN_URI_LENGTH, validateTokenURI } from '../utils/collection'

/** Wallet prompt message shown while waiting for the user to confirm a mint. */
const MINT_PENDING_MESSAGE = 'Check your wallet to confirm this mint.';
/** Message shown when a mint transaction is cancelled or rejected. */
const MINT_CANCELLED_MESSAGE = 'Mint was cancelled or rejected in the wallet.';

export function MintCard({ 
  contractInfo, 
  onMint, 
  isConnected,
  isConnecting = false,
  onConnect,
  contractError
}) {
  const [tokenURI, setTokenURI] = useState('')
  const [isMinting, setIsMinting] = useState(false)
  const [mintStatus, setMintStatus] = useState(null)
  const tokenUriValidation = validateTokenURI(tokenURI)
  const hasTokenURI = tokenURI.trim().length > 0
  const isTokenUriValid = tokenUriValidation.isValid
  const visibleContractError = typeof contractError === 'string' ? contractError.trim() : contractError

  const handleMint = useCallback(async (e) => {
    e.preventDefault()
    const normalizedTokenURI = tokenURI.trim()
    const validation = validateTokenURI(normalizedTokenURI)
    
    if (!validation.isValid) {
      setMintStatus({ type: 'error', message: validation.helper })
      return
    }

    setIsMinting(true)
    setMintStatus({ type: 'pending', message: MINT_PENDING_MESSAGE })

    try {
      const result = await onMint(normalizedTokenURI)
      if (!result) {
        setMintStatus({
          type: 'warning',
          message: MINT_CANCELLED_MESSAGE
        })
        return
      }
      setMintStatus({ 
        type: 'success', 
        message: result.tokenId ? `NFT minted! Token ID: ${result.tokenId}` : 'Mint submitted. Track the transaction below.',
        txId: result.txHash || result.txId
      })
      setTokenURI('')
    } catch (error) {
      setMintStatus({ 
        type: 'error', 
        message: error?.message || 'Failed to mint NFT' 
      })
    } finally {
      setIsMinting(false)
    }
  }, [tokenURI, onMint])

  const parsedTotalSupply = Number(contractInfo?.totalSupply)
  const parsedMaxSupply = Number(contractInfo?.maxSupply)
  const parsedWalletMinted = Number(contractInfo?.walletMinted)
  const parsedMaxPerWallet = Number(contractInfo?.maxPerWallet)
  const totalSupply = Number.isFinite(parsedTotalSupply) ? parsedTotalSupply : 0
  const maxSupply = Number.isFinite(parsedMaxSupply) ? parsedMaxSupply : null
  const walletMinted = Number.isFinite(parsedWalletMinted) ? parsedWalletMinted : 0
  const maxPerWallet = Number.isFinite(parsedMaxPerWallet) ? parsedMaxPerWallet : null
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
  const txId = mintStatus?.txId

  return (
    <div className="mint-card">
      <div className="mint-card__header">
        <h2 className="mint-card__title">Mint Your NFT</h2>
        <p className="mint-card__subtitle">Submit a metadata URI and mint on Stacks</p>
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
        <div className="mint-card__alert mint-card__alert--warning" role="status" aria-live="polite">
          ⚠️ Minting is currently paused
        </div>
      )}

      {isSoldOut && (
        <div className="mint-card__alert mint-card__alert--error">
          🔥 Sold out! All NFTs have been minted
        </div>
      )}

      {visibleContractError && (
        <div className="mint-card__alert mint-card__alert--error" role="alert">
          {visibleContractError}
        </div>
      )}

      {!isConnected ? (
        <div className="mint-card__connect">
          <p>Connect your Stacks wallet to start minting.</p>
          <button
            type="button"
            className="mint-card__btn"
            onClick={onConnect}
            aria-label={isConnecting ? 'Connecting wallet' : 'Connect wallet to mint'}
            aria-busy={isConnecting}
            disabled={isConnecting}
            title={isConnecting ? 'Waiting for wallet connection' : 'Connect wallet to unlock minting'}
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
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
              placeholder="ipfs://metadata.json or https://example.com/metadata.json"
              value={tokenURI}
              maxLength={MAX_TOKEN_URI_LENGTH}
              inputMode="url"
              enterKeyHint="go"
              spellCheck={false}
              aria-label="Token URI metadata URL"
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
              disabled={isMinting || isSoldOut || walletLimitReached || contractInfo?.isPaused}
            />
            <span id="tokenURIHint" className="form-hint">
              Paste an ipfs:// CID or secure https:// link to your metadata JSON
            </span>
            <div className="form-counter" aria-live="polite">
              {tokenUriValidation.characterCount} / {MAX_TOKEN_URI_LENGTH} characters
            </div>
          </div>

          <button
            type="submit"
            className="mint-card__btn mint-card__btn--primary"
            aria-describedby="mintActionMessage"
            title={mintActionMessage}
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

          <p id="mintActionMessage" className="mint-card__helper" aria-live="polite" aria-atomic="true">
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
                  title={txId}
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
  isConnecting: PropTypes.bool,
  onConnect: PropTypes.func.isRequired,
  contractError: PropTypes.string
}

/**
 * Default export for MintCard component.
 * @type {React.FC<MintCardProps>}
 */
export default MintCard
