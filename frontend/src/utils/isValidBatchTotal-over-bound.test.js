import { describe, expect, it } from 'vitest'
import { isValidBatchTotal } from './validators'

describe('isValidBatchTotal', () => {
  it('rejects values above the allowed batch-total range', () => {
    expect(isValidBatchTotal(51)).toBe(false)
  })
})
