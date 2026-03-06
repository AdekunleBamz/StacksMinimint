import { useState } from 'react'
import './MintCard.css'

function MintCard({ 
  contractInfo, 
  onMint, 
  account, 
  isConnected,
  onConnect 
}) {
  const [tokenURI, setTokenURI] = useState('')
  const [isMinting, setIsMinting] = useState(false)
  const [mintStatus, setMintStatus] = useState(null)

  const handleMint = async (e) => {
    e.preventDefault()
    
    if (!tokenURI.trim()) {
      setMintStatus({ type: 'error', message: 'Please enter a valid token URI' })
      return
    }

    setIsMinting(true)
    setMintStatus({ type: 'pending', message: 'Confirm transaction in wallet...' })

    try {
      const result = await onMint(tokenURI)
      setMintStatus({ 
        type: 'success', 
        message: `NFT minted! Token ID: ${result.tokenId}`,
        txHash: result.txHash
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
  }

  const formatSTX = (microstx) => {
    if (!microstx) return '0'
    return (parseFloat(microstx) / 1e6).toString()
  }

  const isSoldOut = contractInfo?.totalSupply >= contractInfo?.maxSupply
  const walletLimitReached = contractInfo?.walletMinted >= contractInfo?.maxPerWallet

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

      {!isConnected ? (
        <div className="mint-card__connect">
          <p>Connect your wallet to mint</p>
          <button className="mint-card__btn" onClick={onConnect}>
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
              onChange={(e) => setTokenURI(e.target.value)}
              disabled={isMinting || isSoldOut || contractInfo?.isPaused}
            />
            <span className="form-hint">
              IPFS or HTTP link to your NFT metadata JSON
            </span>
          </div>

          <button
            type="submit"
            className="mint-card__btn mint-card__btn--primary"
            disabled={
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

          {mintStatus && (
            <div className={`mint-card__status mint-card__status--${mintStatus.type}`}>
              <span>{mintStatus.message}</span>
              {mintStatus.txId && (
                <a
                  href={`https://explorer.hiro.so/txid/${mintStatus.txId}?chain=mainnet`}
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

export default MintCard
