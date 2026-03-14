import './Features.css'

const features = [
  {
    icon: '⚡',
    title: 'Gas Efficient',
    description: 'Optimized smart contract design minimizes gas costs for minting your NFTs.'
  },
  {
    icon: '🔒',
    title: 'Secure',
    description: 'Built with OpenZeppelin security standards and best practices.'
  },
  {
    icon: '🎨',
    title: 'Custom Metadata',
    description: 'Full ERC-721 compliance with customizable token URIs for your artwork.'
  },
  {
    icon: '⏸️',
    title: 'Pausable',
    description: 'Contract owner can pause minting when needed for emergency situations.'
  },
  {
    icon: '👛',
    title: 'Wallet Limits',
    description: 'Built-in per-wallet minting limits to ensure fair distribution.'
  },
  {
    icon: '💎',
    title: 'Configurable',
    description: 'Adjustable mint price, max supply, and other parameters post-deployment.'
  }
]

function Features() {
  return (
    <section className="features">
      <div className="features__header">
        <span className="features__badge">Features</span>
        <h2 className="features__title">Built for Creators</h2>
        <p className="features__subtitle">
          Everything you need to launch your NFT collection with confidence
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
