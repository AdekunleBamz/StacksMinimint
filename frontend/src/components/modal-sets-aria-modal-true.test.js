import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

// Regression note: preserve modal sets aria modal true behavior coverage.
// Scope note: validates modal sets aria modal true behavior for regressions.
describe('Modal', () => {
  it('sets aria-modal to true when rendered open', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Modal, {
        isOpen: true,
        onClose: vi.fn(),
        children: React.createElement('p', null, 'Body')
      })
    )

    expect(markup).toContain('aria-modal="true"')
  })
})
