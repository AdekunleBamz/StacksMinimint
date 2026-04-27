import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

// Regression note: preserve toast renders close button behavior coverage.
// Scope note: validates toast renders close button behavior for regressions.
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
    expect(markup).toContain('title="Dismiss success notification"')
    expect(markup).toContain('data-dismissible="true"')
    expect(markup).toContain('aria-keyshortcuts="Escape"')
  })
})
