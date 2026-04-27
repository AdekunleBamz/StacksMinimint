import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { LoadingSkeleton } from './LoadingSkeleton'

describe('LoadingSkeleton', () => {
  it('marks width and height metadata as false when dimensions are omitted', () => {
    const markup = renderToStaticMarkup(React.createElement(LoadingSkeleton))

    expect(markup).toContain('data-width-set="false"')
    expect(markup).toContain('data-height-set="false"')
  })
})
