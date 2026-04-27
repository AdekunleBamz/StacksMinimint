import { describe, expect, it } from 'vitest'
import { getSTXFormatDescriptor } from './collection'

describe('getSTXFormatDescriptor', () => {
  it('marks finite values as valid descriptors', () => {
    const descriptor = getSTXFormatDescriptor(1500000)

    expect(descriptor.isValid).toBe(true)
    expect(descriptor.microstx).toBe(1500000)
  })
})
