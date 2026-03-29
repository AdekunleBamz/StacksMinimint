import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

// Regression note: preserve capitalize preserves trailing whitespace behavior coverage.
// Scope note: validates capitalize preserves trailing whitespace behavior for regressions.
describe('capitalize', () => {
  it('preserves trailing whitespace while trimming only the start', () => {
    expect(capitalize('  stacks  ')).toBe('Stacks  ')
  })
})
