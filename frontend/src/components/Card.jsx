import PropTypes from 'prop-types'
import './Card.css'

function Card({ 
  children, 
  variant = 'default',
  padding = 'medium',
  hover = false,
  className = '',
  onClick,
  ariaLabel
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
    >
      {children}
    </div>
  )
}

function CardHeader({ children, className = '' }) {
  return (
    <div className={`card__header ${className}`}>
      {children}
    </div>
  )
}

function CardBody({ children, className = '' }) {
  return (
    <div className={`card__body ${className}`}>
      {children}
    </div>
  )
}

function CardFooter({ children, className = '' }) {
  return (
    <div className={`card__footer ${className}`}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'flat', 'outline', 'elevated']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  hover: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string
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

export { Card, CardHeader, CardBody, CardFooter }
export default Card
