import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

// Regression note: preserve truncateAddress exact length no truncate behavior coverage.
describe('truncateAddress', () => {
  it('keeps addresses when length equals start and end segments', () => {
    expect(truncateAddress('SP123456', 4, 4)).toBe('SP123456')
  })
})
