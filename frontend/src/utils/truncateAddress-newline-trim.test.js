import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

describe('truncateAddress', () => {
  it('trims newline-wrapped addresses before formatting', () => {
    expect(truncateAddress('\nSP1234567890\n', 3, 2)).toBe('SP1...90')
  })
})
