import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

// Regression note: preserve getMetadataLabel http host behavior coverage.
describe('getMetadataLabel', () => {
  it('derives labels from standard HTTP hosts', () => {
    expect(getMetadataLabel('http://www.example.org/meta.json')).toBe('example.org')
  })
})
