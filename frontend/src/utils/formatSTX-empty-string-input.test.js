import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX empty string input behavior coverage.
// Scope note: validates formatSTX empty string input behavior for regressions.
describe('formatSTX', () => {
  it('treats empty strings as zero microstx', () => {
    expect(formatSTX('')).toBe('0')
  })
})
