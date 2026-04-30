/**
 * Footer component displaying site-wide links and branding.
 * 
 * Organizes links into Project, Community, and Resources sections.
 * All external links open in new tabs with proper security attributes.
 * 
 * @module Footer
 */

import './Footer.css'
import { CONTRACT_ADDRESS, CONTRACT_NAME, HUB_CONTRACT_ADDRESS, HUB_CONTRACT_NAME, NETWORK } from '../constants'

const coreContractPrincipal = `${CONTRACT_ADDRESS}.${CONTRACT_NAME}`
const hubContractPrincipal = `${HUB_CONTRACT_ADDRESS}.${HUB_CONTRACT_NAME}`

const FOOTER_LINKS = {
  project: [
    { label: 'Stacks', href: 'https://www.stacks.co/' },
    { label: 'Hiro Explorer', href: `https://explorer.hiro.so/?chain=${NETWORK}` },
    { label: 'IPFS Docs', href: 'https://docs.ipfs.tech/' }
  ],
  community: [
    { label: 'Stacks Discord', href: 'https://discord.gg/stacks' },
    { label: 'Stacks on X', href: 'https://x.com/Stacks' },
    { label: 'Leather Wallet', href: 'https://leather.io/' }
  ],
  resources: [
    { label: 'Stacks Docs', href: 'https://docs.stacks.co/' },
    { label: 'Core Contract', href: `https://explorer.hiro.so/address/${coreContractPrincipal}?chain=${NETWORK}` },
    { label: 'Hub Contract', href: `https://explorer.hiro.so/address/${hubContractPrincipal}?chain=${NETWORK}` },
    { label: 'GitHub', href: 'https://github.com/AdekunleBamz/StacksMinimint' },
    { label: 'SIP-009 NFT Standard', href: 'https://docs.stacks.co/reference/sips/sip009' }
  ]
}

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const linkColumnCount = Object.keys(FOOTER_LINKS).length

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="footer__content" data-column-count={linkColumnCount}>
        <div className="footer__brand" aria-label="StacksMinimint brand summary">
          <span className="footer__logo" aria-hidden="true">◆</span>
          <span className="footer__title">StacksMinimint</span>
          <p className="footer__description" title="Wallet-first NFT minting experience on Stacks">
            Mint lightweight NFTs on Stacks with wallet-first confirmations,
            clear on-chain feedback, and collection context at a glance.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3 className="footer__heading">Project</h3>
            <nav aria-label="Project links" data-link-count={FOOTER_LINKS.project.length}>
              <ul className="footer__list">
                {FOOTER_LINKS.project.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="footer__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} (opens in a new tab)`}
                      title={`${link.label} (opens in a new tab)`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Community</h3>
            <nav aria-label="Community links" data-link-count={FOOTER_LINKS.community.length}>
              <ul className="footer__list">
                {FOOTER_LINKS.community.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="footer__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} (opens in a new tab)`}
                      title={`${link.label} (opens in a new tab)`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading" id="footer-resource-links-heading">Resources</h3>
            <nav aria-labelledby="footer-resource-links-heading" data-link-count={FOOTER_LINKS.resources.length}>
              <ul className="footer__list">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="footer__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} (opens in a new tab)`}
                      title={`${link.label} (opens in a new tab)`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="footer__bottom" aria-label="Footer legal and attribution">
        <p className="footer__copyright">
          © {CURRENT_YEAR} StacksMinimint. Open source under MIT.
        </p>
        <p className="footer__credit">
          Built for Stacks NFT collections and creators
        </p>
      </div>
    </footer>
  )
}

/**
 * Default export for Footer component.
 * @type {React.FC}
 */
export default Footer
