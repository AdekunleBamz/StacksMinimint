import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

// Regression note: preserve capitalize tab prefix behavior coverage.
// Scope note: validates capitalize tab prefix behavior for regressions.
describe('capitalize', () => {
  it('ignores tab prefixes before capitalization', () => {
    expect(capitalize('\tstacks')).toBe('Stacks')
  })
})
