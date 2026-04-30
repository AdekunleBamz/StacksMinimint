import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('uses zero progress when value is not a finite number', () => {
    const markup = renderToStaticMarkup(
      React.createElement(ProgressBar, { value: Number.NaN, max: 100 })
    )

    expect(markup).toContain('aria-valuenow="0"')
    expect(markup).toContain('width:0%')
  })
})
