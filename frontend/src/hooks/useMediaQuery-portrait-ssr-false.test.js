import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useIsPortrait } from './useMediaQuery'

function PortraitProbe() {
  const isPortrait = useIsPortrait()
  return React.createElement('div', { 'data-portrait': String(isPortrait) })
}

describe('useIsPortrait', () => {
  it('defaults to false during server rendering', () => {
    const markup = renderToStaticMarkup(React.createElement(PortraitProbe))
    expect(markup).toContain('data-portrait="false"')
  })
})
