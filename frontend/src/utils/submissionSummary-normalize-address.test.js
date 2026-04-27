import { describe, expect, it } from 'vitest'
import { normalizeSubmissionAddress } from './collection'

describe('normalizeSubmissionAddress', () => {
  it('trims address strings for consistent display', () => {
    expect(normalizeSubmissionAddress('  SP123  ')).toBe('SP123')
  })
})
