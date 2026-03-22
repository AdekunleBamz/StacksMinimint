import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

describe('truncateAddress', () => {
  it('returns an empty string for whitespace-only addresses', () => {
    expect(truncateAddress('   ')).toBe('')
  })
})
