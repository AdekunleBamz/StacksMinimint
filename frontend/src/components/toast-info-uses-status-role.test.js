import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

// Regression note: preserve toast info uses status role behavior coverage.
// Scope note: validates toast info uses status role behavior for regressions.
describe('Toast', () => {
  it('uses polite status semantics for informational toasts', () => {
    const markup = renderToStaticMarkup(React.createElement(Toast, { type: 'info', message: 'FYI' }))
    expect(markup).toContain('role="status"')
    expect(markup).toContain('aria-live="polite"')
    expect(markup).toContain('data-type="info"')
    expect(markup).toContain('data-dismissible="false"')
  })
})
