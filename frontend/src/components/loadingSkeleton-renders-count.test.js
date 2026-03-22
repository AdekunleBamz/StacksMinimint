import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { LoadingSkeleton } from './LoadingSkeleton'

describe('LoadingSkeleton', () => {
  it('renders as many skeleton blocks as requested', () => {
    const markup = renderToStaticMarkup(
      React.createElement(LoadingSkeleton, { count: 3 })
    )

    expect(markup.match(/class="skeleton skeleton--text/g)?.length).toBe(3)
  })
})
