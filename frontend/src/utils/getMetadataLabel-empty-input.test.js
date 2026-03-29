import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

// Regression note: preserve getMetadataLabel empty input behavior coverage.
describe('getMetadataLabel', () => {
  it('returns a generic label for empty values', () => {
    expect(getMetadataLabel('')).toBe('Metadata URI')
  })
})
