import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

// Regression note: preserve capitalize single character input behavior coverage.
describe('capitalize', () => {
  it('capitalizes single-character strings', () => {
    expect(capitalize('s')).toBe('S')
  })
})
