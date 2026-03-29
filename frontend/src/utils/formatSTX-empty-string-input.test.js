import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

// Regression note: preserve formatSTX empty string input behavior coverage.
describe('formatSTX', () => {
  it('treats empty strings as zero microstx', () => {
    expect(formatSTX('')).toBe('0')
  })
})
