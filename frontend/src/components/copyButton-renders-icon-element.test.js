import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CopyButton } from './CopyButton'

// Regression note: keep this UI behavior expectation explicit.
describe('CopyButton', () => {
  it('renders an icon container inside the button', () => {
    const markup = renderToStaticMarkup(React.createElement(CopyButton, { text: 'SP123' }))
    expect(markup).toContain('copy-btn__icon')
  })
})
