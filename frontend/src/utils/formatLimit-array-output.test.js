import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit array output behavior coverage.
// Scope note: validates formatLimit array output behavior for regressions.
describe('formatLimit', () => {
  it('stringifies arrays into comma-separated output', () => {
    expect(formatLimit([1, 2, 3])).toBe('1,2,3')
  })
})
