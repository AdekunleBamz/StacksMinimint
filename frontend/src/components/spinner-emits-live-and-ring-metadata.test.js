import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('emits live-region and ring metadata for UI targeting', () => {
    const markup = renderToStaticMarkup(React.createElement(Spinner))

    expect(markup).toContain('data-live="polite"')
    expect(markup).toContain('data-part="ring"')
  })
})
