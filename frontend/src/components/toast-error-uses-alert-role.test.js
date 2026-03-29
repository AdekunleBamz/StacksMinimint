import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

// Regression note: preserve toast error uses alert role behavior coverage.
// Scope note: validates toast error uses alert role behavior for regressions.
describe('Toast', () => {
  it('uses alert semantics for error notifications', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Toast, { type: 'error', message: 'Mint failed' })
    )

    expect(markup).toContain('role="alert"')
    expect(markup).toContain('aria-live="assertive"')
  })
})
