import { describe, expect, it } from 'vitest'
import { formatAddressShort } from './format'

describe('formatAddressShort', () => {
  it('trims surrounding whitespace before truncation logic', () => {
    expect(formatAddressShort('   SP1234567   ')).toBe('SP1234567')
  })
})
