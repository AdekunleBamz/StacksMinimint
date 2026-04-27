import { describe, expect, it } from 'vitest'
import { getMetadataAccessDescriptor } from './collection'

describe('getMetadataAccessDescriptor', () => {
  it('marks unsupported schemes as inaccessible metadata', () => {
    const descriptor = getMetadataAccessDescriptor('ftp://example.com/meta.json')

    expect(descriptor.isAccessible).toBe(false)
    expect(descriptor.gatewayUrl).toBeNull()
    expect(descriptor.requiresGateway).toBe(false)
  })
})
