import { describe, expect, it } from 'vitest'
import useTransactionStatusDefault, { useTransactionStatus } from './useTransaction'

describe('useTransaction module exports', () => {
  it('keeps default export aligned with named hook export', () => {
    expect(useTransactionStatusDefault).toBe(useTransactionStatus)
  })
})
