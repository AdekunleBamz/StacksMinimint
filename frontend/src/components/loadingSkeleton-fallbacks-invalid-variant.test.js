import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { LoadingSkeleton } from './LoadingSkeleton'

describe('LoadingSkeleton', () => {
  it('falls back to text variant for unsupported variant values', () => {
    const markup = renderToStaticMarkup(
      React.createElement(LoadingSkeleton, { variant: 'chip' })
    )

    expect(markup).toContain('skeleton--text')
    expect(markup).not.toContain('skeleton--chip')
  })
})
