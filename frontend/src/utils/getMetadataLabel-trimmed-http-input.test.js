import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

// Regression note: preserve getMetadataLabel trimmed http input behavior coverage.
describe('getMetadataLabel', () => {
  it('extracts host names from trimmed HTTP input', () => {
    expect(getMetadataLabel('  http://example.com/meta.json  ')).toBe('example.com')
  })
})
