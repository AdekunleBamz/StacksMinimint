import './Header.css'
import logo from '../assets/logo.png'
import { formatAddress } from '../utils/collection'

const links = [
  { label: 'Mint', href: '#mint-section' },
  { label: 'Activity', href: '#activity-section' },
  { label: 'Gallery', href: '#gallery-section' },
  { label: 'Features', href: '#collection-section' }
]

function Header({
  account,
  onConnect,
  onDisconnect,
  isConnecting,
  networkLabel = 'Stacks',
  onCopyAddress = () => {},
  activityCount = 0
}) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand-group">
          <a className="header__brand" href="#top" aria-label="Go to top of page">
            <img src={logo} alt="" className="header__logo" />
            <div className="header__brand-copy">
              <span className="header__title">NFTminimint</span>
              <span className="header__tagline">Focused Stacks minting workflow</span>
            </div>
          </a>

          <nav className="header__nav" aria-label="Primary navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="header__nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="header__wallet">
          <div className="header__pills">
            <span className="header__chain">{networkLabel}</span>
            <span className="header__activity">{activityCount} recent</span>
          </div>

          {account ? (
            <>
              <div className="header__account">
                <span className="header__account-label">Connected wallet</span>
                <span className="header__address">{formatAddress(account, 6, 4)}</span>
              </div>
              <button
                className="header__btn header__btn--ghost"
                onClick={onCopyAddress}
                type="button"
              >
                Copy
              </button>
              <button
                className="header__btn header__btn--disconnect"
                onClick={onDisconnect}
                type="button"
              >
                Disconnect
              </button>
            </>
          ) : (
            <button
              className="header__btn header__btn--connect"
              onClick={onConnect}
              disabled={isConnecting}
              type="button"
            >
              {isConnecting ? 'Connecting...' : 'Connect Wallet'}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
