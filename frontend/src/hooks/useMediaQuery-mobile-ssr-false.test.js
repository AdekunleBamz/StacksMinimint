import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useIsMobile } from './useMediaQuery'

function MobileProbe() {
  const isMobile = useIsMobile()
  return React.createElement('div', { 'data-mobile': String(isMobile) })
}

describe('useIsMobile', () => {
  it('defaults to false during server rendering', () => {
    const markup = renderToStaticMarkup(React.createElement(MobileProbe))
    expect(markup).toContain('data-mobile="false"')
  })
})
