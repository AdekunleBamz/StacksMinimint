import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CardSkeleton } from './LoadingSkeleton'

describe('CardSkeleton', () => {
  it('includes an image placeholder block in the card layout', () => {
    const markup = renderToStaticMarkup(React.createElement(CardSkeleton))
    expect(markup).toContain('skeleton--image')
    expect(markup).toContain('skeleton-card__body')
  })
})
