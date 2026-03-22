import { describe, expect, it } from 'vitest'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with a status role for assistive technologies', () => {
    const markup = renderToStaticMarkup(React.createElement(Spinner))
    expect(markup).toContain('role="status"')
    expect(markup).toContain('aria-label="Loading"')
  })
})
