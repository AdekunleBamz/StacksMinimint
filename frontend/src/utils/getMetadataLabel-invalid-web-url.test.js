import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

// Regression note: preserve getMetadataLabel invalid web url behavior coverage.
describe('getMetadataLabel', () => {
  it('falls back to web metadata label for malformed web URLs', () => {
    expect(getMetadataLabel('https://exa mple.com/meta.json')).toBe('Web metadata')
  })
})
