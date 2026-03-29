import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

// Regression note: preserve getMetadataKind uppercase https behavior coverage.
describe('getMetadataKind', () => {
  it('normalizes uppercase HTTPS schemes', () => {
    expect(getMetadataKind('HTTPS://example.com')).toBe('https')
  })
})
