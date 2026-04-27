import { describe, expect, it } from 'vitest'
import { getMetadataAccessDescriptor } from './collection'

describe('getMetadataAccessDescriptor', () => {
  it('marks HTTPS metadata as directly accessible without gateway requirement', () => {
    const descriptor = getMetadataAccessDescriptor('https://example.com/meta.json')

    expect(descriptor.kind).toBe('https')
    expect(descriptor.isAccessible).toBe(true)
    expect(descriptor.requiresGateway).toBe(false)
  })
})
