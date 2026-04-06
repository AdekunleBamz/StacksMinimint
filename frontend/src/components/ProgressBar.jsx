/**
 * ProgressBar component for visualizing completion percentage.
 * 
 * Supports customizable colors, sizes, and optional percentage labels.
 * Includes proper ARIA attributes for accessibility.
 * 
 * @module ProgressBar
 */

import PropTypes from 'prop-types'
import './ProgressBar.css'

export function ProgressBar({ value, max = 100, showLabel = true, size = 'medium', color = 'primary', ariaLabel = 'Progress' }) {
  const safeMax = max > 0 ? max : 100
  const boundedValue = Math.min(Math.max(value, 0), safeMax)
  const percentage = Math.min(Math.max((boundedValue / safeMax) * 100, 0), 100)

  return (
    <div className={`progress progress--${size}`}>
      <div className="progress__bar">
        <div 
          className={`progress__fill progress__fill--${color}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-label={ariaLabel}
          aria-valuenow={boundedValue}
          aria-valuemin={0}
          aria-valuemax={safeMax}
        />
      </div>
      {showLabel && (
        <span className="progress__label" aria-live="polite">
          {percentage.toFixed(1)}%
        </span>
      )}
    </div>
  )
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  showLabel: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
  ariaLabel: PropTypes.string
}

/**
 * Default export for ProgressBar component.
 * @type {React.FC<ProgressBarProps>}
 */
export default ProgressBar
