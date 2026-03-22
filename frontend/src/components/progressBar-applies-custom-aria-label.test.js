import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('forwards custom aria labels to the progressbar element', () => {
    const markup = renderToStaticMarkup(React.createElement(ProgressBar, { value: 10, ariaLabel: 'Mint completion' }))
    expect(markup).toContain('aria-label="Mint completion"')
  })
})
