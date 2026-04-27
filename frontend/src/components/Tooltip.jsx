/**
 * Tooltip component for displaying contextual information on hover or focus.
 * 
 * Supports configurable positioning (top, bottom, left, right) and delay.
 * Includes proper ARIA attributes for screen reader accessibility.
 * 
 * @module Tooltip
 */

import { useEffect, useId, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Tooltip.css'

/** Default delay in ms before the tooltip becomes visible after hover or focus. */
const TOOLTIP_DEFAULT_DELAY_MS = 300;
/** Maximum clamped delay in ms to prevent excessively long tooltip delays. */
const TOOLTIP_MAX_DELAY_MS = 5000;
const TOOLTIP_POSITIONS = ['top', 'bottom', 'left', 'right']

export function Tooltip({ children, content, position = 'top', delay = TOOLTIP_DEFAULT_DELAY_MS }) {
  const [isVisible, setIsVisible] = useState(false)
  const timerRef = useRef(null)
  const tooltipId = useId()
  const safeDelay = typeof delay === 'number' && delay >= 0 ? Math.min(delay, TOOLTIP_MAX_DELAY_MS) : TOOLTIP_DEFAULT_DELAY_MS
  const safePosition = TOOLTIP_POSITIONS.includes(position) ? position : 'top'
  const safeContent = typeof content === 'string' ? content.trim() : content

  const showTooltip = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => setIsVisible(true), safeDelay)
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
      aria-describedby={isVisible && safeContent ? tooltipId : undefined}
    >
      {children}
      {isVisible && safeContent && (
        <div id={tooltipId} className={`tooltip tooltip--${safePosition}`} role="tooltip">
          {safeContent}
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

/**
 * Default export for Tooltip component.
 * @type {React.FC<TooltipProps>}
 */
export default Tooltip
