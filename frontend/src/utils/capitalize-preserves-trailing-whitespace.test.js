import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

// Regression note: preserve capitalize preserves trailing whitespace behavior coverage.
describe('capitalize', () => {
  it('preserves trailing whitespace while trimming only the start', () => {
    expect(capitalize('  stacks  ')).toBe('Stacks  ')
  })
})
