import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('emits selected size and color as data attributes', () => {
    const markup = renderToStaticMarkup(
      React.createElement(ProgressBar, { value: 10, size: 'large', color: 'danger' })
    )

    expect(markup).toContain('data-size="large"')
    expect(markup).toContain('data-color="danger"')
    expect(markup).toContain('data-show-label="true"')
    expect(markup).toContain('data-max="100"')
  })
})
