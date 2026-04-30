import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useToast } from './useToast'

function ToastAliasProbe() {
  const state = useToast()
  return React.createElement('div', {
    'data-show-is-add': String(state.showToast === state.addToast)
  })
}

describe('useToast', () => {
  it('keeps showToast aliased to addToast', () => {
    const markup = renderToStaticMarkup(React.createElement(ToastAliasProbe))
    expect(markup).toContain('data-show-is-add="true"')
  })
})
