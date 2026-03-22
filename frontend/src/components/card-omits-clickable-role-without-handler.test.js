import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

describe('Card', () => {
  it('omits button semantics when no click handler is provided', () => {
    const markup = renderToStaticMarkup(React.createElement(Card, null, 'Body'))
    expect(markup).not.toContain('role="button"')
  })
})
