import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

// Regression note: preserve getMetadataKind https basic behavior coverage.
describe('getMetadataKind', () => {
  it('detects plain HTTPS metadata links', () => {
    expect(getMetadataKind('https://example.com/meta.json')).toBe('https')
  })
})
