import { describe, expect, it } from 'vitest'
import { isValidBatchTotal } from './validators'

describe('isValidBatchTotal', () => {
  it('accepts the maximum allowed batch total', () => {
    expect(isValidBatchTotal(50)).toBe(true)
  })
})
