import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('renders percentage labels rounded to one decimal place', () => {
    const markup = renderToStaticMarkup(React.createElement(ProgressBar, { value: 1, max: 3 }))
    expect(markup).toContain('33.3%')
  })
})
