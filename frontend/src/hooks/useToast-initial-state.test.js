import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useToast } from './useToast'

function ToastStateProbe() {
  const state = useToast()
  return React.createElement('div', {
    'data-count': String(state.count),
    'data-has-toasts': String(state.hasToasts),
    'data-latest-toast': String(state.latestToast),
    'data-toasts-length': String(state.toasts.length)
  })
}

describe('useToast', () => {
  it('starts with an empty queue and no latest toast', () => {
    const markup = renderToStaticMarkup(React.createElement(ToastStateProbe))
    expect(markup).toContain('data-count="0"')
    expect(markup).toContain('data-has-toasts="false"')
    expect(markup).toContain('data-latest-toast="null"')
    expect(markup).toContain('data-toasts-length="0"')
  })
})
