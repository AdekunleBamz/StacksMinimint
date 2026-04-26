import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

describe('Card', () => {
  it('includes Enter and Space keyboard shortcut metadata when clickable', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Card, { onClick: () => {} }, 'Clickable')
    )

    expect(markup).toContain('aria-keyshortcuts="Enter Space"')
  })
})
