import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

describe('Toast', () => {
  it('marks toast as dismissible when close handler is provided', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Toast, { message: 'Done', type: 'success', onClose: vi.fn() })
    )

    expect(markup).toContain('data-dismissible="true"')
    expect(markup).toContain('Dismiss success notification')
  })
})
