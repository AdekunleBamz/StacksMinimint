import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

// Regression note: preserve toast omits close button without handler behavior coverage.
// Scope note: validates toast omits close button without handler behavior for regressions.
describe('Toast', () => {
  it('does not render a dismiss button without an onClose callback', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Toast, { type: 'info', message: 'Heads up' })
    )

    expect(markup).not.toContain('toast__close')
  })
})
