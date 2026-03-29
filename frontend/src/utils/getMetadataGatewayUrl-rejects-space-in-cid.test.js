import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

// Regression note: preserve getMetadataGatewayUrl rejects space in cid behavior coverage.
describe('getMetadataGatewayUrl', () => {
  it('returns null for IPFS paths with spaces', () => {
    expect(getMetadataGatewayUrl('ipfs://QmCid with-space')).toBeNull()
  })
})
