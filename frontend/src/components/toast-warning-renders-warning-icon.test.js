import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

describe('Toast', () => {
  it('renders warning glyph for warning toast type', () => {
    const markup = renderToStaticMarkup(React.createElement(Toast, { type: 'warning', message: 'Careful' }))
    expect(markup).toContain('⚠')
  })
})
