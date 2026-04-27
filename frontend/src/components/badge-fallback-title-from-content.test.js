import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Badge } from './Badge'

describe('Badge', () => {
  it('uses text content as fallback title metadata when title prop is omitted', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Badge, null, 'Pending approval')
    )

    expect(markup).toContain('title="Pending approval"')
    expect(markup).toContain('aria-label="Pending approval"')
    expect(markup).toContain('data-has-title="true"')
    expect(markup).toContain('data-label-length="16"')
  })
})
