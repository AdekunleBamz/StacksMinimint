import './Features.css'

const features = [
  {
    icon: 'Save',
    title: 'Persistent Drafts',
    description: 'Metadata URIs stay saved on the current device so a refresh or wallet detour does not wipe the form.'
  },
  {
    icon: 'Scan',
    title: 'Local Validation',
    description: 'ASCII, length, and URI-scheme checks run before the wallet prompt opens, reducing avoidable failed submissions.'
  },
  {
    icon: 'Tx',
    title: 'Receipt Tracking',
    description: 'Every submitted mint keeps an explorer receipt in the Recent Activity rail for fast copy and review.'
  },
  {
    icon: 'Grid',
    title: 'Submission Gallery',
    description: 'Recent metadata URIs can be searched, opened, and reviewed in both grid and list layouts.'
  },
  {
    icon: 'Live',
    title: 'Live Mint Context',
    description: 'The side rail keeps price, supply, availability, and wallet readiness visible while users stay on the form.'
  },
  {
    icon: 'Keys',
    title: 'Accessible Controls',
    description: 'Keyboard-friendly navigation, clearer status messaging, and reduced-motion support make the mint flow easier to use.'
  }
]

function Features() {
  return (
    <section className="features">
      <div className="features__header">
        <span className="features__badge">Features</span>
        <h2 className="features__title">Built for Clear Minting Decisions</h2>
        <p className="features__subtitle">
          The UI now focuses on reducing lost context during minting instead of relying on demo-only content.
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
