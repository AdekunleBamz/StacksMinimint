import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders child text content', () => {
    const markup = renderToStaticMarkup(React.createElement(Badge, null, 'Ready'))
    expect(markup).toContain('Ready')
  })
})
