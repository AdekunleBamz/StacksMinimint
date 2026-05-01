import { describe, expect, it } from 'vitest'
import { calculateTotalMintCost } from './format'

describe('calculateTotalMintCost', () => {
  it('coerces numeric string prices when computing totals', () => {
    expect(calculateTotalMintCost(2, '3.5')).toBe('7 STX')
  })
})
