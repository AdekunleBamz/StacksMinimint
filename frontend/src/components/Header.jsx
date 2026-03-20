// Note: Header module
// Scope: keep Header concerns isolated.

import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useClipboard } from '../hooks'
import './Header.css'

import logo from '../assets/logo.png'
import { formatAddress } from '../utils/collection'
import { NETWORK } from '../constants'

export function Header({ account, onConnect, onDisconnect, isConnecting }) {
  const { copied, copy } = useClipboard()
  const chainName = NETWORK === 'mainnet' ? 'Stacks Mainnet' : 'Stacks Testnet'

  const handleCopy = useCallback(() => {
    if (account) copy(account)
  }, [account, copy])

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
              {copied && <span className="header__copied-toast" role="status" aria-live="polite">Copied!</span>}
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

Header.propTypes = {
  account: PropTypes.string,
  onConnect: PropTypes.func.isRequired,
  onDisconnect: PropTypes.func.isRequired,
  isConnecting: PropTypes.bool
}
