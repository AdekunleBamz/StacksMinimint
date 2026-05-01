import { describe, expect, it } from 'vitest'
import { calculateTotalMintCost } from './format'

describe('calculateTotalMintCost', () => {
  it('falls back to default price when price input is invalid', () => {
    expect(calculateTotalMintCost(2, 'bad')).toBe('20 STX')
  })
})
