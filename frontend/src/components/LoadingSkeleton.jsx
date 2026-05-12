/**
 * LoadingSkeleton component for displaying placeholder content during loading states.
 * 
 * Provides various skeleton variants (text, title, image, avatar) with
 * customizable dimensions. Includes preset layouts for cards and list items.
 * 
 * @module LoadingSkeleton
 */

import PropTypes from 'prop-types'
import './LoadingSkeleton.css'

/** Maximum allowed skeleton count to prevent runaway rendering. */
const SKELETON_MAX_COUNT = 40;

/**
 * Renders one or more non-interactive placeholder blocks for loading content.
 */
export function LoadingSkeleton({ variant = 'text', width, height, count = 1, className = '' }) {
  const SUPPORTED_VARIANTS = ['text', 'title', 'image', 'avatar', 'button', 'circle', 'rect']
  const safeCount = Number.isInteger(count) && count > 0 ? Math.min(count, SKELETON_MAX_COUNT) : 1
  const safeVariant = SUPPORTED_VARIANTS.includes(variant) ? variant : 'text'
  const normalizedClassName = typeof className === 'string' ? className.trim() : className
  const hasWidth = Boolean(width)
  const hasHeight = Boolean(height)
  const skeletons = Array.from({ length: safeCount }, (_, i) => i)

  const getStyle = () => {
    const style = {}
    if (width) style.width = typeof width === 'number' ? `${width}px` : width
    if (height) style.height = typeof height === 'number' ? `${height}px` : height
    return style
  }

  return (
    <>
      {skeletons.map((index) => (
        <div
          key={index}
          className={['skeleton', `skeleton--${safeVariant}`, normalizedClassName].filter(Boolean).join(' ')}
          data-variant={safeVariant}
          data-index={index}
          data-count={String(safeCount)}
          data-width-set={hasWidth ? 'true' : 'false'}
          data-height-set={hasHeight ? 'true' : 'false'}
          data-animated="true"
          role="presentation"
          style={getStyle()}
          aria-hidden="true"
        />
      ))}
    </>
  )
}

// Preset skeleton layouts
export function CardSkeleton() {
  return (
    <div className="skeleton-card">
      <LoadingSkeleton variant="image" height={200} />
      <div className="skeleton-card__body">
        <LoadingSkeleton variant="title" width="60%" />
        <LoadingSkeleton variant="text" count={2} />
        <LoadingSkeleton variant="text" width="40%" />
      </div>
    </div>
  )
}

export function ListItemSkeleton() {
  return (
    <div className="skeleton-list-item">
      <LoadingSkeleton variant="avatar" />
      <div className="skeleton-list-item__content">
        <LoadingSkeleton variant="title" width="50%" />
        <LoadingSkeleton variant="text" width="80%" />
      </div>
    </div>
  )
}

LoadingSkeleton.propTypes = {
  variant: PropTypes.oneOf(['text', 'title', 'image', 'avatar', 'button', 'circle', 'rect']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  count: PropTypes.number,
  className: PropTypes.string
}

CardSkeleton.propTypes = {}
ListItemSkeleton.propTypes = {}

/**
 * Default export for LoadingSkeleton component.
 * @type {React.FC<LoadingSkeletonProps>}
 */
export default LoadingSkeleton
