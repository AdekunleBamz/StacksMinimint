import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

// Regression note: keep this UI behavior expectation explicit.
describe('Card', () => {
  it('adds clickable class when click handlers are supplied', () => {
    const markup = renderToStaticMarkup(React.createElement(Card, { onClick: vi.fn() }, 'Body'))
    expect(markup).toContain('card--clickable')
  })
})
