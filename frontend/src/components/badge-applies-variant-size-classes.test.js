import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

describe('Badge', () => {
  it('applies variant and size classes to badge output', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Badge, { variant: 'success', size: 'large', className: 'u-pill' }, 'Ready')
    )

    expect(markup).toContain('badge--success')
    expect(markup).toContain('badge--large')
    expect(markup).toContain('u-pill')
  })
})
