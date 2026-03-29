import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

// Regression note: preserve getMetadataGatewayUrl unsupported ftp behavior coverage.
describe('getMetadataGatewayUrl', () => {
  it('returns null for unsupported URI schemes', () => {
    expect(getMetadataGatewayUrl('ftp://example.com/meta.json')).toBeNull()
  })
})
