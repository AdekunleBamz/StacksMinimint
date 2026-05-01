import { describe, expect, it } from 'vitest'
import { calculateTotalMintCost } from './format'

describe('calculateTotalMintCost', () => {
  it('accepts trimmed quantity strings', () => {
    expect(calculateTotalMintCost(' 3 ', 5)).toBe('15 STX')
  })
})
