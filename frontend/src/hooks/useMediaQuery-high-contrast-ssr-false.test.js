import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useHighContrast } from './useMediaQuery'

function HighContrastProbe() {
  const isHighContrast = useHighContrast()
  return React.createElement('div', { 'data-high-contrast': String(isHighContrast) })
}

describe('useHighContrast', () => {
  it('defaults to false during server rendering', () => {
    const markup = renderToStaticMarkup(React.createElement(HighContrastProbe))
    expect(markup).toContain('data-high-contrast="false"')
  })
})
