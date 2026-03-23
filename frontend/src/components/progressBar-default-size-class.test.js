import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('uses medium sizing class by default', () => {
    const markup = renderToStaticMarkup(React.createElement(ProgressBar, { value: 10 }))
    expect(markup).toContain('progress--medium')
  })
})
