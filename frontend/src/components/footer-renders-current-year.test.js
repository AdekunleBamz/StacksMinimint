import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the current year in copyright copy', () => {
    const year = new Date().getFullYear()
    const markup = renderToStaticMarkup(React.createElement(Footer))
    expect(markup).toContain(`© ${year}`)
  })
})
