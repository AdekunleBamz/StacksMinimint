import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

// Regression note: preserve isValidStacksAddress non string input behavior coverage.
describe('isValidStacksAddress', () => {
  it('returns false for non-string values', () => {
    expect(isValidStacksAddress(12345)).toBe(false)
    expect(isValidStacksAddress({})).toBe(false)
  })
})
