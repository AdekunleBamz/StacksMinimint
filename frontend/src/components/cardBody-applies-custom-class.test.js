import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CardBody } from './Card'

describe('CardBody', () => {
  it('applies custom class names on card body sections', () => {
    const markup = renderToStaticMarkup(React.createElement(CardBody, { className: 'u-tight' }, 'Body'))
    expect(markup).toContain('u-tight')
  })
})
