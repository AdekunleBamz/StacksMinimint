import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('sets aria-valuetext to the formatted percentage', () => {
    const markup = renderToStaticMarkup(
      React.createElement(ProgressBar, { value: 25, max: 50, showLabel: false })
    )

    expect(markup).toContain('aria-valuetext="50.0%"')
  })
})
