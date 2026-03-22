import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { RecentMints } from './RecentMints'

describe('RecentMints', () => {
  it('renders empty-state messaging when there are no receipts', () => {
    const markup = renderToStaticMarkup(React.createElement(RecentMints, { items: [] }))
    expect(markup).toContain('No local mint receipts yet.')
  })
})
