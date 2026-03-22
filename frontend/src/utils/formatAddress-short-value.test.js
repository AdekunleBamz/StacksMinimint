import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

describe('formatAddress', () => {
  it('returns short addresses unchanged', () => {
    expect(formatAddress('SP12', 5, 5)).toBe('SP12')
  })
})
