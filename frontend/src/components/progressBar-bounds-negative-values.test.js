import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('floors progress values at zero for negative inputs', () => {
    const markup = renderToStaticMarkup(
      React.createElement(ProgressBar, { value: -12, max: 100 })
    )

    expect(markup).toContain('width:0%')
    expect(markup).toContain('aria-valuenow="0"')
  })
})
