import { describe, expect, it } from 'vitest'
import { isValidRoyaltyBps } from './validators'

describe('isValidRoyaltyBps', () => {
  it('accepts trimmed numeric strings within bounds', () => {
    expect(isValidRoyaltyBps(' 500 ')).toBe(true)
  })
})
