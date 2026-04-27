import { describe, expect, it } from 'vitest'
import { getMetadataAccessDescriptor } from './collection'

describe('getMetadataAccessDescriptor', () => {
  it('extracts IPFS gateway host from translated IPFS URLs', () => {
    const descriptor = getMetadataAccessDescriptor('ipfs://QmCID/meta.json')

    expect(descriptor.gatewayHost).toBe('ipfs.io')
  })
})
