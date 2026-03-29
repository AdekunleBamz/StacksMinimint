import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

// Regression note: preserve getMetadataKind empty string value behavior coverage.
describe('getMetadataKind', () => {
  it('returns empty for blank string values', () => {
    expect(getMetadataKind('')).toBe('empty')
  })
})
