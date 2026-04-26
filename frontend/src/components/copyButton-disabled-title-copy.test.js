import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CopyButton } from './CopyButton'

describe('CopyButton', () => {
  it('uses a descriptive disabled title when there is nothing to copy', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CopyButton, {
        text: '   '
      })
    )

    expect(markup).toContain('title="Nothing to copy yet"')
  })
})
