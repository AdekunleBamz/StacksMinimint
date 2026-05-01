import { describe, expect, it } from 'vitest'
import { isValidBatchTotal } from './validators'

describe('isValidBatchTotal', () => {
  it('rejects batch totals above the maximum', () => {
    expect(isValidBatchTotal(51)).toBe(false)
  })
})
