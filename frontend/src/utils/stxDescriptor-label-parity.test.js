import { describe, expect, it } from 'vitest'
import { formatSTX, getSTXFormatDescriptor } from './collection'

describe('getSTXFormatDescriptor', () => {
  it('keeps descriptor formatted value aligned with formatSTX output', () => {
    const value = '1000000'
    expect(getSTXFormatDescriptor(value).formatted).toBe(formatSTX(value))
  })
})
