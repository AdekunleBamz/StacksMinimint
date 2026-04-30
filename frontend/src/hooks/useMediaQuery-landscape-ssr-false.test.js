import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useIsLandscape } from './useMediaQuery'

function LandscapeProbe() {
  const isLandscape = useIsLandscape()
  return React.createElement('div', { 'data-landscape': String(isLandscape) })
}

describe('useIsLandscape', () => {
  it('defaults to false during server rendering', () => {
    const markup = renderToStaticMarkup(React.createElement(LandscapeProbe))
    expect(markup).toContain('data-landscape="false"')
  })
})
