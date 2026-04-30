import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('falls back to primary color metadata for unsupported tones', () => {
    const markup = renderToStaticMarkup(
      React.createElement(ProgressBar, { value: 10, color: 'neon' })
    )

    expect(markup).toContain('data-color="primary"')
    expect(markup).toContain('progress__fill--primary')
  })
})
