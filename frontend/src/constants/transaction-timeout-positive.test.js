import { describe, expect, it } from 'vitest'
import { TRANSACTION_TIMEOUT_MS } from './index.js'

describe('constants transaction timeout', () => {
  it('keeps TRANSACTION_TIMEOUT_MS as a positive integer', () => {
    expect(Number.isInteger(TRANSACTION_TIMEOUT_MS)).toBe(true)
    expect(TRANSACTION_TIMEOUT_MS).toBeGreaterThan(0)
  })
})
