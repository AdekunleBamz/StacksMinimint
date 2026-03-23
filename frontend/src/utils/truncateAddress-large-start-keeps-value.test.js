import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

describe('truncateAddress', () => {
  it('returns the original address when start exceeds length', () => {
    expect(truncateAddress('SP1234', 20, 4)).toBe('SP1234')
  })
})
