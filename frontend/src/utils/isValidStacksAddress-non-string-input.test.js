import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

describe('isValidStacksAddress', () => {
  it('returns false for non-string values', () => {
    expect(isValidStacksAddress(12345)).toBe(false)
    expect(isValidStacksAddress({})).toBe(false)
  })
})
