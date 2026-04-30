import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useMediaQuery } from './useMediaQuery'

function MediaQueryProbe() {
  const matches = useMediaQuery('   ')
  return React.createElement('div', { 'data-matches': String(matches) })
}

describe('useMediaQuery', () => {
  it('returns false when query is blank after trimming', () => {
    const markup = renderToStaticMarkup(React.createElement(MediaQueryProbe))
    expect(markup).toContain('data-matches="false"')
  })
})
