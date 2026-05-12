/**
 * CopyButton component for copying text to clipboard with visual feedback.
 * 
 * Provides a user-friendly way to copy text values with automatic
 * success indication. Handles clipboard API interactions and error states.
 * 
 * @module CopyButton
 */

import { useCallback } from 'react'
import PropTypes from 'prop-types'
import './CopyButton.css'
import { useClipboard } from '../hooks'
import { CLIPBOARD_TIMEOUT_MS } from '../constants'

/**
 * Button that copies a normalized text value and announces copy state changes.
 */
export function CopyButton({ text, label = 'Copy', successLabel = 'Copied', className = '' }) {
  const { copied, copy } = useClipboard(CLIPBOARD_TIMEOUT_MS)
  const copyValue = typeof text === 'string' ? text : text == null ? '' : String(text)
  const hasText = copyValue.trim().length > 0
  const safeLabel = typeof label === 'string' && label.trim() ? label.trim() : 'Copy'
  const safeSuccessLabel = typeof successLabel === 'string' && successLabel.trim() ? successLabel.trim() : 'Copied'
  const isDisabled = !hasText
  const buttonTitle = !hasText
    ? 'Nothing to copy yet'
    : copied
      ? safeSuccessLabel
      : safeLabel

  const handleCopy = useCallback(async () => {
    if (!hasText) return

    try {
      await copy(copyValue)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [copyValue, hasText, copy])

  return (
    <button
      type="button"
      className={['copy-btn', copied ? 'copy-btn--copied' : '', className].filter(Boolean).join(' ')}
      data-state={copied ? 'copied' : 'idle'}
      data-disabled={isDisabled ? 'true' : 'false'}
      data-has-text={hasText ? 'true' : 'false'}
      data-label={copied ? safeSuccessLabel : safeLabel}
      aria-keyshortcuts="Enter Space"
      aria-live="polite"
      aria-atomic="true"
      onClick={handleCopy}
      aria-label={copied ? safeSuccessLabel : safeLabel}
      aria-disabled={isDisabled}
      title={buttonTitle}
      disabled={isDisabled}
    >
      {copied ? (
        <>
          <svg className="copy-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="copy-btn__text">{safeSuccessLabel}</span>
        </>
      ) : (
        <>
          <svg className="copy-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          <span className="copy-btn__text">{safeLabel}</span>
        </>
      )}
      <span className="copy-btn__sr-live" aria-live="polite" aria-atomic="true">
        {copied ? safeSuccessLabel : ''}
      </span>
    </button>
  )
}

CopyButton.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  successLabel: PropTypes.string,
  className: PropTypes.string
}

/**
 * Default export for CopyButton component.
 * @type {React.FC<CopyButtonProps>}
 */
export default CopyButton
