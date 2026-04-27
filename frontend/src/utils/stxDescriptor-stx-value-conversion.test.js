import { describe, expect, it } from 'vitest'
import { getSTXFormatDescriptor } from './collection'

describe('getSTXFormatDescriptor', () => {
  it('returns converted STX numeric value from microstx input', () => {
    expect(getSTXFormatDescriptor(2500000).stxValue).toBe(2.5)
  })
})
