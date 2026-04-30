import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useMediaQuery } from './useMediaQuery'

function MediaQueryProbe() {
  const matches = useMediaQuery(1024)
  return React.createElement('div', { 'data-matches': String(matches) })
}

describe('useMediaQuery', () => {
  it('returns false when query is not a string', () => {
    const markup = renderToStaticMarkup(React.createElement(MediaQueryProbe))
    expect(markup).toContain('data-matches="false"')
  })
})
