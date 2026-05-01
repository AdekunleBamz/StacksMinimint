import { describe, expect, it } from 'vitest'
import { formatAddressShort } from './format'

describe('formatAddressShort', () => {
  it('keeps values unchanged at the truncation threshold', () => {
    expect(formatAddressShort('ABCDEFGHIJ')).toBe('ABCDEFGHIJ')
  })
})
