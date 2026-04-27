import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

// Regression note: preserve progressBar rounds label to one decimal behavior coverage.
// Scope note: validates progressBar rounds label to one decimal behavior for regressions.
describe('ProgressBar', () => {
  it('renders percentage labels rounded to one decimal place', () => {
    const markup = renderToStaticMarkup(React.createElement(ProgressBar, { value: 1, max: 3 }))
    expect(markup).toContain('33.3%')
    expect(markup).toContain('data-percentage="33.3"')
  })
})
