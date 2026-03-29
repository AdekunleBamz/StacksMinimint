import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

// Regression note: preserve getMetadataGatewayUrl empty ipfs path behavior coverage.
describe('getMetadataGatewayUrl', () => {
  it('returns null for ipfs URIs that do not include a CID path', () => {
    expect(getMetadataGatewayUrl('ipfs://')).toBeNull()
    expect(getMetadataGatewayUrl('ipfs://ipfs/')).toBeNull()
  })
})
