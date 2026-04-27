import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

// Regression note: preserve modal open renders dialog role behavior coverage.
// Scope note: validates modal open renders dialog role behavior for regressions.
describe('Modal', () => {
  it('renders dialog role attributes when open', () => {
    const markup = renderToStaticMarkup(React.createElement(Modal, {
      isOpen: true,
      onClose: () => {},
      title: 'Details'
    }, 'Body'))

    expect(markup).toContain('role="dialog"')
    expect(markup).toContain('data-size="medium"')
    expect(markup).toContain('data-state="open"')
  })
})
