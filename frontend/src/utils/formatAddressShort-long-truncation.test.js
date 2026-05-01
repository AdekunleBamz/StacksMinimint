import { describe, expect, it } from 'vitest'
import { formatAddressShort } from './format'

describe('formatAddressShort', () => {
  it('truncates long addresses to leading and trailing slices', () => {
    expect(formatAddressShort('SP1234567890ABCDEFG')).toBe('SP1234...DEFG')
  })
})
