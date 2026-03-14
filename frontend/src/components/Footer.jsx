import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
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
      { label: 'GitHub', href: 'https://github.com/AdekunleBamz/NFTminimint' },
      { label: 'SIP-009 NFT Standard', href: 'https://docs.stacks.co/reference/sips/sip009' }
    ]
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <span className="footer__logo">◆</span>
          <span className="footer__title">NFTminimint</span>
          <p className="footer__description">
            Mint lightweight NFTs on Stacks with a wallet-first flow,
            clear on-chain feedback, and collection context that stays visible.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h4 className="footer__heading">Project</h4>
            <ul className="footer__list">
              {links.project.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer__link" target="_blank" rel="noopener noreferrer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Community</h4>
            <ul className="footer__list">
              {links.community.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer__link" target="_blank" rel="noopener noreferrer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Resources</h4>
            <ul className="footer__list">
              {links.resources.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="footer__link"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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

export default Footer
