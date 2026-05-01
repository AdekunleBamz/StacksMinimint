import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

describe('truncateAddress', () => {
  it('returns empty string for non-string inputs', () => {
    expect(truncateAddress(12345)).toBe('')
  })
})
