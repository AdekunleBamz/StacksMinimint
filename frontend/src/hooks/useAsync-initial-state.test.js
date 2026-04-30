import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useAsync } from './useAsync'

function AsyncProbe() {
  const state = useAsync(async () => 'ok')
  return React.createElement('div', {
    'data-data': String(state.data),
    'data-error': String(state.error),
    'data-loading': String(state.isLoading),
    'data-success': String(state.isSuccess),
    'data-is-error': String(state.isError),
    'data-has-run': String(state.hasRun)
  })
}

describe('useAsync', () => {
  it('starts with idle state before execution', () => {
    const markup = renderToStaticMarkup(React.createElement(AsyncProbe))
    expect(markup).toContain('data-data="null"')
    expect(markup).toContain('data-error="null"')
    expect(markup).toContain('data-loading="false"')
    expect(markup).toContain('data-success="false"')
    expect(markup).toContain('data-is-error="false"')
    expect(markup).toContain('data-has-run="false"')
  })
})
