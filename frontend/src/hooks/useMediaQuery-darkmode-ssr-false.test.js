import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { usePrefersDarkMode } from './useMediaQuery'

function DarkModeProbe() {
  const prefersDarkMode = usePrefersDarkMode()
  return React.createElement('div', { 'data-prefers-dark': String(prefersDarkMode) })
}

describe('usePrefersDarkMode', () => {
  it('defaults to false during server rendering', () => {
    const markup = renderToStaticMarkup(React.createElement(DarkModeProbe))
    expect(markup).toContain('data-prefers-dark="false"')
  })
})
