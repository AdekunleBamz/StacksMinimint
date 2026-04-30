import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

describe('getMetadataGatewayUrl', () => {
  it('removes duplicate ipfs prefix segments after the scheme', () => {
    expect(getMetadataGatewayUrl('ipfs://ipfs/bafyabc')).toBe('https://ipfs.io/ipfs/bafyabc')
  })
})
