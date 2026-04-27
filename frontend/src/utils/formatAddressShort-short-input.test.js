import { describe, expect, it } from 'vitest'
import { formatAddressShort } from './format'

describe('formatAddressShort', () => {
  it('returns short addresses without truncation', () => {
    expect(formatAddressShort('SP123')).toBe('SP123')
  })
})
