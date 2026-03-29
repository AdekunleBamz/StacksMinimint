import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit zero output behavior coverage.
describe('formatLimit', () => {
  it('returns zero values as explicit strings', () => {
    expect(formatLimit(0)).toBe('0')
  })
})
