import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('emits configured size and tone as data attributes', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Spinner, { size: 'large', tone: 'success', label: 'Loading mint' })
    )

    expect(markup).toContain('data-size="large"')
    expect(markup).toContain('data-tone="success"')
    expect(markup).toContain('data-label-length="12"')
  })
})
