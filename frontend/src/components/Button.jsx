/**
 * Button component with enhanced accessibility support.
 * 
 * Provides a reusable button with proper ARIA attributes,
 * keyboard navigation, and loading states.
 * 
 * @module Button
 */

import PropTypes from 'prop-types'
import './Button.css'

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button', 
  disabled = false, 
  className = '', 
  ariaLabel,
  'aria-busy': ariaBusy,
  size = 'medium',
  fullWidth = false,
  icon,
  iconPosition = 'left'
}) {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-busy={ariaBusy}
      aria-disabled={disabled}
    >
      {icon && iconPosition === 'left' && (
        <span className="btn__icon btn__icon--left" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="btn__text">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  'aria-busy': PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right'])
}