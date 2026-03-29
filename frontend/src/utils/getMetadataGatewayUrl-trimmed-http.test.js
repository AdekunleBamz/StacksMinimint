import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

// Regression note: preserve getMetadataGatewayUrl trimmed http behavior coverage.
describe('getMetadataGatewayUrl', () => {
  it('returns trimmed HTTPS URLs as-is', () => {
    expect(getMetadataGatewayUrl('  https://example.com/meta.json  ')).toBe('https://example.com/meta.json')
  })
})
