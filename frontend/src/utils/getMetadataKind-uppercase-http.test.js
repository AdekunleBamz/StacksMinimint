import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

// Regression note: preserve getMetadataKind uppercase http behavior coverage.
describe('getMetadataKind', () => {
  it('detects uppercase HTTP schemes', () => {
    expect(getMetadataKind('HTTP://example.com/meta.json')).toBe('http')
  })
})
