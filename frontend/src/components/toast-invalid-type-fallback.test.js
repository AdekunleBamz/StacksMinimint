import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

describe('Toast', () => {
  it('falls back to info semantics for unknown toast types', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Toast, { message: 'Heads up', type: 'custom' })
    )

    expect(markup).toContain('toast--info')
    expect(markup).toContain('aria-label="info notification"')
  })
})
