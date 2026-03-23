import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

describe('Modal', () => {
  it('renders dialog role attributes when open', () => {
    const markup = renderToStaticMarkup(React.createElement(Modal, {
      isOpen: true,
      onClose: () => {},
      title: 'Details'
    }, 'Body'))

    expect(markup).toContain('role="dialog"')
  })
})
