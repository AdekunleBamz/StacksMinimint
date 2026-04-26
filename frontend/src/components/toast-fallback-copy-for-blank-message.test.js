import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Toast } from './Toast'

describe('Toast', () => {
  it('uses default notification copy when message is blank', () => {
    const markup = renderToStaticMarkup(React.createElement(Toast, { type: 'info', message: '   ' }))

    expect(markup).toContain('Notification received.')
  })
})
