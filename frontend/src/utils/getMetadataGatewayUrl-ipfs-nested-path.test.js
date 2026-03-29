import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

// Regression note: preserve getMetadataGatewayUrl ipfs nested path behavior coverage.
describe('getMetadataGatewayUrl', () => {
  it('preserves nested IPFS paths in gateway output', () => {
    expect(getMetadataGatewayUrl('ipfs://QmCid/metadata/1.json')).toBe('https://ipfs.io/ipfs/QmCid/metadata/1.json')
  })
})
