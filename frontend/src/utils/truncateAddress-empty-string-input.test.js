import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

describe('truncateAddress', () => {
  it('returns empty output for empty string input', () => {
    expect(truncateAddress('')).toBe('')
  })
})
