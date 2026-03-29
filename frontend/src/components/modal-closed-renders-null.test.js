import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

// Regression note: preserve modal closed renders null behavior coverage.
// Scope note: validates modal closed renders null behavior for regressions.
describe('Modal', () => {
  it('renders no markup when closed', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Modal, {
        isOpen: false,
        onClose: vi.fn(),
        title: 'Mint details',
        children: React.createElement('p', null, 'Body')
      })
    )

    expect(markup).toBe('')
  })
})
