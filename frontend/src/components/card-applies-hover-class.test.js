import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

describe('Card', () => {
  it('adds hover styling class when hover is enabled', () => {
    const markup = renderToStaticMarkup(React.createElement(Card, { hover: true }, 'Body'))
    expect(markup).toContain('card--hover')
  })
})
