import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

describe('formatAddress', () => {
  it('returns an empty string for non-string input', () => {
    expect(formatAddress(12345)).toBe('')
  })
})
