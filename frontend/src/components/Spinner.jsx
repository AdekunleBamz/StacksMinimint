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
  return (
    <span
      className={`spinner spinner--${size} spinner--${tone} ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}
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
