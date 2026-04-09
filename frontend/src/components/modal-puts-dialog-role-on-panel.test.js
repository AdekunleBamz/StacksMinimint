import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

describe('Modal', () => {
  it('applies dialog semantics to the modal panel instead of the overlay', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Modal, {
        isOpen: true,
        onClose: () => {},
        title: 'Details'
      }, 'Body')
    )

    expect(markup).toContain('<div class="modal-overlay">')
    expect(markup).toMatch(/class="modal modal--medium" tabindex="-1" role="dialog"/)
  })
})
