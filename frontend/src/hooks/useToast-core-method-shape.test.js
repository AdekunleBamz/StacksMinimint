import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useToast } from './useToast'

function ToastMethodProbe() {
  const state = useToast()
  return React.createElement('div', {
    'data-add-type': typeof state.addToast,
    'data-show-type': typeof state.showToast,
    'data-remove-type': typeof state.removeToast,
    'data-clear-type': typeof state.clearAll
  })
}

describe('useToast', () => {
  it('exposes core toast queue methods as functions', () => {
    const markup = renderToStaticMarkup(React.createElement(ToastMethodProbe))
    expect(markup).toContain('data-add-type="function"')
    expect(markup).toContain('data-show-type="function"')
    expect(markup).toContain('data-remove-type="function"')
    expect(markup).toContain('data-clear-type="function"')
  })
})
