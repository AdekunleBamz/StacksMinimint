import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

// Regression note: preserve isValidStacksAddress min length behavior coverage.
describe('isValidStacksAddress', () => {
  it('rejects addresses below the minimum supported length', () => {
    expect(isValidStacksAddress('SP123456789012345678901234567890123456')).toBe(false)
  })
})
