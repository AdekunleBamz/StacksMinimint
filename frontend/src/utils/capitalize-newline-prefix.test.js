import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

// Regression note: preserve capitalize newline prefix behavior coverage.
// Scope note: validates capitalize newline prefix behavior for regressions.
describe('capitalize', () => {
  it('ignores leading newline characters before capitalizing', () => {
    expect(capitalize('\nstacks')).toBe('Stacks')
  })
})
