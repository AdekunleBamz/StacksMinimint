import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { LoadingSkeleton } from './LoadingSkeleton'

describe('LoadingSkeleton', () => {
  it('applies the requested variant class to skeleton blocks', () => {
    const markup = renderToStaticMarkup(React.createElement(LoadingSkeleton, { variant: 'avatar' }))
    expect(markup).toContain('skeleton--avatar')
  })
})
