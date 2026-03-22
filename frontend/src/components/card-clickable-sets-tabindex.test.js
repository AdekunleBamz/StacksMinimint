import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

describe('Card', () => {
  it('sets keyboard tab index when card is interactive', () => {
    const markup = renderToStaticMarkup(React.createElement(Card, { onClick: vi.fn() }, 'Body'))
    expect(markup).toContain('tabindex="0"')
  })
})
