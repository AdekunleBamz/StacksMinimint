/**
 * Toast component for displaying transient notification messages.
 * 
 * Supports multiple types (success, error, warning, info) with appropriate
 * icons and ARIA live regions for accessibility. Includes optional dismiss button.
 * 
 * @module Toast
 */

import PropTypes from 'prop-types'
import './Toast.css'

const TOAST_ICONS = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ'
}

export function Toast({ message, type = 'info', onClose }) {
  const safeType = TOAST_ICONS[type] ? type : 'info'
  const icon = TOAST_ICONS[safeType]

  return (
    <div
      className={`toast toast--${safeType}`}
      role={safeType === 'error' ? 'alert' : 'status'}
      aria-live={safeType === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
    >
      <span className="toast__icon" aria-hidden="true">{icon}</span>
      <span className="toast__message">{message}</span>
      {onClose && (
        <button type="button" className="toast__close" onClick={onClose} aria-label={`Dismiss ${safeType} notification`}>
          ×
        </button>
      )}
    </div>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  onClose: PropTypes.func
}

/**
 * Default export for Toast component.
 * @type {React.FC<ToastProps>}
 */
export default Toast
