import './Stats.css'

function Stats({ contractInfo, isLoading }) {
  const formatSTX = (microstx) => {
    if (!microstx) return '0'
    return (parseFloat(microstx) / 1e6).toString()
  }

  const calculateProgress = () => {
    if (!contractInfo?.maxSupply || contractInfo.maxSupply === 0) return 0
    return (contractInfo.totalSupply / contractInfo.maxSupply) * 100
  }

  const stats = [
    {
      label: 'Total Minted',
      value: `${contractInfo?.totalSupply || 0}`,
      icon: '🎨',
      color: '#8b5cf6'
    },
    {
      label: 'Max Supply',
      value: `${contractInfo?.maxSupply || '∞'}`,
      icon: '📦',
      color: '#ec4899'
    },
    {
      label: 'Mint Price',
      value: `${formatSTX(contractInfo?.mintFee)} STX`,
      icon: '💎',
      color: '#06b6d4'
    },
    {
      label: 'Per Wallet Limit',
      value: `${contractInfo?.maxPerWallet || '∞'}`,
      icon: '👛',
      color: '#10b981'
    }
  ]

  if (isLoading) {
    return (
      <section className="stats">
        <h2 className="stats__title">Collection Stats</h2>
        <div className="stats__grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="stat-card stat-card--skeleton">
              <div className="skeleton skeleton--icon"></div>
              <div className="skeleton skeleton--value"></div>
              <div className="skeleton skeleton--label"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="stats">
      <h2 className="stats__title">Collection Stats</h2>
      
      <div className="stats__progress">
        <div className="progress-bar">
          <div 
            className="progress-bar__fill" 
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>
        <span className="progress-text">
          {calculateProgress().toFixed(1)}% minted
        </span>
      </div>

      <div className="stats__grid">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stat-card"
            style={{ '--accent-color': stat.color }}
          >
            <span className="stat-card__icon">{stat.icon}</span>
            <span className="stat-card__value">{stat.value}</span>
            <span className="stat-card__label">{stat.label}</span>
          </div>
        ))}
      </div>

      {contractInfo?.isPaused && (
        <div className="stats__paused">
          <span className="stats__paused-icon">⏸️</span>
          <span>Contract is currently paused</span>
        </div>
      )}
    </section>
  )
}

export default Stats
