import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useAsync } from './useAsync'

function AsyncMethodProbe() {
  const state = useAsync(async () => 'ok')
  return React.createElement('div', {
    'data-execute-type': typeof state.execute,
    'data-reset-type': typeof state.reset,
    'data-clear-error-type': typeof state.clearError,
    'data-retry-type': typeof state.retry,
    'data-set-data-type': typeof state.setData
  })
}

describe('useAsync', () => {
  it('exposes control methods as functions', () => {
    const markup = renderToStaticMarkup(React.createElement(AsyncMethodProbe))
    expect(markup).toContain('data-execute-type="function"')
    expect(markup).toContain('data-reset-type="function"')
    expect(markup).toContain('data-clear-error-type="function"')
    expect(markup).toContain('data-retry-type="function"')
    expect(markup).toContain('data-set-data-type="function"')
  })
})
