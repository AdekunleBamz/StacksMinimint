import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Modal } from './Modal'

describe('Modal', () => {
  it('adds aria-keyshortcuts metadata on the close control', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Modal, {
        isOpen: true,
        onClose: () => {},
        title: 'Settings',
        children: React.createElement('p', null, 'Body content')
      })
    )

    expect(markup).toContain('aria-keyshortcuts="Escape"')
  })
})
