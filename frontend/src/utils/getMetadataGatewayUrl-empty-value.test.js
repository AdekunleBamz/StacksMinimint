import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

// Regression note: preserve getMetadataGatewayUrl empty value behavior coverage.
describe('getMetadataGatewayUrl', () => {
  it('returns null for empty values', () => {
    expect(getMetadataGatewayUrl('')).toBeNull()
  })
})
