// Note: Footer module
// Scope: keep Footer concerns isolated.

import './Footer.css'

const FOOTER_LINKS = {
  project: [
    { label: 'Stacks', href: 'https://www.stacks.co/' },
    { label: 'Hiro Explorer', href: 'https://explorer.hiro.so/?chain=mainnet' },
    { label: 'IPFS Docs', href: 'https://docs.ipfs.tech/' }
  ],
  community: [
    { label: 'Stacks Discord', href: 'https://discord.gg/stacks' },
    { label: 'Stacks on X', href: 'https://x.com/Stacks' },
    { label: 'Leather Wallet', href: 'https://leather.io/' }
  ],
  resources: [
    { label: 'Stacks Docs', href: 'https://docs.stacks.co/' },
    { label: 'GitHub', href: 'https://github.com/AdekunleBamz/StacksMinimint' },
    { label: 'SIP-009 NFT Standard', href: 'https://docs.stacks.co/reference/sips/sip009' }
  ]
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <span className="footer__logo" aria-hidden="true">◆</span>
          <span className="footer__title">NFTminimint</span>
          <p className="footer__description">
            Mint lightweight NFTs on Stacks with a wallet-first flow,
            clear on-chain feedback, and collection context that stays visible.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3 className="footer__heading">Project</h3>
            <ul className="footer__list">
              {FOOTER_LINKS.project.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} (opens in a new tab)`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Community</h3>
            <ul className="footer__list">
              {FOOTER_LINKS.community.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} (opens in a new tab)`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Resources</h3>
            <ul className="footer__list">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} (opens in a new tab)`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} NFTminimint. All rights reserved.
        </p>
        <p className="footer__credit">
          Built for Stacks NFT drops
        </p>
      </div>
    </footer>
  )
}
