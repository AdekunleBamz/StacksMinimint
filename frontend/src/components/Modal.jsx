import { useEffect, useRef } from 'react'
import './Modal.css'

function Modal({ isOpen, onClose, title, children, size = 'medium' }) {
  const modalRef = useRef(null)

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
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
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="modal-overlay" 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-label={title ? undefined : 'Dialog'}
    >
      <div ref={modalRef} className={`modal modal--${size}`} tabIndex={-1}>
        <div className="modal__header">
          {title && <h2 id="modal-title" className="modal__title">{title}</h2>}
          <button 
            type="button"
            className="modal__close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="modal__body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
