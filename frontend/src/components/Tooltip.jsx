// Module note: keeps tooltip behavior responsibilities explicit.
// Note: Tooltip module
// Scope: keep Tooltip concerns isolated.

import { useEffect, useId, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Tooltip.css'

export function Tooltip({ children, content, position = 'top', delay = 300 }) {
  const [isVisible, setIsVisible] = useState(false)
  const timerRef = useRef(null)
  const tooltipId = useId()

  const showTooltip = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => setIsVisible(true), delay)
  }

  const hideTooltip = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setIsVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return (
    <div 
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
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

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  delay: PropTypes.number
}
