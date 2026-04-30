import { describe, expect, it } from 'vitest'
import { getMetadataAccessDescriptor } from './collection'

describe('getMetadataAccessDescriptor', () => {
  it('flags ipfs URIs as requiring gateway access', () => {
    const descriptor = getMetadataAccessDescriptor('ipfs://bafy123')
    expect(descriptor.requiresGateway).toBe(true)
    expect(descriptor.isAccessible).toBe(true)
  })
})
