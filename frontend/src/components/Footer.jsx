import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    project: [
      { label: 'Mint Workspace', href: '#mint-section' },
      { label: 'Recent Activity', href: '#activity-section' },
      { label: 'Submission Gallery', href: '#gallery-section' }
    ],
    community: [
      { label: 'Stacks Discord', href: 'https://discord.gg/stacks' },
      { label: 'Stacks on X', href: 'https://x.com/Stacks' },
      { label: 'Hiro on X', href: 'https://x.com/hirosystems' }
    ],
    resources: [
      { label: 'Stacks Docs', href: 'https://docs.stacks.co/' },
      { label: 'Hiro Explorer', href: 'https://explorer.hiro.so/?chain=mainnet' },
      { label: 'Clarity Reference', href: 'https://docs.stacks.co/reference/clarity' }
    ]
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <span className="footer__logo">◆</span>
          <span className="footer__title">NFTminimint</span>
          <p className="footer__description">
            A focused Stacks minting interface with persistent drafts, truthful local receipts, and cleaner wallet handoffs.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h4 className="footer__heading">Navigate</h4>
            <ul className="footer__list">
              {links.project.map((link, i) => (
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

          <div className="footer__column">
            <h4 className="footer__heading">Community</h4>
            <ul className="footer__list">
              {links.community.map((link, i) => (
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
          © {currentYear} NFTminimint. Built for Stacks mainnet demos.
        </p>
        <p className="footer__credit">
          Mint flow, gallery, and activity surfaces tuned for lower-friction submissions.
        </p>
      </div>
    </footer>
  )
}

export default Footer
