import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { LoadingSkeleton } from './LoadingSkeleton'

describe('LoadingSkeleton', () => {
  it('emits data metadata and presentational role for each placeholder block', () => {
    const markup = renderToStaticMarkup(
      React.createElement(LoadingSkeleton, { variant: 'title', count: 2 })
    )

    expect(markup).toContain('data-variant="title"')
    expect(markup).toContain('data-index="0"')
    expect(markup).toContain('data-index="1"')
    expect(markup).toContain('data-count="2"')
    expect(markup).toContain('data-animated="true"')
    expect(markup).toContain('role="presentation"')
  })
})
