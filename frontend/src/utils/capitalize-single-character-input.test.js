import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

// Regression note: preserve capitalize single character input behavior coverage.
// Scope note: validates capitalize single character input behavior for regressions.
describe('capitalize', () => {
  it('capitalizes single-character strings', () => {
    expect(capitalize('s')).toBe('S')
  })
})
