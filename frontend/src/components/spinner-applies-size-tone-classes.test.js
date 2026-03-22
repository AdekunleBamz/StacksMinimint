import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('applies size, tone, and custom class names', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Spinner, { size: 'small', tone: 'success', className: 'u-test' })
    )

    expect(markup).toContain('spinner--small')
    expect(markup).toContain('spinner--success')
    expect(markup).toContain('u-test')
  })
})
