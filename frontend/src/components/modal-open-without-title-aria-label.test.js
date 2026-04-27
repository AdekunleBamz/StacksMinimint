import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

// Regression note: preserve modal open without title aria label behavior coverage.
// Scope note: validates modal open without title aria label behavior for regressions.
describe('Modal', () => {
  it('sets an accessible dialog label when title is not provided', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Modal, {
        isOpen: true,
        onClose: vi.fn(),
        children: React.createElement('p', null, 'Body')
      })
    )

    expect(markup).toContain('aria-label="Dialog"')
    expect(markup).toContain('data-title-present="false"')
  })
})
