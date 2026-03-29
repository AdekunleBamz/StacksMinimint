import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

// Regression note: preserve getMetadataLabel http removes www prefix behavior coverage.
describe('getMetadataLabel', () => {
  it('removes www from HTTP host labels', () => {
    expect(getMetadataLabel('http://www.example.com/meta.json')).toBe('example.com')
  })
})
