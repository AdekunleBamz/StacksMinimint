import { describe, expect, it } from 'vitest'
import { formatExactTime, getExactTimeDescriptor } from './collection'

describe('getExactTimeDescriptor', () => {
  it('matches formatExactTime label output for the same timestamp', () => {
    const timestamp = 1_700_000_000_000

    expect(getExactTimeDescriptor(timestamp).label).toBe(formatExactTime(timestamp))
  })
})
