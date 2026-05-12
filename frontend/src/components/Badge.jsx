/**
 * Badge component for displaying status indicators and labels.
 * 
 * Supports multiple variants (default, primary, success, warning, danger, info)
 * and sizes (small, medium, large). Can optionally display a dot indicator.
 * 
 * @module Badge
 */

import PropTypes from 'prop-types'
import './Badge.css'

/**
 * Compact label for status, category, and metadata chips.
 */
export function Badge({ 
  children, 
  variant = 'default', 
  size = 'medium',
  dot = false,
  className = '',
  title
}) {
  const tone = typeof variant === 'string' ? variant.split('-')[0] : 'default'
  if (children == null && !dot) return null
  const fallbackTitle = typeof children === 'string' || typeof children === 'number'
    ? String(children).trim()
    : undefined
  const safeTitle = typeof title === 'string' && title.trim() ? title.trim() : fallbackTitle
  const labelLength = safeTitle ? safeTitle.length : 0
  return (
    <span
      className={['badge', `badge--${variant}`, `badge--${size}`, className].filter(Boolean).join(' ')}
      data-variant={variant}
      data-tone={tone}
      data-size={size}
      data-dot={dot ? 'true' : 'false'}
      data-label-length={String(labelLength)}
      data-has-title={safeTitle ? 'true' : 'false'}
      title={safeTitle}
      aria-label={safeTitle}
    >
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
  className: PropTypes.string,
  title: PropTypes.string
}

/**
 * Default export for Badge component.
 * @type {React.FC<BadgeProps>}
 */
export default Badge
