/**
 * Card component for containing and presenting content with various styles.
 * 
 * Provides a flexible container with support for clickable behavior,
 * hover effects, and multiple visual variants. Includes CardHeader,
 * CardBody, and CardFooter sub-components for structured layouts.
 * 
 * @module Card
 */

import PropTypes from 'prop-types'
import { useCallback } from 'react'
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
  const handleKeyDown = useCallback((e) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick(e)
    }
  }, [onClick])

  return (
    <div 
      className={`card card--${variant} card--padding-${padding} ${hover ? 'card--hover' : ''} ${onClick ? 'card--clickable' : ''} ${className}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : 'region'}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? ariaLabel : ariaLabel}
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

/**
 * Default export for Card component with sub-components.
 * @type {React.FC<CardProps> & { Header: React.FC; Body: React.FC; Footer: React.FC }}
 */
Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
export default Card
