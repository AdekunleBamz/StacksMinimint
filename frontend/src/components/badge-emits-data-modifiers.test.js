import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

describe('Badge', () => {
  it('emits variant and size data attributes', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Badge, { variant: 'warning', size: 'small' }, 'Queued')
    )

    expect(markup).toContain('data-variant="warning"')
    expect(markup).toContain('data-size="small"')
  })
})
