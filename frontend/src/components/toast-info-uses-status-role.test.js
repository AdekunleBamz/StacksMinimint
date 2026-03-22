import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

describe('Toast', () => {
  it('uses polite status semantics for informational toasts', () => {
    const markup = renderToStaticMarkup(React.createElement(Toast, { type: 'info', message: 'FYI' }))
    expect(markup).toContain('role="status"')
    expect(markup).toContain('aria-live="polite"')
  })
})
