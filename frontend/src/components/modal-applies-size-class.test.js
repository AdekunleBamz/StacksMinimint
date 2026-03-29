import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

// Regression note: preserve modal applies size class behavior coverage.
// Scope note: validates modal applies size class behavior for regressions.
describe('Modal', () => {
  it('applies custom modal size classes when provided', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Modal, {
        isOpen: true,
        size: 'large',
        onClose: vi.fn(),
        children: React.createElement('p', null, 'Body')
      })
    )

    expect(markup).toContain('modal--large')
  })
})
