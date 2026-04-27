import { describe, expect, it } from 'vitest'
import { getSTXFormatDescriptor } from './collection'

describe('getSTXFormatDescriptor', () => {
  it('marks invalid descriptor when input cannot be parsed', () => {
    const descriptor = getSTXFormatDescriptor(undefined)

    expect(descriptor.isValid).toBe(false)
    expect(descriptor.formatted).toBe('0')
  })
})
