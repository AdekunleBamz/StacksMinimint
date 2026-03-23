import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

describe('formatAddress', () => {
  it('keeps addresses unchanged at the truncation threshold', () => {
    expect(formatAddress('SP1234567890')).toBe('SP1234567890')
  })
})
