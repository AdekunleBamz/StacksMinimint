/**
 * Header component displaying branding and wallet connection controls.
 * 
 * Shows network status, wallet address with copy functionality, and
 * connect/disconnect actions. Integrates with the Stacks wallet hooks.
 * 
 * @module Header
 */

import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useClipboard } from '../hooks'
import './Header.css'

import logo from '../assets/logo.png'
import { formatAddress } from '../utils/collection'
import { NETWORK } from '../constants'

const CHAIN_NAME = NETWORK === 'mainnet' ? 'Stacks Mainnet' : 'Stacks Testnet'

export function Header({ account, onConnect, onDisconnect, isConnecting }) {
  const { copied, copy } = useClipboard()
  const normalizedAccount = typeof account === 'string' ? account.trim() : account
  const hasAccount = typeof normalizedAccount === 'string' ? normalizedAccount.length > 0 : Boolean(normalizedAccount)

  const handleCopy = useCallback(() => {
    if (normalizedAccount) copy(normalizedAccount)
  }, [normalizedAccount, copy])

  return (
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt="StacksMinimint Logo" className="header__logo" width="32" height="32" />
        <span className="header__title">StacksMinimint</span>
      </div>

      <div className="header__wallet">
        {hasAccount ? (
          <>
            <span className="header__chain">{CHAIN_NAME}</span>
            <button
              type="button"
              className="header__address-wrapper"
              onClick={handleCopy}
              title={normalizedAccount}
              aria-label="Copy wallet address"
            >
              <span className="header__address-label">Wallet</span>
              <span className="header__address" aria-hidden="true">{formatAddress(normalizedAccount)}</span>
              <span className="header__copy-hint" aria-hidden="true">Copy</span>
              {copied && <span className="header__copied-toast" role="status" aria-live="polite">Copied!</span>}
            </button>
            <button
              type="button"
              className="header__btn header__btn--disconnect"
              onClick={onDisconnect}
              aria-label="Disconnect wallet"
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
            aria-busy={isConnecting}
            title={isConnecting ? 'Connecting wallet' : 'Connect wallet'}
            aria-label={isConnecting ? 'Connecting wallet' : 'Connect wallet'}
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

/**
 * Default export for Header component.
 * @type {React.FC<HeaderProps>}
 */
export default Header
