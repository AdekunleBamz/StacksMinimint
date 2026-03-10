import { useState } from 'react'
import './Header.css'

import logo from '../assets/logo.png'

function Header({ account, onConnect, onDisconnect, isConnecting }) {
  const [showCopied, setShowCopied] = useState(false)

  const handleCopy = () => {
    if (!account) return
    navigator.clipboard.writeText(account)
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 2000)
  }

  const formatAddress = (addr) => {
    if (!addr) return ''
    return `${addr.slice(0, 5)}...${addr.slice(-5)}`
  }

  const getChainName = () => {
    return 'Stacks'
  }

  return (
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt="NFTminimint Logo" className="header__logo" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
        <span className="header__title">NFTminimint</span>
      </div>

      <div className="header__wallet">
        {account ? (
          <>
            <span className="header__chain">{getChainName()}</span>
            <div className="header__address-wrapper" onClick={handleCopy} title="Copy Address">
              <span className="header__address">{formatAddress(account)}</span>
              {showCopied && <span className="header__copied-toast">Copied!</span>}
            </div>
            <button
              className="header__btn header__btn--disconnect"
              onClick={onDisconnect}
            >
              Disconnect
            </button>
          </>
        ) : (
          <button
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
