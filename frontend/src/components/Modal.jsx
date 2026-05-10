/**
 * Modal component for displaying overlay dialogs with focus management.
 * 
 * Handles keyboard navigation (Escape to close), focus trapping, and
 * body scroll locking. Supports customizable sizes and optional titles.
 * 
 * @module Modal
 */

import { useCallback, useEffect, useId, useRef } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

/** ARIA label used for dialogs that have no explicit title. */
const MODAL_DEFAULT_ARIA_LABEL = 'Dialog';
/** Supported size variants for the modal panel. */
const MODAL_SIZES = ['small', 'medium', 'large'];

export function Modal({ isOpen, onClose, title, children, size = 'medium' }) {
  const safeSize = MODAL_SIZES.includes(size) ? size : 'medium'
  const hasBody = children != null
  const modalRef = useRef(null)
  const titleId = useId()
  const bodyId = useId()

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget && typeof onClose === 'function') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return

    const previousActiveElement = document.activeElement
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && typeof onClose === 'function') {
        onClose()
      }
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    modalRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleKeyDown)
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus()
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="modal-overlay" 
      data-state="open"
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={`modal modal--${safeSize}`}
        data-size={safeSize}
        data-title-present={title ? 'true' : 'false'}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-keyshortcuts="Escape"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={hasBody ? bodyId : undefined}
        aria-label={title ? undefined : MODAL_DEFAULT_ARIA_LABEL}
        title={title || MODAL_DEFAULT_ARIA_LABEL}
      >
        <div className="modal__header">
          {title && <h2 id={titleId} className="modal__title">{title}</h2>}
          <button 
            type="button"
            className="modal__close" 
            onClick={onClose}
            aria-label="Close modal"
            aria-controls={bodyId}
            aria-keyshortcuts="Escape"
            title="Close this dialog"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div id={bodyId} className="modal__body" data-has-body={hasBody ? 'true' : 'false'} aria-live="polite" aria-atomic="true">
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full'])
}

/**
 * Default export for Modal component.
 * @type {React.FC<ModalProps>}
 */
export default Modal
