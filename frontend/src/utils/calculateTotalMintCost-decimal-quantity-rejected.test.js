import { describe, expect, it } from 'vitest'
import { calculateTotalMintCost } from './format'

describe('calculateTotalMintCost', () => {
  it('returns zero when quantity is decimal-like', () => {
    expect(calculateTotalMintCost('2.5', 10)).toBe('0 STX')
  })
})
