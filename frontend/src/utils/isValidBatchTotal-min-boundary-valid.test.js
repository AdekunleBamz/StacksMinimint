import { describe, expect, it } from 'vitest'
import { isValidBatchTotal } from './validators'

describe('isValidBatchTotal', () => {
  it('accepts the minimum allowed batch total', () => {
    expect(isValidBatchTotal(1)).toBe(true)
  })
})
