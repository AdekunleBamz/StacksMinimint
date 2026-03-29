import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

// Regression note: preserve getMetadataGatewayUrl uppercase ipfs behavior coverage.
describe('getMetadataGatewayUrl', () => {
  it('converts uppercase IPFS schemes to gateway URLs', () => {
    expect(getMetadataGatewayUrl('IPFS://QmExampleCid')).toBe('https://ipfs.io/ipfs/QmExampleCid')
  })
})
