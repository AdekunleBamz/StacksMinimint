import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useIsDesktop } from './useMediaQuery'

function DesktopProbe() {
  const isDesktop = useIsDesktop()
  return React.createElement('div', { 'data-desktop': String(isDesktop) })
}

describe('useIsDesktop', () => {
  it('defaults to false during server rendering', () => {
    const markup = renderToStaticMarkup(React.createElement(DesktopProbe))
    expect(markup).toContain('data-desktop="false"')
  })
})
