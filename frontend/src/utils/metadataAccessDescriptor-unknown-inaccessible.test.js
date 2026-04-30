import { describe, expect, it } from 'vitest'
import { getMetadataAccessDescriptor } from './collection'

describe('getMetadataAccessDescriptor', () => {
  it('marks unknown schemes as inaccessible', () => {
    const descriptor = getMetadataAccessDescriptor('ftp://example.com/meta.json')
    expect(descriptor.isAccessible).toBe(false)
    expect(descriptor.gatewayUrl).toBeNull()
  })
})
