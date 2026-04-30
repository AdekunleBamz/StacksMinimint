import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useAsync } from './useAsync'

function AsyncImmediateProbe() {
  const state = useAsync(async () => 'ok', { immediate: true })
  return React.createElement('div', {
    'data-loading': String(state.isLoading),
    'data-has-run': String(state.hasRun)
  })
}

describe('useAsync', () => {
  it('remains static during server rendering even with immediate option', () => {
    const markup = renderToStaticMarkup(React.createElement(AsyncImmediateProbe))
    expect(markup).toContain('data-loading="false"')
    expect(markup).toContain('data-has-run="false"')
  })
})
