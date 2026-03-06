import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    project: [
      { label: 'OpenSea', href: '#' },
      { label: 'Etherscan', href: '#' },
      { label: 'IPFS Gateway', href: '#' }
    ],
    community: [
      { label: 'Discord', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Telegram', href: '#' }
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'GitHub', href: 'https://github.com/AdekunleBamz/NFTminimint' },
      { label: 'Smart Contract', href: '#' }
    ]
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <span className="footer__logo">◆</span>
          <span className="footer__title">NFTminimint</span>
          <p className="footer__description">
            Create and collect unique digital art on the blockchain.
            Simple, secure, and decentralized.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h4 className="footer__heading">Project</h4>
            <ul className="footer__list">
              {links.project.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Community</h4>
            <ul className="footer__list">
              {links.community.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer__link">{link.label}</a>
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
        <p className="footer__disclaimer">
          Built with ♥ on Ethereum
        </p>
      </div>
    </footer>
  )
}

export default Footer
