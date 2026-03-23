import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

describe('getMetadataGatewayUrl', () => {
  it('returns null for IPFS paths with spaces', () => {
    expect(getMetadataGatewayUrl('ipfs://QmCid with-space')).toBeNull()
  })
})
