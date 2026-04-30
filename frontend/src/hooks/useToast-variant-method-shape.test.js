import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useToast } from './useToast'

function ToastVariantMethodProbe() {
  const state = useToast()
  return React.createElement('div', {
    'data-success-type': typeof state.success,
    'data-error-type': typeof state.error,
    'data-warning-type': typeof state.warning,
    'data-info-type': typeof state.info,
    'data-persistent-type': typeof state.persistent
  })
}

describe('useToast', () => {
  it('exposes variant convenience methods as functions', () => {
    const markup = renderToStaticMarkup(React.createElement(ToastVariantMethodProbe))
    expect(markup).toContain('data-success-type="function"')
    expect(markup).toContain('data-error-type="function"')
    expect(markup).toContain('data-warning-type="function"')
    expect(markup).toContain('data-info-type="function"')
    expect(markup).toContain('data-persistent-type="function"')
  })
})
