import './LoadingSkeleton.css'

function LoadingSkeleton({ variant = 'text', width, height, count = 1, className = '' }) {
  const skeletons = Array.from({ length: count }, (_, i) => i)

  const getStyle = () => {
    const style = {}
    if (width) style.width = typeof width === 'number' ? `${width}px` : width
    if (height) style.height = typeof height === 'number' ? `${height}px` : height
    return style
  }

  return (
    <>
      {skeletons.map((i) => (
        <div
          key={i}
          className={`skeleton skeleton--${variant} ${className}`}
          style={getStyle()}
          aria-hidden="true"
        />
      ))}
    </>
  )
}

// Preset skeleton layouts
function CardSkeleton() {
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

function ListItemSkeleton() {
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

export { LoadingSkeleton, CardSkeleton, ListItemSkeleton }
export default LoadingSkeleton
