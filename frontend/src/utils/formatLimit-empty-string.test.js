import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

// Regression note: preserve formatLimit empty string behavior coverage.
describe('formatLimit', () => {
  it('returns fallback text for blank string values', () => {
    expect(formatLimit('   ', 'Unset')).toBe('Unset')
  })
})
