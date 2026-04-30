import React from 'react'
import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { useTransactionStatus } from './useTransaction'

function TransactionProbe() {
  const { status, error, isLoading, isConfirmed, isPending, isFailed } = useTransactionStatus('')
  return React.createElement('div', {
    'data-status': String(status),
    'data-error': String(error),
    'data-loading': String(isLoading),
    'data-confirmed': String(isConfirmed),
    'data-pending': String(isPending),
    'data-failed': String(isFailed)
  })
}

describe('useTransactionStatus', () => {
  it('starts idle when tx id is empty', () => {
    const markup = renderToStaticMarkup(React.createElement(TransactionProbe))
    expect(markup).toContain('data-status="null"')
    expect(markup).toContain('data-error="null"')
    expect(markup).toContain('data-loading="false"')
    expect(markup).toContain('data-confirmed="false"')
    expect(markup).toContain('data-pending="false"')
    expect(markup).toContain('data-failed="false"')
  })
})
