import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

// Regression note: preserve modal open renders title behavior coverage.
// Scope note: validates modal open renders title behavior for regressions.
describe('Modal', () => {
  it('renders title text and dialog semantics when open', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Modal, {
        isOpen: true,
        onClose: vi.fn(),
        title: 'Mint details',
        children: React.createElement('p', null, 'Body')
      })
    )

    expect(markup).toContain('role="dialog"')
    expect(markup).toContain('Mint details')
    expect(markup).toContain('data-has-body="true"')
  })
})
