import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

describe('isValidStacksAddress', () => {
  it('rejects addresses below the minimum supported length', () => {
    expect(isValidStacksAddress('SP123456789012345678901234567890123456')).toBe(false)
  })
})
