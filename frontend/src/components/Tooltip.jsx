import { useId, useState } from 'react'
import PropTypes from 'prop-types'
import './Tooltip.css'

export function Tooltip({ children, content, position = 'top', delay = 300 }) {
  const [isVisible, setIsVisible] = useState(false)
  const [timer, setTimer] = useState(null)
  const tooltipId = useId()

  const showTooltip = () => {
    const newTimer = setTimeout(() => setIsVisible(true), delay)
    setTimer(newTimer)
  }

  const hideTooltip = () => {
    if (timer) clearTimeout(timer)
    setIsVisible(false)
  }

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

