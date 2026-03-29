import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

// Regression note: preserve capitalize trimstart only behavior coverage.
// Scope note: validates capitalize trimstart only behavior for regressions.
describe('capitalize', () => {
  it('preserves trailing spaces while trimming leading whitespace', () => {
    expect(capitalize('  hello  ')).toBe('Hello  ')
  })
})
