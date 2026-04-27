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
  const MAX_PERCENTAGE = 100
  const SUPPORTED_COLORS = ['primary', 'success', 'warning', 'danger', 'gradient', 'striped']
  const safeMax = typeof max === 'number' && max > 0 ? max : MAX_PERCENTAGE
  const safeValue = typeof value === 'number' && Number.isFinite(value) ? value : 0
  const safeColor = SUPPORTED_COLORS.includes(color) ? color : 'primary'
  const boundedValue = Math.min(Math.max(safeValue, 0), safeMax)
  const percentage = Math.min(Math.max((boundedValue / safeMax) * MAX_PERCENTAGE, 0), MAX_PERCENTAGE)
  const formattedPercentage = percentage.toFixed(1)

  return (
    <div className={`progress progress--${size}`} data-size={size} data-color={safeColor} data-show-label={showLabel ? 'true' : 'false'}>
      <div className="progress__bar">
        <div 
          className={`progress__fill progress__fill--${safeColor}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-label={ariaLabel}
          aria-valuenow={boundedValue}
          aria-valuemin={0}
          aria-valuemax={safeMax}
          aria-valuetext={`${formattedPercentage}%`}
        />
      </div>
      {showLabel && (
        <span className="progress__label" aria-live="polite" title={`${formattedPercentage}%`}>
          {formattedPercentage}%
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
  color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'gradient', 'striped']),
  ariaLabel: PropTypes.string
}

/**
 * Default export for ProgressBar component.
 * @type {React.FC<ProgressBarProps>}
 */
export default ProgressBar
