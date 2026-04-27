import { describe, expect, it } from 'vitest'
import { getMetadataAccessDescriptor } from './collection'

describe('getMetadataAccessDescriptor', () => {
  it('extracts gatewayHost from HTTPS metadata URLs', () => {
    const descriptor = getMetadataAccessDescriptor('https://example.com/meta.json')

    expect(descriptor.gatewayHost).toBe('example.com')
  })
})
