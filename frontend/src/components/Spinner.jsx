/**
 * Spinner component for indicating loading or processing states.
 * 
 * Provides an animated loading indicator with customizable size and color.
 * Includes proper ARIA attributes for screen reader accessibility.
 * 
 * @module Spinner
 */
import PropTypes from 'prop-types'
import './Spinner.css'

export function Spinner({ size = 'medium', tone = 'primary', className = '', label = 'Loading content' }) {
  const safeLabel = typeof label === 'string' && label.trim() ? label.trim() : 'Loading'
  const composedClass = ['spinner', `spinner--${size}`, `spinner--${tone}`, className].filter(Boolean).join(' ')
  return (
    <span
      className={composedClass}
      role="status"
      aria-live="polite"
      aria-label={safeLabel}
      title={safeLabel}
    >
      <span className="spinner__ring" aria-hidden="true"></span>
    </span>
  )
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  tone: PropTypes.oneOf(['primary', 'white', 'success']),
  className: PropTypes.string,
  label: PropTypes.string
}

/**
 * Default export for Spinner component.
 * @type {React.FC<SpinnerProps>}
 */
export default Spinner
