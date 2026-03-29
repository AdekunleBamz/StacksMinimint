import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit false string output behavior coverage.
describe('formatLimit', () => {
  it('keeps explicit false-like strings', () => {
    expect(formatLimit('false')).toBe('false')
  })
})
