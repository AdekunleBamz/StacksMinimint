import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useTransactionStatus } from './useTransaction'

function TransactionSsrProbe() {
  const { status, isLoading } = useTransactionStatus('0xserver')
  return React.createElement('div', {
    'data-status': String(status),
    'data-loading': String(isLoading)
  })
}

describe('useTransactionStatus', () => {
  it('keeps static initial state during server rendering even with tx id', () => {
    const markup = renderToStaticMarkup(React.createElement(TransactionSsrProbe))
    expect(markup).toContain('data-status="null"')
    expect(markup).toContain('data-loading="false"')
  })
})
