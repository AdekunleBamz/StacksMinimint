import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary', () => {
  it('renders child content when no error has been captured', () => {
    const markup = renderToStaticMarkup(
      React.createElement(ErrorBoundary, null, React.createElement('p', null, 'Healthy UI'))
    )

    expect(markup).toContain('Healthy UI')
  })
})
