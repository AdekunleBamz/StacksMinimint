// Note: Badge module
// Scope: keep Badge concerns isolated.

import PropTypes from 'prop-types'
import './Badge.css'

export function Badge({ 
  children, 
  variant = 'default', 
  size = 'medium',
  dot = false,
  className = '' 
}) {
  return (
    <span className={`badge badge--${variant} badge--${size} ${className}`}>
      {dot && <span className="badge__dot" aria-hidden="true" />}
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'info',
    'primary-solid',
    'success-solid',
    'danger-solid'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  dot: PropTypes.bool,
  className: PropTypes.string
}
