import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('emits loading grid metadata and list semantics for skeleton cards', () => {
    const markup = renderToStaticMarkup(React.createElement(Gallery))

    expect(markup).toContain('data-state="loading"')
    expect(markup).toContain('data-view-mode="grid"')
    expect(markup).toContain('data-count="4"')
    expect(markup).toContain('aria-label="Loading gallery items"')
    expect(markup).toContain('role="listitem"')
  })
})
