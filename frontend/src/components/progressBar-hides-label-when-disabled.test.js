import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('omits percentage label text when showLabel is false', () => {
    const markup = renderToStaticMarkup(
      React.createElement(ProgressBar, { value: 25, max: 100, showLabel: false })
    )

    expect(markup).not.toContain('progress__label')
    expect(markup).toContain('aria-valuenow="25"')
  })
})
