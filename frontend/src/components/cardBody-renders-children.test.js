import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { CardBody } from './Card'

describe('CardBody', () => {
  it('renders children inside the card body container', () => {
    const markup = renderToStaticMarkup(
      React.createElement(CardBody, null, React.createElement('p', null, 'Body content'))
    )

    expect(markup).toContain('card__body')
    expect(markup).toContain('Body content')
  })
})
