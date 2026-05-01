import { describe, expect, it } from 'vitest'
import { isValidRoyaltyBps } from './validators'

describe('isValidRoyaltyBps', () => {
  it('rejects royalty values below zero', () => {
    expect(isValidRoyaltyBps(-1)).toBe(false)
  })
})
