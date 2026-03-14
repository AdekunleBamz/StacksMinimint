import './Features.css'

const features = [
  {
    icon: '⚡',
    title: 'Lean Minting',
    description: 'Minimal contract calls keep the Stacks mint flow focused and efficient.'
  },
  {
    icon: '🔒',
    title: 'Wallet Confirmed',
    description: 'Transactions are approved in-wallet with clear post-conditions before submission.'
  },
  {
    icon: '🎨',
    title: 'Metadata Ready',
    description: 'Submit IPFS or HTTPS metadata links directly from the mint form.'
  },
  {
    icon: '⏸️',
    title: 'Pausable',
    description: 'Collection owners can pause minting cleanly when operations need to stop.'
  },
  {
    icon: '👛',
    title: 'Wallet Limits',
    description: 'Per-wallet limits keep distribution fair and reduce whale-heavy launches.'
  },
  {
    icon: '💎',
    title: 'Collector Feedback',
    description: 'Live supply, recent activity, and gallery views keep collectors oriented while minting.'
  }
]

function Features() {
  return (
    <section className="features">
      <div className="features__header">
        <span className="features__badge">Features</span>
        <h2 className="features__title">Built for Stacks Creators</h2>
        <p className="features__subtitle">
          The core UX pieces needed to launch and browse a simple Stacks NFT collection
        </p>
      </div>

      <div className="features__grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-card__icon">{feature.icon}</div>
            <h3 className="feature-card__title">{feature.title}</h3>
            <p className="feature-card__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
