import './ProgressBar.css'

function ProgressBar({ value, max = 100, showLabel = true, size = 'medium', color = 'primary' }) {
  const safeMax = max > 0 ? max : 100
  const percentage = Math.min(Math.max((value / safeMax) * 100, 0), 100)

  return (
    <div className={`progress progress--${size}`}>
      <div className="progress__bar">
        <div 
          className={`progress__fill progress__fill--${color}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={safeMax}
        />
      </div>
      {showLabel && (
        <span className="progress__label">
          {percentage.toFixed(1)}%
        </span>
      )}
    </div>
  )
}

export default ProgressBar
