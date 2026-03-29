import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

// Regression note: preserve capitalize number input behavior coverage.
// Scope note: validates capitalize number input behavior for regressions.
describe('capitalize', () => {
  it('returns empty string for non-string numeric input', () => {
    expect(capitalize(123)).toBe('')
  })
})
