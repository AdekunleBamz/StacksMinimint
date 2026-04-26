import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

describe('Modal', () => {
  it('wires dialog description to the modal body region', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Modal, {
        isOpen: true,
        onClose: () => {},
        title: 'Mint details',
        children: React.createElement('p', null, 'Body content')
      })
    )

    expect(markup).toContain('aria-describedby=')
  })
})
