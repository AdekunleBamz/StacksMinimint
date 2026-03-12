import { useState } from 'react'
import './MintCard.css'
import { getExplorerUrl } from '../contract'
import {
  formatLimit,
  formatSTX,
  MAX_TOKEN_URI_LENGTH,
  validateTokenURI
} from '../utils/collection'

function MintCard({
  contractInfo,
  onMint,
  isConnected,
  onConnect,
  tokenURI = '',
  onTokenURIChange = () => {},
  onClearDraft = () => {}
}) {
  const [isMinting, setIsMinting] = useState(false)
  const [mintStatus, setMintStatus] = useState(null)

  const validation = validateTokenURI(tokenURI)
  const maxSupply = contractInfo?.maxSupply ?? null
  const mintedCount = contractInfo?.totalSupply || 0
  const maxPerWallet = contractInfo?.maxPerWallet ?? null
  const walletMinted = contractInfo?.walletMinted || 0
  const isPaused = contractInfo?.isPaused === true
  const isSoldOut = typeof maxSupply === 'number' && mintedCount >= maxSupply
  const walletLimitReached = typeof maxPerWallet === 'number' && walletMinted >= maxPerWallet
  const hasDraft = Boolean(tokenURI.trim())
  const isPrimaryActionDisabled =
    isMinting ||
    isPaused ||
    isSoldOut ||
    walletLimitReached ||
    (isConnected && !validation.isValid)

  const disabledReason = isPaused
    ? 'Minting is paused by the contract owner.'
    : isSoldOut
      ? 'This collection has sold out.'
      : walletLimitReached
        ? 'This wallet has reached its configured mint cap.'
        : isConnected && !validation.isValid
          ? validation.helper
          : !isConnected
            ? 'You can keep editing the URI now. The button will ask for a wallet connection before minting.'
            : null

  const checklist = [
    {
      label: 'Metadata URI passes local checks',
      active: validation.isValid
    },
    {
      label: 'Stacks wallet connected',
      active: isConnected
    },
    {
      label: 'Collection available for minting',
      active: !isPaused && !isSoldOut && !walletLimitReached
    }
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!isConnected) {
      setMintStatus({
        type: 'pending',
        message: 'Connect a Stacks wallet to continue. Your draft will stay in place.'
      })
      onConnect()
      return
    }

    if (!validation.isValid) {
      setMintStatus({
        type: 'error',
        message: validation.helper
      })
      return
    }

    setIsMinting(true)
    setMintStatus({
      type: 'pending',
      message: 'Wallet prompt opened. Review the post-condition and submit when ready.'
    })

    try {
      const result = await onMint(tokenURI.trim())

      if (!result) {
        setMintStatus({
          type: 'warning',
          message: 'Mint request closed before a transaction was submitted.'
        })
        return
      }

      setMintStatus({
        type: 'success',
        message: 'Mint submitted successfully. Track the receipt from Recent Activity or the explorer.',
        txId: result.txId
      })
    } catch (error) {
      setMintStatus({
        type: 'error',
        message: error.message || 'Failed to mint NFT.'
      })
    } finally {
      setIsMinting(false)
    }
  }

  return (
    <div className="mint-card">
      <div className="mint-card__header">
        <h2 className="mint-card__title">Mint Workspace</h2>
        <p className="mint-card__subtitle">
          Draft the metadata URL first, then connect a wallet only when the URI is ready to sign.
        </p>
        <ol className="mint-card__steps" aria-label="Minting steps">
          <li>Paste an IPFS or HTTPS metadata URI</li>
          <li>Review the live checks and wallet status</li>
          <li>Submit and keep the receipt in Recent Activity</li>
        </ol>
      </div>

      <div className="mint-card__stats">
        <div className="stat">
          <span className="stat__label">Price</span>
          <span className="stat__value">{formatSTX(contractInfo?.mintFee)} STX</span>
        </div>
        <div className="stat">
          <span className="stat__label">Supply</span>
          <span className="stat__value">
            {mintedCount} / {formatLimit(maxSupply, 'Open')}
          </span>
        </div>
        <div className="stat">
          <span className="stat__label">Wallet Cap</span>
          <span className="stat__value">{formatLimit(maxPerWallet, 'Not set')}</span>
        </div>
      </div>

      <div className="mint-card__availability">
        <span>
          {typeof maxSupply === 'number'
            ? `${Math.max(maxSupply - mintedCount, 0)} items remaining`
            : 'Open supply configuration'}
        </span>
        <span>
          {typeof maxPerWallet === 'number'
            ? `${Math.max(maxPerWallet - walletMinted, 0)} wallet slots left`
            : 'Wallet cap not configured'}
        </span>
      </div>

      {!isConnected && (
        <div className="mint-card__connect-note">
          <strong>Wallet not connected.</strong> Drafting is enabled now, and the submit button will switch to wallet connect mode.
        </div>
      )}

      {isPaused && (
        <div className="mint-card__alert mint-card__alert--warning">
          Minting is currently paused.
        </div>
      )}

      {isSoldOut && (
        <div className="mint-card__alert mint-card__alert--error">
          This collection has sold out.
        </div>
      )}

      <form className="mint-card__form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-label-row">
            <label htmlFor="tokenURI" className="form-label">
              Token URI (Metadata URL)
            </label>
            <div className="form-actions">
              {hasDraft && (
                <span className="form-draft-pill" aria-live="polite">
                  Saved locally
                </span>
              )}
              {hasDraft && (
                <button
                  type="button"
                  className="form-clear-btn"
                  onClick={() => {
                    onClearDraft()
                    setMintStatus(null)
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <input
            type="url"
            id="tokenURI"
            className="form-input"
            placeholder="ipfs://... or https://..."
            value={tokenURI}
            onChange={(event) => onTokenURIChange(event.target.value)}
            disabled={isMinting || isSoldOut || isPaused}
            autoComplete="off"
            spellCheck="false"
          />

          <div className={`form-review form-review--${validation.tone}`}>
            <div>
              <strong className="form-review__label">{validation.label}</strong>
              <p className="form-review__copy">{validation.helper}</p>
            </div>
            <span className="form-review__count">
              {validation.characterCount} / {MAX_TOKEN_URI_LENGTH}
            </span>
          </div>

          <span className="form-hint">
            ASCII only. Use an IPFS CID or secure HTTPS URL that points to the final NFT metadata JSON.
          </span>
        </div>

        <div className="mint-card__preview">
          <span className="mint-card__preview-label">Ready to submit</span>
          <strong className="mint-card__preview-value">
            {hasDraft ? tokenURI.trim() : 'Paste a metadata URI to preview the exact value sent on-chain.'}
          </strong>
        </div>

        <ul className="mint-card__checklist" aria-label="Mint readiness">
          {checklist.map((item) => (
            <li
              key={item.label}
              className={`mint-card__checklist-item ${item.active ? 'mint-card__checklist-item--active' : ''}`}
            >
              <span className="mint-card__checklist-icon" aria-hidden="true">
                {item.active ? '✓' : '•'}
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="mint-card__expectations" aria-label="What happens next">
          <span>
            {isConnected
              ? 'Wallet prompt opens with the contract call and post-condition.'
              : 'Primary action opens the wallet connection flow before any transaction is attempted.'}
          </span>
          <span>You will approve a {formatSTX(contractInfo?.mintFee)} STX post-condition when minting.</span>
        </div>

        <button
          type="submit"
          className="mint-card__btn mint-card__btn--primary"
          disabled={isPrimaryActionDisabled}
        >
          {isMinting
            ? 'Awaiting wallet confirmation...'
            : !isConnected
              ? 'Connect wallet to continue'
              : isSoldOut
                ? 'Sold Out'
                : walletLimitReached
                  ? 'Wallet Limit Reached'
                  : `Mint for ${formatSTX(contractInfo?.mintFee)} STX`}
        </button>

        {disabledReason && (
          <p className="mint-card__reason">{disabledReason}</p>
        )}

        {mintStatus && (
          <div
            className={`mint-card__status mint-card__status--${mintStatus.type}`}
            role="status"
            aria-live="polite"
          >
            <span>{mintStatus.message}</span>
            {mintStatus.txId && (
              <a
                href={getExplorerUrl(mintStatus.txId)}
                target="_blank"
                rel="noopener noreferrer"
                className="mint-card__tx-link"
              >
                View transaction in explorer
              </a>
            )}
          </div>
        )}
      </form>
    </div>
  )
}

export default MintCard
