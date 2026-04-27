import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('marks tooltip wrapper as hidden before interaction', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Tooltip, { content: 'Network details' }, React.createElement('button', null, 'Info'))
    )

    expect(markup).toContain('data-visible="false"')
  })
})
