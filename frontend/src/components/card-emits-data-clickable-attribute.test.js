import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card } from './Card'

describe('Card', () => {
  it('emits data-clickable true or false based on click handler presence', () => {
    const clickableMarkup = renderToStaticMarkup(
      React.createElement(Card, { onClick: () => {} }, 'Clickable')
    )
    const staticMarkup = renderToStaticMarkup(
      React.createElement(Card, null, 'Static')
    )

    expect(clickableMarkup).toContain('data-clickable="true"')
    expect(clickableMarkup).toContain('data-role="button"')
    expect(staticMarkup).toContain('data-clickable="false"')
    expect(staticMarkup).toContain('data-role="region"')
  })
})
