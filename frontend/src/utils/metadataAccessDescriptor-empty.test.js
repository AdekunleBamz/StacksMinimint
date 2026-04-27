import { describe, expect, it } from 'vitest'
import { getMetadataAccessDescriptor } from './collection'

describe('getMetadataAccessDescriptor', () => {
  it('returns empty-kind descriptor for blank metadata values', () => {
    const descriptor = getMetadataAccessDescriptor('   ')

    expect(descriptor.kind).toBe('empty')
    expect(descriptor.isAccessible).toBe(false)
  })
})
