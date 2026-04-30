import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useTransactionStatus } from './useTransaction'

function TransactionRefetchProbe() {
  const { refetch } = useTransactionStatus('0xabc')
  return React.createElement('div', { 'data-refetch-type': typeof refetch })
}

describe('useTransactionStatus', () => {
  it('exposes refetch as a function', () => {
    const markup = renderToStaticMarkup(React.createElement(TransactionRefetchProbe))
    expect(markup).toContain('data-refetch-type="function"')
  })
})
