import { describe, expect, it } from 'vitest'
import { getMetadataAccessDescriptor } from './collection'

describe('getMetadataAccessDescriptor', () => {
  it('does not require gateway access for arweave URIs', () => {
    const descriptor = getMetadataAccessDescriptor('ar://abc123')
    expect(descriptor.requiresGateway).toBe(false)
    expect(descriptor.gatewayUrl).toBeNull()
  })
})
