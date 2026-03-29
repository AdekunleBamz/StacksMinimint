import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

// Regression note: preserve getMetadataKind http basic behavior coverage.
describe('getMetadataKind', () => {
  it('detects plain HTTP metadata links', () => {
    expect(getMetadataKind('http://example.com/meta.json')).toBe('http')
  })
})
