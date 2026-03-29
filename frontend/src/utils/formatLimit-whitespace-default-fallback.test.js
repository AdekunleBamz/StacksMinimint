import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit whitespace default fallback behavior coverage.
describe('formatLimit', () => {
  it('uses the default fallback for whitespace-only values', () => {
    expect(formatLimit('  ')).toBe('Not set')
  })
})
