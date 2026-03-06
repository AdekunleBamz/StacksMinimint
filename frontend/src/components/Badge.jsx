import './Badge.css'

function Badge({ 
  children, 
  variant = 'default', 
  size = 'medium',
  dot = false,
  className = '' 
}) {
  return (
    <span className={`badge badge--${variant} badge--${size} ${className}`}>
      {dot && <span className="badge__dot" />}
      {children}
    </span>
  )
}

export default Badge
