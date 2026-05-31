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
const MINT_PENDING_MESSAGE = 'Confirm this mint in your wallet.';
/** Message shown when a mint transaction is cancelled or rejected. */
const MINT_CANCELLED_MESSAGE = 'Mint was canceled or rejected in your wallet.';

/**
 * normalizeMintMetricValue - Coerce a supply metric to a finite number.
 * @param {*} value - Raw metric value
 * @param {number} [fallback=0] - Value to return when coercion fails
 * @returns {number}
 */
export function normalizeMintMetricValue(value, fallback = 0) {
  const parsedValue = Number(value)
  return Number.isFinite(parsedValue) ? parsedValue : fallback
}

/**
 * normalizeMintLimitValue - Coerce a cap limit to a finite number or null.
 * Returns null when the value is missing or non-numeric (meaning no limit).
 * @param {*} value - Raw limit value
 * @returns {number|null}
 */
export function normalizeMintLimitValue(value) {
  const parsedValue = Number(value)
  return Number.isFinite(parsedValue) ? parsedValue : null
}

/**
 * getMintStateDescriptor - Derive the current mint action state and its display message.
 * Checks pause, sold-out, wallet limit, and URI validity in priority order.
 * @param {{ isPaused: boolean, isSoldOut: boolean, walletLimitReached: boolean, isTokenUriValid: boolean, invalidUriHelper: string }} params
 * @returns {{ state: string, message: string }}
 */
export function getMintStateDescriptor({ isPaused, isSoldOut, walletLimitReached, isTokenUriValid, invalidUriHelper }) {
  if (isPaused) {
    return {
      state: 'paused',
      message: 'Minting is paused by the collection owner.'
    }
  }

  if (isSoldOut) {
    return {
      state: 'sold-out',
      message: 'The collection has sold out.'
    }
  }

  if (walletLimitReached) {
    return {
      state: 'wallet-limit',
      message: 'This wallet has reached the configured mint limit.'
    }
  }

  if (!isTokenUriValid) {
    return {
      state: 'invalid-uri',
      message: invalidUriHelper
    }
  }

  return {
    state: 'ready',
    message: 'Ready to mint.'
  }
}

/**
 * getMintConnectButtonA11y - Build accessible label and title strings for the connect button.
 * @param {boolean} isConnecting - Whether a connection attempt is in progress
 * @returns {{ label: string, title: string }}
 */
export function getMintConnectButtonA11y(isConnecting) {
  return {
    label: isConnecting ? 'Connecting wallet' : 'Connect wallet to mint',
    title: isConnecting ? 'Waiting for wallet connection' : 'Connect wallet to enable minting'
  }
}

/**
 * getMintSubmitLabel - Return the submit button label for the current mint state.
 * @param {{ isMinting: boolean, isSoldOut: boolean, walletLimitReached: boolean, mintFee: number }} params
 * @returns {string}
 */
export function getMintSubmitLabel({ isMinting, isSoldOut, walletLimitReached, mintFee }) {
  if (isMinting) return 'Minting...'
  if (isSoldOut) return 'Sold Out'
  if (walletLimitReached) return 'Wallet Limit Reached'
  return `Mint for ${formatSTX(mintFee)} STX`
}

/**
 * MintCard - Primary minting interface component.
 *
 * Renders token URI input, supply metrics, and the mint submit button.
 * Handles validation, transaction lifecycle, and wallet connection state.
 *
 * @param {Object} props
 * @param {Object} props.contractInfo - Live collection data (supply, fee, caps)
 * @param {Function} props.onMint - Async mint handler called with the token URI
 * @param {boolean} props.isConnected - Whether a wallet is connected
 * @param {boolean} [props.isConnecting=false] - Whether a connection attempt is in progress
 * @param {Function} props.onConnect - Callback to open the wallet connection flow
 * @param {string|null} [props.walletError] - Error message from the wallet hook
 * @param {string|null} [props.contractError] - Error message from the contract hook
 * @returns {JSX.Element}
 */
export function MintCard({ 
  contractInfo, 
  onMint, 
  isConnected,
  isConnecting = false,
  onConnect,
  walletError,
  contractError
}) {
  const [tokenURI, setTokenURI] = useState('')
  const [isMinting, setIsMinting] = useState(false)
  const [mintStatus, setMintStatus] = useState(null)
  const tokenUriValidation = validateTokenURI(tokenURI)
  const hasTokenURI = tokenURI.trim().length > 0
  const isTokenUriValid = tokenUriValidation.isValid
  const visibleContractError = typeof contractError === 'string' ? contractError.trim() : contractError

  /**
   * handleMint - Validate the token URI and submit the mint transaction.
   * @param {React.FormEvent} e - Form submission event
   */
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
        message: result.tokenId ? `NFT minted! Token ID: ${result.tokenId}` : 'Mint submitted. Track it below.',
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

  const totalSupply = normalizeMintMetricValue(contractInfo?.totalSupply)
  const walletMinted = normalizeMintMetricValue(contractInfo?.walletMinted)
  const maxSupply = normalizeMintLimitValue(contractInfo?.maxSupply)
  const maxPerWallet = normalizeMintLimitValue(contractInfo?.maxPerWallet)
  const isSoldOut = maxSupply !== null && totalSupply >= maxSupply
  const walletLimitReached = maxPerWallet !== null && walletMinted >= maxPerWallet
  const mintDescriptor = getMintStateDescriptor({
    isPaused: contractInfo?.isPaused,
    isSoldOut,
    walletLimitReached,
    isTokenUriValid,
    invalidUriHelper: tokenUriValidation.helper
  })
  const mintActionMessage = mintDescriptor.message
  const mintState = mintDescriptor.state
  const connectButtonA11y = getMintConnectButtonA11y(isConnecting)
  const mintSubmitLabel = getMintSubmitLabel({
    isMinting,
    isSoldOut,
    walletLimitReached,
    mintFee: contractInfo?.mintFee
  })
  const txId = mintStatus?.txId

  return (
    <div
      className="mint-card"
      data-connected={isConnected ? 'true' : 'false'}
      data-connect-state={isConnected ? 'connected' : isConnecting ? 'connecting' : 'disconnected'}
      data-minting={isMinting ? 'true' : 'false'}
      data-token-uri-valid={isTokenUriValid ? 'true' : 'false'}
      data-mint-state={mintState}
      title={`Mint state: ${mintState}`}
    >
      <div className="mint-card__header">
        <h2 className="mint-card__title">Mint your NFT</h2>
        <p className="mint-card__subtitle">Submit metadata and mint directly on Stacks</p>
      </div>

      <div className="mint-card__stats">
        <div className="stat">
          <span className="stat__label">Price</span>
          <span className="stat__value" title="Mint fee per NFT">{formatSTX(contractInfo?.mintFee)} STX</span>
        </div>
        <div className="stat">
          <span className="stat__label">Minted</span>
          <span className="stat__value" title="Collection mints completed">
            {totalSupply} / {maxSupply ?? '∞'}
          </span>
        </div>
        <div className="stat">
          <span className="stat__label">Your Mints</span>
          <span className="stat__value" title="Mints completed by this wallet">
            {walletMinted} / {maxPerWallet ?? '∞'}
          </span>
        </div>
      </div>

      {contractInfo?.isPaused && (
        <div className="mint-card__alert mint-card__alert--warning" role="status" aria-live="polite" aria-atomic="true">
          ⚠️ Minting is currently paused
        </div>
      )}

      {isSoldOut && (
        <div className="mint-card__alert mint-card__alert--error" role="status" aria-live="polite" aria-atomic="true">
          🔥 Sold out! All NFTs have been minted
        </div>
      )}

      {visibleContractError && (
        <div className="mint-card__alert mint-card__alert--error" role="alert">
          {visibleContractError}
        </div>
      )}

      {!isConnected ? (
        <div className="mint-card__connect" aria-live="polite">
          <p id="mint-card-connect-note" title="A connected wallet is required before minting">Connect your Stacks wallet to start minting here.</p>
          {walletError && (
            <p className="mint-card__wallet-error" role="alert" title={walletError}>
              {walletError}
            </p>
          )}
          <button
            type="button"
            className="mint-card__btn"
            onClick={onConnect}
            aria-label={connectButtonA11y.label}
            aria-describedby="mint-card-connect-note"
            aria-busy={isConnecting}
            disabled={isConnecting}
            title={connectButtonA11y.title}
          >
            {isConnecting ? 'Connecting...' : 'Connect wallet'}
          </button>
        </div>
      ) : (
        <form className="mint-card__form" onSubmit={handleMint} noValidate aria-busy={isMinting}>
          <div className="form-group">
            <label htmlFor="tokenURI" className="form-label">
              Token URI (metadata URL)
            </label>
            <input
              type="url"
              id="tokenURI"
              className="form-input"
              placeholder="ipfs://... or https://example.com/metadata.json"
              value={tokenURI}
              maxLength={MAX_TOKEN_URI_LENGTH}
              inputMode="url"
              enterKeyHint="go"
              spellCheck={false}
              autoCapitalize="none"
              autoCorrect="off"
              aria-label="Token URI metadata URL"
              title="Token URI metadata URL"
              onChange={(e) => {
                setTokenURI(e.target.value)
                if (mintStatus) {
                  setMintStatus(null)
                }
              }}
              aria-describedby="tokenURIHint mintActionMessage"
              aria-invalid={hasTokenURI && !isTokenUriValid}
              aria-required="true"
              required
              autoComplete="off"
              disabled={isMinting || isSoldOut || walletLimitReached || contractInfo?.isPaused}
            />
            <span id="tokenURIHint" className="form-hint">
              Use an ipfs:// CID or secure https:// metadata link
            </span>
            <div className="form-counter" aria-live="polite" aria-atomic="true" title={`${tokenUriValidation.characterCount} of ${MAX_TOKEN_URI_LENGTH} characters used`}>
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
                {mintSubmitLabel}
              </>
            ) : isSoldOut ? (
              mintSubmitLabel
            ) : walletLimitReached ? (
              mintSubmitLabel
            ) : (
              mintSubmitLabel
            )}
          </button>

          <p id="mintActionMessage" className="mint-card__helper" data-helper-state={mintState} role="status" aria-live="polite" aria-atomic="true" title={mintActionMessage}>
            {mintActionMessage}
          </p>

          {mintStatus && (
            <div
              className={`mint-card__status mint-card__status--${mintStatus.type}`}
              role={mintStatus.type === 'error' ? 'alert' : 'status'}
              aria-live={mintStatus.type === 'error' ? 'assertive' : 'polite'}
              aria-atomic="true"
            >
              <span>{mintStatus.message}</span>
              {txId && (
                <a
                  href={getExplorerUrl(txId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mint-card__tx-link"
                  aria-label="View mint transaction on Explorer"
                  title={`Open mint transaction ${txId} on Explorer`}
                >
                  View transaction ↗
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
  walletError: PropTypes.string,
  contractError: PropTypes.string
}

/**
 * Default export for MintCard component.
 * @type {React.FC<MintCardProps>}
 */
export default MintCard
