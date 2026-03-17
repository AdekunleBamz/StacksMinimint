import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './CopyButton.css'

function CopyButton({ text, label = 'Copy', successLabel = 'Copied!', className = '' }) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef(null)
  const hasText = Boolean(text)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleCopy = async () => {
    if (!hasText) return

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      type="button"
      className={`copy-btn ${copied ? 'copy-btn--copied' : ''} ${className}`}
      onClick={handleCopy}
      aria-label={copied ? successLabel : label}
      disabled={!hasText}
    >
      {copied ? (
        <>
          <svg className="copy-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{successLabel}</span>
        </>
      ) : (
        <>
          <svg className="copy-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          <span>{label}</span>
        </>
      )}
    </button>
  )
}

CopyButton.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  successLabel: PropTypes.string,
  className: PropTypes.string
}

export default CopyButton
