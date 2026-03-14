import { useId, useState } from 'react'
import './Tooltip.css'

function Tooltip({ children, content, position = 'top' }) {
  const [isVisible, setIsVisible] = useState(false)
  const tooltipId = useId()

  return (
    <div 
      className="tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      aria-describedby={isVisible && content ? tooltipId : undefined}
    >
      {children}
      {isVisible && content && (
        <div id={tooltipId} className={`tooltip tooltip--${position}`} role="tooltip">
          {content}
          <div className="tooltip__arrow"></div>
        </div>
      )}
    </div>
  )
}

export default Tooltip
