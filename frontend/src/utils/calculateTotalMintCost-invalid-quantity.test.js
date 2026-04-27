import { describe, expect, it } from 'vitest'
import { calculateTotalMintCost } from './format'

describe('calculateTotalMintCost', () => {
  it('returns zero cost when quantity is not a positive integer', () => {
    expect(calculateTotalMintCost('0', 3)).toBe('0 STX')
  })
})
