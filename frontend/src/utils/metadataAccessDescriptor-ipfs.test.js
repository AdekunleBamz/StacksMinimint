import { describe, expect, it } from 'vitest'
import { getMetadataAccessDescriptor } from './collection'

describe('getMetadataAccessDescriptor', () => {
  it('marks IPFS metadata as gateway-accessible and requiring a gateway', () => {
    const descriptor = getMetadataAccessDescriptor('ipfs://QmCID/meta.json')

    expect(descriptor.kind).toBe('ipfs')
    expect(descriptor.isAccessible).toBe(true)
    expect(descriptor.requiresGateway).toBe(true)
    expect(descriptor.gatewayUrl).toContain('ipfs.io/ipfs/')
  })
})
