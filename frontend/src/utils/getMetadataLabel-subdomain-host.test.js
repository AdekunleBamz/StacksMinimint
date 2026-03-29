import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

// Regression note: preserve getMetadataLabel subdomain host behavior coverage.
describe('getMetadataLabel', () => {
  it('preserves meaningful subdomains while removing www prefix', () => {
    expect(getMetadataLabel('https://www.meta.example.org/data.json')).toBe('meta.example.org')
  })
})
