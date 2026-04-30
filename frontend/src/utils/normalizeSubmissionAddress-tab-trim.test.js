import { describe, expect, it } from 'vitest'
import { normalizeSubmissionAddress } from './collection'

describe('normalizeSubmissionAddress', () => {
  it('trims surrounding tab characters from addresses', () => {
    expect(normalizeSubmissionAddress('\tSP123\t')).toBe('SP123')
  })
})
