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
const CHAIN_TOOLTIP = `Current network: ${CHAIN_NAME}`

export function normalizeHeaderAccount(account) {
  return typeof account === 'string' ? account.trim() : account
}

export function getHeaderConnectionState({ hasAccount, isConnecting }) {
  if (hasAccount) return 'connected'
  return isConnecting ? 'connecting' : 'disconnected'
}

export function getHeaderConnectButtonA11y(isConnecting) {
  const label = isConnecting ? 'Connecting wallet' : 'Connect wallet'
  return {
    label,
    title: label
  }
}

export function getHeaderWalletStatus(hasAccount) {
  return hasAccount
    ? { text: 'Wallet ready', title: 'Wallet is connected and ready' }
    : { text: 'Wallet disconnected', title: 'Wallet is disconnected' }
}

export function getHeaderAccountLength(account, hasAccount) {
  if (!hasAccount || typeof account !== 'string') return 0
  return account.length
}

export function Header({ account, onConnect, onDisconnect, isConnecting, walletError }) {
  const { copied, copy } = useClipboard()
  const normalizedAccount = normalizeHeaderAccount(account)
  const hasAccount = typeof normalizedAccount === 'string' ? normalizedAccount.length > 0 : Boolean(normalizedAccount)
  const connectionState = getHeaderConnectionState({ hasAccount, isConnecting })
  const connectButtonA11y = getHeaderConnectButtonA11y(isConnecting)
  const walletStatus = walletError
    ? { text: walletError, title: walletError }
    : getHeaderWalletStatus(hasAccount)
  const accountLength = getHeaderAccountLength(normalizedAccount, hasAccount)

  const handleCopy = useCallback(() => {
    if (normalizedAccount) copy(normalizedAccount)
  }, [normalizedAccount, copy])

  return (
    <header
      className="header"
      data-connected={hasAccount ? 'true' : 'false'}
      data-connecting={isConnecting ? 'true' : 'false'}
      data-connection-state={connectionState}
    >
      <div className="header__brand">
        <img src={logo} alt="StacksMinimint Logo" className="header__logo" width="32" height="32" title="StacksMinimint logo" />
        <span className="header__title" title="StacksMinimint home">StacksMinimint</span>
      </div>

      <div className="header__wallet">
        <span
          className="header__sr-status"
          id="header-wallet-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          title={walletStatus.title}
        >
          {walletStatus.text}
        </span>
        {hasAccount ? (
          <>
            <span className="header__chain" data-chain={CHAIN_NAME} title={CHAIN_TOOLTIP} aria-label={CHAIN_NAME}>
              {CHAIN_NAME}
            </span>
            <button
              type="button"
              className="header__address-wrapper"
              data-copy-state={copied ? 'copied' : 'idle'}
              data-copy-available={hasAccount ? 'true' : 'false'}
              data-account-length={String(accountLength)}
              onClick={handleCopy}
              title={`Copy wallet address: ${normalizedAccount}`}
              aria-label="Copy wallet address to clipboard"
              aria-describedby="header-wallet-status"
            >
              <span className="header__address-label">Wallet</span>
              <span className="header__address" aria-hidden="true">{formatAddress(normalizedAccount)}</span>
              <span className="header__copy-hint" aria-hidden="true">Copy address</span>
              {copied && (
                <span className="header__copied-toast" role="status" aria-live="polite" aria-atomic="true" title="Wallet address copied to clipboard">
                  Address copied
                </span>
              )}
            </button>
            <button
              type="button"
              className="header__btn header__btn--disconnect"
              onClick={onDisconnect}
              aria-label="Disconnect wallet"
              aria-describedby="header-wallet-status"
              title="Disconnect your Stacks wallet"
            >
              Disconnect
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="header__btn header__btn--connect"
              data-connecting={isConnecting ? 'true' : 'false'}
              onClick={onConnect}
              disabled={isConnecting}
              aria-busy={isConnecting}
              aria-describedby="header-wallet-status"
              title={connectButtonA11y.title}
              aria-label={connectButtonA11y.label}
            >
              {isConnecting ? 'Connecting...' : 'Connect wallet'}
            </button>
            {walletError && (
              <span className="header__wallet-error" role="alert" title={walletError}>
                {walletError}
              </span>
            )}
          </>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  account: PropTypes.string,
  onConnect: PropTypes.func.isRequired,
  onDisconnect: PropTypes.func.isRequired,
  isConnecting: PropTypes.bool,
  walletError: PropTypes.string
}

/**
 * Default export for Header component.
 * @type {React.FC<HeaderProps>}
 */
export default Header
