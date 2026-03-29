import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

// Regression note: preserve getMetadataKind whitespace newline behavior coverage.
describe('getMetadataKind', () => {
  it('treats newline-only values as empty metadata', () => {
    expect(getMetadataKind('\n\n')).toBe('empty')
  })
})
