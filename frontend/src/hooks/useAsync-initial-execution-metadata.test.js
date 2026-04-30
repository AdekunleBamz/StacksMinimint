import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useAsync } from './useAsync'

function AsyncMetadataProbe() {
  const state = useAsync(async () => 'ok')
  return React.createElement('div', {
    'data-execution-count': String(state.executionCount),
    'data-last-executed-at': String(state.lastExecutedAt)
  })
}

describe('useAsync', () => {
  it('starts with zero execution metadata', () => {
    const markup = renderToStaticMarkup(React.createElement(AsyncMetadataProbe))
    expect(markup).toContain('data-execution-count="0"')
    expect(markup).toContain('data-last-executed-at="null"')
  })
})
