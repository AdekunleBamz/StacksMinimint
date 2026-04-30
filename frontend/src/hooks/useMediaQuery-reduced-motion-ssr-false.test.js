import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { usePrefersReducedMotion } from './useMediaQuery'

function ReducedMotionProbe() {
  const prefersReducedMotion = usePrefersReducedMotion()
  return React.createElement('div', { 'data-prefers-reduced-motion': String(prefersReducedMotion) })
}

describe('usePrefersReducedMotion', () => {
  it('defaults to false during server rendering', () => {
    const markup = renderToStaticMarkup(React.createElement(ReducedMotionProbe))
    expect(markup).toContain('data-prefers-reduced-motion="false"')
  })
})
