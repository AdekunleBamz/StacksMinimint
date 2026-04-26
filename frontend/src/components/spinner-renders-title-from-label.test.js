import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('mirrors the loading label to the title attribute', () => {
    const markup = renderToStaticMarkup(React.createElement(Spinner, { label: 'Processing mint request' }))

    expect(markup).toContain('title="Processing mint request"')
  })
})
