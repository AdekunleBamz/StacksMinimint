import { useState } from 'react'
import './Header.css'

import logo from '../assets/logo.png'

function Header({ account, onConnect, onDisconnect, isConnecting }) {
  const [showCopied, setShowCopied] = useState(false)
  const chainName = 'Stacks'

  const handleCopy = async () => {
    if (!account) return
    try {
      await navigator.clipboard.writeText(account)
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy wallet address:', error)
    }
  }

  const formatAddress = (addr) => {
    if (!addr) return ''
    return `${addr.slice(0, 5)}...${addr.slice(-5)}`
  }

  return (
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt="NFTminimint Logo" className="header__logo" />
        <span className="header__title">NFTminimint</span>
      </div>

      <div className="header__wallet">
        {account ? (
          <>
            <span className="header__chain">{chainName}</span>
            <button
              type="button"
              className="header__address-wrapper"
              onClick={handleCopy}
              title="Copy wallet address"
              aria-label={`Copy wallet address ${account}`}
            >
              <span className="header__address-label">Wallet</span>
              <span className="header__address" aria-hidden="true">{formatAddress(account)}</span>
              <span className="header__copy-hint" aria-hidden="true">Copy</span>
              {showCopied && <span className="header__copied-toast">Copied!</span>}
            </button>
            <button
              type="button"
              className="header__btn header__btn--disconnect"
              onClick={onDisconnect}
            >
              Disconnect
            </button>
          </>
        ) : (
          <button
            type="button"
            className="header__btn header__btn--connect"
            onClick={onConnect}
            disabled={isConnecting}
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
