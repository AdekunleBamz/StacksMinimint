import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CopyButton } from './CopyButton'

describe('CopyButton', () => {
  it('marks label updates as polite announcements for assistive tech', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CopyButton, {
        text: 'SP123',
        label: 'Copy address'
      })
    )

    expect(markup).toContain('aria-live="polite"')
    expect(markup).toContain('aria-atomic="true"')
  })
})
