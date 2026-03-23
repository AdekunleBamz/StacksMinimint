import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

describe('Badge', () => {
  it('includes custom class names in markup', () => {
    const markup = renderToStaticMarkup(React.createElement(Badge, { className: 'is-custom' }, 'Ready'))
    expect(markup).toContain('is-custom')
  })
})
