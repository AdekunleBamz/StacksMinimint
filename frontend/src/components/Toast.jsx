// Note: Toast module
// Scope: keep Toast concerns isolated.

import PropTypes from 'prop-types'
import './Toast.css'

export function Toast({ message, type = 'info', onClose }) {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }
  const icon = icons[type] || icons.info

  return (
    <div
      className={`toast toast--${type}`}
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
    >
      <span className="toast__icon" aria-hidden="true">{icon}</span>
      <span className="toast__message">{message}</span>
      {onClose && (
        <button type="button" className="toast__close" onClick={onClose} aria-label={`Dismiss ${type} notification`}>
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
