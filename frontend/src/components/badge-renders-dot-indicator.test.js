import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders a dot marker when dot mode is enabled', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Badge, { dot: true }, 'Live')
    )

    expect(markup).toContain('badge__dot')
    expect(markup).toContain('Live')
  })
})
