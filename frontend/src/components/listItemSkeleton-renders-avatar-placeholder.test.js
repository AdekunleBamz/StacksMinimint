import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ListItemSkeleton } from './LoadingSkeleton'

describe('ListItemSkeleton', () => {
  it('renders an avatar placeholder in list item skeletons', () => {
    const markup = renderToStaticMarkup(React.createElement(ListItemSkeleton))
    expect(markup).toContain('skeleton--avatar')
    expect(markup).toContain('skeleton-list-item__content')
  })
})
