import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

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
