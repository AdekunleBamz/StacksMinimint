import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary', () => {
  it('renders fallback action titles and normalized technical summary copy', () => {
    const boundary = new ErrorBoundary({ children: null })
    boundary.state = { hasError: true, error: new Error('Wallet timeout') }

    const markup = renderToStaticMarkup(boundary.render())
    expect(markup).toContain('title="Try rendering this section again"')
    expect(markup).toContain('title="Reload the application in this browser tab"')
    expect(markup).toContain('data-has-raw-message="true"')
    expect(markup).toContain('Technical details (development only)')
  })
})
