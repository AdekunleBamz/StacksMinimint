import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

// Regression note: preserve getMetadataKind non string behavior coverage.
describe('getMetadataKind', () => {
  it('treats non-string values as unknown', () => {
    expect(getMetadataKind(12345)).toBe('unknown')
  })
})
