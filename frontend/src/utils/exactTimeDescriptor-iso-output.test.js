import { describe, expect, it } from 'vitest'
import { getExactTimeDescriptor } from './collection'

describe('getExactTimeDescriptor', () => {
  it('returns an ISO timestamp when input is valid', () => {
    const descriptor = getExactTimeDescriptor('1700000000000')

    expect(descriptor.iso).toBe(new Date(1700000000000).toISOString())
  })
})
