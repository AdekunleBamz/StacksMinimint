import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

// Regression note: preserve toast renders close button behavior coverage.
describe('Toast', () => {
  it('renders a dismiss button when onClose is provided', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Toast, {
        type: 'success',
        message: 'Done',
        onClose: vi.fn()
      })
    )

    expect(markup).toContain('toast__close')
    expect(markup).toContain('Dismiss success notification')
  })
})
