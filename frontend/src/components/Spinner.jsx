import PropTypes from 'prop-types'
import './Spinner.css'

export function Spinner({ size = 'medium', tone = 'primary', className = '' }) {
  return (
    <span
      className={`spinner spinner--${size} spinner--${tone} ${className}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <span className="spinner__ring" aria-hidden="true"></span>
    </span>
  )
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  tone: PropTypes.oneOf(['primary', 'white', 'success']),
  className: PropTypes.string
}
