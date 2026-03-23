import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('uses the default aria label when none is provided', () => {
    const markup = renderToStaticMarkup(React.createElement(ProgressBar, { value: 10 }))
    expect(markup).toContain('aria-label="Progress"')
  })
})
