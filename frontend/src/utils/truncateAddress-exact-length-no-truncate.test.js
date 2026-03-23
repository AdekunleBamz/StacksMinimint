import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

describe('truncateAddress', () => {
  it('keeps addresses when length equals start and end segments', () => {
    expect(truncateAddress('SP123456', 4, 4)).toBe('SP123456')
  })
})
