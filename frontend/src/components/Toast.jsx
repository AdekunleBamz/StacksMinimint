import PropTypes from 'prop-types'
import './Toast.css'

function Toast({ message, type = 'info', onClose }) {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }

  return (
    <div
      className={`toast toast--${type}`}
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
    >
      <span className="toast__icon" aria-hidden="true">{icons[type]}</span>
      <span className="toast__message">{message}</span>
      {onClose && (
        <button type="button" className="toast__close" onClick={onClose} aria-label="Close">
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

export default Toast
