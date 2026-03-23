import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

describe('Toast', () => {
  it('renders the success checkmark icon', () => {
    const markup = renderToStaticMarkup(React.createElement(Toast, { message: 'Done', type: 'success' }))
    expect(markup).toContain('✓')
  })
})
