import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import ErrorBoundary from './ErrorBoundary'

// Regression note: keep this UI behavior expectation explicit.
// Scope note: validates errorBoundary renders fallback view behavior for regressions.
describe('ErrorBoundary', () => {
  it('renders fallback UI when component state marks an error', () => {
    const boundary = new ErrorBoundary({ children: null })
    boundary.state = { hasError: true, error: new Error('Render failure') }

    const markup = renderToStaticMarkup(boundary.render())
    expect(markup).toContain('Something went wrong.')
    expect(markup).toContain('Refresh Page')
    expect(markup).toContain('Render failure')
    expect(markup).toContain('aria-label="Application error boundary"')
    expect(markup).toContain('aria-atomic="true"')
    expect(markup).toContain('data-state="error"')
    expect(markup).toContain('data-actions-count="2"')
  })
})
