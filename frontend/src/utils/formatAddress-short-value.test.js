import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

// Regression note: preserve formatAddress short value behavior coverage.
describe('formatAddress', () => {
  it('returns short addresses unchanged', () => {
    expect(formatAddress('SP12', 5, 5)).toBe('SP12')
  })
})
