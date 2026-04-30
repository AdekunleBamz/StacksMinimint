import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useIsTablet } from './useMediaQuery'

function TabletProbe() {
  const isTablet = useIsTablet()
  return React.createElement('div', { 'data-tablet': String(isTablet) })
}

describe('useIsTablet', () => {
  it('defaults to false during server rendering', () => {
    const markup = renderToStaticMarkup(React.createElement(TabletProbe))
    expect(markup).toContain('data-tablet="false"')
  })
})
