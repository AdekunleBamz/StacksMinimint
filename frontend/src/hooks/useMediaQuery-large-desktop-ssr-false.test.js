import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useIsLargeDesktop } from './useMediaQuery'

function LargeDesktopProbe() {
  const isLargeDesktop = useIsLargeDesktop()
  return React.createElement('div', { 'data-large-desktop': String(isLargeDesktop) })
}

describe('useIsLargeDesktop', () => {
  it('defaults to false during server rendering', () => {
    const markup = renderToStaticMarkup(React.createElement(LargeDesktopProbe))
    expect(markup).toContain('data-large-desktop="false"')
  })
})
