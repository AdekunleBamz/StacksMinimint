// Module note: keeps card behavior responsibilities explicit.
// Note: Card module
// Scope: keep Card concerns isolated.

import PropTypes from 'prop-types'
import './Card.css'

export function Card({ 
  children, 
  variant = 'default',
  padding = 'medium',
  hover = false,
  className = '',
  onClick,
  ariaLabel,
  ariaDescriptionId
}) {
  const handleKeyDown = (e) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick(e)
    }
  }

  return (
    <div 
      className={`card card--${variant} card--padding-${padding} ${hover ? 'card--hover' : ''} ${onClick ? 'card--clickable' : ''} ${className}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? ariaLabel : undefined}
      aria-describedby={ariaDescriptionId}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`card__header ${className}`}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`card__body ${className}`}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`card__footer ${className}`}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined', 'glass', 'gradient']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  hover: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  ariaDescriptionId: PropTypes.string
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
